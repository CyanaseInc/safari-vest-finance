
import React, { useRef, useEffect } from 'react';
import * as THREE from 'three';

const GlobeAnimation = () => {
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!containerRef.current) return;

    // Scene setup
    const scene = new THREE.Scene();
    const camera = new THREE.PerspectiveCamera(45, containerRef.current.clientWidth / containerRef.current.clientHeight, 0.1, 1000);
    const renderer = new THREE.WebGLRenderer({ antialias: true, alpha: true });
    
    renderer.setSize(containerRef.current.clientWidth, containerRef.current.clientHeight);
    containerRef.current.appendChild(renderer.domElement);

    // Create globe
    const radius = 2;
    const segments = 64;
    const geometry = new THREE.SphereGeometry(radius, segments, segments);
    const material = new THREE.MeshPhongMaterial({
      color: '#9b87f5',
      transparent: true,
      opacity: 0.2,
      wireframe: true,
    });
    const globe = new THREE.Mesh(geometry, material);
    scene.add(globe);

    // Add points
    const points: THREE.Mesh[] = [];
    const continents = [
      { lat: 9, lng: 19 },   // Africa
      { lat: 40, lng: -95 }, // North America
      { lat: -14, lng: -52 }, // South America
      { lat: 35, lng: 105 }, // Asia
      { lat: 54, lng: 15 },  // Europe
      { lat: -25, lng: 135 } // Australia
    ];

    const pointGeometry = new THREE.SphereGeometry(0.05, 16, 16);
    const pointMaterial = new THREE.MeshBasicMaterial({ color: '#D6BCFA' });

    continents.forEach(({ lat, lng }) => {
      const point = new THREE.Mesh(pointGeometry, pointMaterial);
      const phi = (90 - lat) * (Math.PI / 180);
      const theta = (lng + 180) * (Math.PI / 180);
      point.position.x = -(radius * Math.sin(phi) * Math.cos(theta));
      point.position.z = (radius * Math.sin(phi) * Math.sin(theta));
      point.position.y = (radius * Math.cos(phi));
      points.push(point);
      scene.add(point);
    });

    // Add ambient light
    const ambientLight = new THREE.AmbientLight(0x404040);
    scene.add(ambientLight);

    // Add point light
    const pointLight = new THREE.PointLight(0xffffff, 1);
    pointLight.position.set(5, 3, 5);
    scene.add(pointLight);

    // Position camera
    camera.position.z = 6;

    // Animation lines
    const lines: THREE.Line[] = [];
    const lineMaterial = new THREE.LineBasicMaterial({ 
      color: '#9b87f5',
      transparent: true,
      opacity: 0.4 
    });

    // Create moving points between continents
    const movingPoints: {
      mesh: THREE.Mesh;
      fromPoint: THREE.Vector3;
      toPoint: THREE.Vector3;
      progress: number;
      speed: number;
    }[] = [];

    const createMovingPoint = () => {
      const from = points[Math.floor(Math.random() * points.length)];
      const to = points[Math.floor(Math.random() * points.length)];
      if (from === to) return;

      const movingPointGeo = new THREE.SphereGeometry(0.02, 8, 8);
      const movingPointMat = new THREE.MeshBasicMaterial({ color: '#8B5CF6' });
      const movingPoint = new THREE.Mesh(movingPointGeo, movingPointMat);
      
      movingPoints.push({
        mesh: movingPoint,
        fromPoint: from.position.clone(),
        toPoint: to.position.clone(),
        progress: 0,
        speed: 0.002 + Math.random() * 0.003
      });
      
      scene.add(movingPoint);
    };

    // Create initial moving points
    for (let i = 0; i < 5; i++) {
      createMovingPoint();
    }

    // Animation loop
    const animate = () => {
      requestAnimationFrame(animate);

      // Rotate globe
      globe.rotation.y += 0.002;

      // Update moving points
      movingPoints.forEach((point, index) => {
        point.progress += point.speed;
        
        if (point.progress >= 1) {
          scene.remove(point.mesh);
          movingPoints.splice(index, 1);
          createMovingPoint();
        } else {
          // Calculate curved path
          const midPoint = point.fromPoint.clone().add(point.toPoint).multiplyScalar(0.5);
          midPoint.normalize().multiplyScalar(radius * 1.5);
          
          const p1 = point.fromPoint.clone();
          const p2 = midPoint;
          const p3 = point.toPoint.clone();
          
          point.mesh.position.x = Math.pow(1 - point.progress, 2) * p1.x + 
                                 2 * (1 - point.progress) * point.progress * p2.x + 
                                 Math.pow(point.progress, 2) * p3.x;
          
          point.mesh.position.y = Math.pow(1 - point.progress, 2) * p1.y + 
                                 2 * (1 - point.progress) * point.progress * p2.y + 
                                 Math.pow(point.progress, 2) * p3.y;
          
          point.mesh.position.z = Math.pow(1 - point.progress, 2) * p1.z + 
                                 2 * (1 - point.progress) * point.progress * p2.z + 
                                 Math.pow(point.progress, 2) * p3.z;
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
      if (containerRef.current) {
        containerRef.current.removeChild(renderer.domElement);
      }
    };
  }, []);

  return <div ref={containerRef} className="w-full h-full" />;
};

export default GlobeAnimation;
