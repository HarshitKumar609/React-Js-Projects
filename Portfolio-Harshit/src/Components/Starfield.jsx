import { useEffect, useRef } from "react";

const STAR_COUNT = 120;

export default function Starfield() {
  const canvasRef = useRef(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    const ctx = canvas.getContext("2d");

    let stars = [];
    let animationId;

    // Resize canvas
    const resize = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    };

    // Create stars
    const createStars = () => {
      stars = [];
      for (let i = 0; i < STAR_COUNT; i++) {
        stars.push({
          x: Math.random() * canvas.width,
          y: Math.random() * canvas.height,
          r: Math.random() * 1.3 + 0.8,
          speed: Math.random() * 0.3 + 0.1,
          alpha: Math.random() * 0.5 + 0.3,
        });
      }
    };

    // Draw & animate stars
    const drawStars = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);

      for (const s of stars) {
        ctx.beginPath();
        ctx.arc(s.x, s.y, s.r, 0, Math.PI * 2);
        ctx.fillStyle = `rgba(255, 255, 145, ${s.alpha})`;
        ctx.fill();

        // Move star upward
        s.y -= s.speed;
        if (s.y < 0) s.y = canvas.height;
      }

      animationId = requestAnimationFrame(drawStars);
    };

    resize();
    createStars();
    drawStars();

    window.addEventListener("resize", resize);

    return () => {
      window.removeEventListener("resize", resize);
      cancelAnimationFrame(animationId);
    };
  }, []);

  return <canvas ref={canvasRef} className="fixed inset-0 -z-10   " />;
}
