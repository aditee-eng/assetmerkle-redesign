import React, { useEffect, useRef } from 'react';

const GridBackground = () => {
  const canvasRef = useRef(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    let animationFrameId;

    // --- Configuration ---
    const gridColor = 'rgba(139, 92, 246, 0.05)'; // Grid is now much more subtle
    const particleColor = 'rgba(139, 92, 246, 0.8)'; // Brighter gold for the particles
    const lineColor = 'rgba(139, 92, 246, 1)';   // Base color for connection lines
    const particleRadius = 1.5;
    const particleCount = 80; // Slightly fewer particles looks better with connections
    const particleSpeed = 0.3;
    const connectionDistance = 120; // How close particles need to be to connect
    const gridSize = 50;

    let particles = [];

    const resizeCanvas = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
      
      particles = [];
      for (let i = 0; i < particleCount; i++) {
        particles.push({
          x: Math.random() * canvas.width,
          y: Math.random() * canvas.height,
          vx: (Math.random() - 0.5) * particleSpeed,
          vy: (Math.random() - 0.5) * particleSpeed,
        });
      }
    };

    const drawGrid = () => {
      ctx.strokeStyle = gridColor;
      ctx.lineWidth = 0.5;
      for (let x = 0; x < canvas.width; x += gridSize) {
        ctx.beginPath();
        ctx.moveTo(x, 0);
        ctx.lineTo(x, canvas.height);
        ctx.stroke();
      }
      for (let y = 0; y < canvas.height; y += gridSize) {
        ctx.beginPath();
        ctx.moveTo(0, y);
        ctx.lineTo(canvas.width, y);
        ctx.stroke();
      }
    };

    // --- NEW: Function to draw connections ---
    const drawConnections = () => {
      for (let i = 0; i < particles.length; i++) {
        for (let j = i + 1; j < particles.length; j++) {
          const dx = particles[i].x - particles[j].x;
          const dy = particles[i].y - particles[j].y;
          const distance = Math.sqrt(dx * dx + dy * dy);

          if (distance < connectionDistance) {
            const opacity = 1 - (distance / connectionDistance);
            ctx.beginPath();
            ctx.strokeStyle = `rgba(139, 92, 246, ${opacity * 0.5})`; // Line opacity based on distance
            ctx.lineWidth = 1;
            ctx.moveTo(particles[i].x, particles[i].y);
            ctx.lineTo(particles[j].x, particles[j].y);
            ctx.stroke();
          }
        }
      }
    };
    
    const drawParticles = () => {
        ctx.fillStyle = particleColor;
        particles.forEach(p => {
            ctx.beginPath();
            ctx.arc(p.x, p.y, particleRadius, 0, Math.PI * 2);
            ctx.fill();
        });
    };

    const updateParticles = () => {
        particles.forEach(p => {
            p.x += p.vx;
            p.y += p.vy;

            if (p.x < 0 || p.x > canvas.width) p.vx *= -1;
            if (p.y < 0 || p.y > canvas.height) p.vy *= -1;
        });
    };
    
    const animate = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      drawGrid();
      drawConnections(); // Call the new function
      drawParticles();
      updateParticles();
      animationFrameId = requestAnimationFrame(animate);
    };
    
    resizeCanvas();
    animate();
    
    window.addEventListener('resize', resizeCanvas);

    return () => {
      window.removeEventListener('resize', resizeCanvas);
      cancelAnimationFrame(animationFrameId);
    };
  }, []);

  return (
    <canvas 
      ref={canvasRef} 
      className="absolute top-0 left-0 w-full h-full z-1"
    />
  );
};

export default GridBackground;