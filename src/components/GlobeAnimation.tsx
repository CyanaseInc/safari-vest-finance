
import React, { useRef, useEffect } from 'react';
import * as THREE from 'three';

const GlobeAnimation = () => {
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!containerRef.current) return;

    // Scene setup
    const scene = new THREE.Scene();
    scene.background = new THREE.Color("#0a1929"); // Dark blue background like in the reference image
    
    const camera = new THREE.PerspectiveCamera(45, containerRef.current.clientWidth / containerRef.current.clientHeight, 0.1, 1000);
    const renderer = new THREE.WebGLRenderer({ antialias: true });
    
    renderer.setSize(containerRef.current.clientWidth, containerRef.current.clientHeight);
    containerRef.current.appendChild(renderer.domElement);

    // Create globe
    const radius = 2;
    const segments = 64;
    const geometry = new THREE.SphereGeometry(radius, segments, segments);
    const material = new THREE.MeshPhongMaterial({
      color: '#203354',  // Darker blue for the globe base
      transparent: true,
      opacity: 0.6,
      wireframe: false,
    });
    const globe = new THREE.Mesh(geometry, material);
    scene.add(globe);

    // Add points to represent continents (dot pattern like in the image)
    const continentsData = [
      { lat: 9, lng: 19, points: 100 },   // Africa
      { lat: 40, lng: -95, points: 80 },  // North America
      { lat: -14, lng: -52, points: 70 }, // South America
      { lat: 35, lng: 105, points: 120 }, // Asia
      { lat: 54, lng: 15, points: 80 },   // Europe
      { lat: -25, lng: 135, points: 60 }  // Australia
    ];

    const pointGeometry = new THREE.SphereGeometry(0.02, 8, 8);
    const pointMaterial = new THREE.MeshBasicMaterial({ color: '#5e9fff' }); // Light blue dots

    continentsData.forEach(({ lat, lng, points }) => {
      // Create clusters of points for each continent
      for (let i = 0; i < points; i++) {
        const point = new THREE.Mesh(pointGeometry, pointMaterial);
        // Add some random offset to create a continent shape
        const offset = Math.random() * 0.2;
        const phi = (90 - (lat + (Math.random() * 20 - 10))) * (Math.PI / 180);
        const theta = (lng + (Math.random() * 40 - 20) + 180) * (Math.PI / 180);
        
        point.position.x = -(radius * Math.sin(phi) * Math.cos(theta));
        point.position.z = (radius * Math.sin(phi) * Math.sin(theta));
        point.position.y = (radius * Math.cos(phi));
        
        scene.add(point);
      }
    });

    // Add ambient light
    const ambientLight = new THREE.AmbientLight(0x404040, 0.6);
    scene.add(ambientLight);

    // Add point light
    const pointLight = new THREE.PointLight(0x7597de, 1);
    pointLight.position.set(5, 3, 5);
    scene.add(pointLight);

    // Add connection lines (like in the reference)
    const connectionLines = [];
    const lineMaterial = new THREE.LineBasicMaterial({ 
      color: '#ff4d88',  // Pink line color from the reference
      transparent: true,
      opacity: 0.7 
    });

    const createConnectionLine = () => {
      // Generate random points on the globe
      const createRandomPoint = () => {
        const phi = Math.random() * Math.PI * 2;
        const theta = Math.random() * Math.PI;
        const x = -(radius * Math.sin(theta) * Math.cos(phi));
        const z = (radius * Math.sin(theta) * Math.sin(phi));
        const y = (radius * Math.cos(theta));
        return new THREE.Vector3(x, y, z);
      };

      const start = createRandomPoint();
      const end = createRandomPoint();
      
      // Create a curved path for the line
      const curvePoints = [];
      curvePoints.push(start);
      
      // Add a midpoint slightly above the surface
      const mid = new THREE.Vector3().addVectors(start, end).multiplyScalar(0.5);
      mid.normalize().multiplyScalar(radius * 1.3); // Slightly above surface
      curvePoints.push(mid);
      
      curvePoints.push(end);
      
      const curve = new THREE.CatmullRomCurve3(curvePoints);
      const points = curve.getPoints(50);
      const lineGeometry = new THREE.BufferGeometry().setFromPoints(points);
      
      const line = new THREE.Line(lineGeometry, lineMaterial);
      scene.add(line);
      
      connectionLines.push({
        line,
        life: 0,
        maxLife: 2 + Math.random() * 3 // 2-5 seconds lifespan
      });
    };

    // Create initial connection lines
    for (let i = 0; i < 5; i++) {
      createConnectionLine();
    }

    // Position camera
    camera.position.z = 6;

    // Create connection line every few seconds
    const lineInterval = setInterval(() => {
      if (connectionLines.length < 10) {
        createConnectionLine();
      }
    }, 2000);

    // Animation loop
    const clock = new THREE.Clock();
    const animate = () => {
      requestAnimationFrame(animate);
      
      const delta = clock.getDelta();

      // Slowly rotate the globe
      globe.rotation.y += 0.05 * delta;
      
      // Update connection lines
      connectionLines.forEach((connection, index) => {
        connection.life += delta;
        
        // Fade out the line as it reaches its lifespan
        if (connection.life > connection.maxLife) {
          scene.remove(connection.line);
          connectionLines.splice(index, 1);
        } else {
          // Fade effect
          const opacity = connection.life < connection.maxLife / 2 
            ? connection.life / (connection.maxLife / 2) // Fade in
            : 1 - ((connection.life - connection.maxLife / 2) / (connection.maxLife / 2)); // Fade out
            
          connection.line.material.opacity = opacity * 0.7;
        }
      });

      renderer.render(scene, camera);
    };

    animate();

    // Handle window resize
    const handleResize = () => {
      if (!containerRef.current) return;
      camera.aspect = containerRef.current.clientWidth / containerRef.current.clientHeight;
      camera.updateProjectionMatrix();
      renderer.setSize(containerRef.current.clientWidth, containerRef.current.clientHeight);
    };

    window.addEventListener('resize', handleResize);

    return () => {
      window.removeEventListener('resize', handleResize);
      clearInterval(lineInterval);
      if (containerRef.current) {
        containerRef.current.removeChild(renderer.domElement);
      }
      
      // Clean up all THREE.js objects
      scene.children.forEach(child => {
        if (child.geometry) child.geometry.dispose();
        if (child.material) {
          if (Array.isArray(child.material)) {
            child.material.forEach(material => material.dispose());
          } else {
            child.material.dispose();
          }
        }
      });
    };
  }, []);

  return <div ref={containerRef} className="w-full h-full" />;
};

export default GlobeAnimation;
