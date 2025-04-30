
import { Button } from "@/components/ui/button"
import { useEffect, useRef } from "react"
import { ArrowRight, Network } from "lucide-react"
import { motion } from "framer-motion"

export const Hero = () => {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    // Make canvas responsive
    const resizeCanvas = () => {
      const container = canvas.parentElement;
      if (!container) return;
      canvas.width = container.clientWidth;
      canvas.height = container.clientHeight;
    };
    resizeCanvas();
    window.addEventListener('resize', resizeCanvas);

    // Animation settings
    const particleCount = 100;
    const connectionDistance = 100;
    const particles: { x: number; y: number; vx: number; vy: number; color: string }[] = [];

    // Create particles
    for (let i = 0; i < particleCount; i++) {
      particles.push({
        x: Math.random() * canvas.width,
        y: Math.random() * canvas.height,
        vx: Math.random() * 0.5 - 0.25,
        vy: Math.random() * 0.5 - 0.25,
        color: i % 5 === 0 ? '#9b87f5' : '#D6BCFA'
      });
    }

    // Animation function
    const animate = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);

      // Update and draw particles
      particles.forEach(particle => {
        particle.x += particle.vx;
        particle.y += particle.vy;

        // Bounce off edges
        if (particle.x < 0 || particle.x > canvas.width) particle.vx *= -1;
        if (particle.y < 0 || particle.y > canvas.height) particle.vy *= -1;

        ctx.beginPath();
        ctx.arc(particle.x, particle.y, 2, 0, Math.PI * 2);
        ctx.fillStyle = particle.color;
        ctx.fill();
      });

      // Draw connections
      particles.forEach((p1, i) => {
        particles.slice(i + 1).forEach(p2 => {
          const dx = p1.x - p2.x;
          const dy = p1.y - p2.y;
          const distance = Math.sqrt(dx * dx + dy * dy);

          if (distance < connectionDistance) {
            ctx.beginPath();
            ctx.moveTo(p1.x, p1.y);
            ctx.lineTo(p2.x, p2.y);
            ctx.strokeStyle = `rgba(155, 135, 245, ${1 - distance / connectionDistance})`;
            ctx.lineWidth = 0.5;
            ctx.stroke();
          }
        });
      });

      requestAnimationFrame(animate);
    };

    // Start animation
    animate();

    // Cleanup
    return () => {
      window.removeEventListener('resize', resizeCanvas);
    };
  }, []);

  return (
    <div className="relative overflow-hidden bg-white">
      <canvas 
        ref={canvasRef} 
        className="absolute inset-0 z-0 w-full h-full"
        style={{ opacity: 0.6 }}
      />
      <div className="max-w-7xl mx-auto">
        <div className="relative z-10 pb-8 sm:pb-16 md:pb-20 lg:pb-28 xl:pb-32">
          <div className="mt-10 mx-auto max-w-7xl px-4 sm:mt-12 sm:px-6 md:mt-16 lg:mt-20 lg:px-8 xl:mt-28">
            <div className="flex flex-col lg:flex-row items-center">
              <div className="lg:w-1/2 lg:pr-8">
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8 }}
                  className="sm:text-center lg:text-left"
                >
                  <h1 className="text-4xl tracking-tight font-extrabold text-gray-900 sm:text-5xl md:text-6xl">
                    <span className="block">Digitizing Village</span>
                    <span className="block text-purple-700">Savings Groups</span>
                  </h1>
                  <p className="mt-3 text-base text-gray-500 sm:mt-5 sm:text-lg sm:max-w-xl sm:mx-auto md:mt-5 md:text-xl lg:mx-0">
                    Empowering African communities with modern financial tools. Save, invest, and grow together through mobile technology.
                  </p>
                  <div className="mt-5 sm:mt-8 sm:flex sm:justify-center lg:justify-start">
                    <motion.div
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                      className="rounded-md shadow"
                    >
                      <Button className="w-full flex items-center justify-center px-8 py-3 text-base font-medium rounded-md text-white bg-purple-700 hover:bg-purple-800 md:py-4 md:text-lg md:px-10">
                        Get Started <ArrowRight className="ml-2 h-5 w-5" />
                      </Button>
                    </motion.div>
                    <motion.div
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                      className="mt-3 sm:mt-0 sm:ml-3"
                    >
                      <Button variant="outline" className="w-full flex items-center justify-center px-8 py-3 text-base font-medium rounded-md text-purple-700 border-purple-700 hover:bg-purple-50 md:py-4 md:text-lg md:px-10">
                        Learn More <Network className="ml-2 h-5 w-5" />
                      </Button>
                    </motion.div>
                  </div>
                </motion.div>
              </div>
              
              <motion.div 
                initial={{ opacity: 0, x: 50 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8, delay: 0.3 }}
                className="lg:w-1/2 mt-12 lg:mt-0"
              >
                <div className="relative">
                  <img 
                    src="https://images.unsplash.com/photo-1486312338219-ce68d2c6f44d" 
                    alt="Mobile banking app" 
                    className="w-full rounded-lg shadow-2xl transform lg:scale-110 lg:translate-x-10 object-cover"
                    style={{ height: "400px" }}
                  />
                  <div className="absolute -bottom-4 -left-4 bg-white p-4 rounded-lg shadow-lg">
                    <div className="flex items-center space-x-2">
                      <div className="w-3 h-3 rounded-full bg-green-500"></div>
                      <span className="text-sm font-semibold">Secure Transactions</span>
                    </div>
                  </div>
                  <div className="absolute -top-4 -right-4 bg-purple-100 p-3 rounded-full shadow-md">
                    <Network size={28} className="text-purple-700" />
                  </div>
                </div>
              </motion.div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
