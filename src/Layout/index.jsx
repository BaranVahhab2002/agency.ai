import React, { useEffect, useRef, useState } from "react";

import Navbar from "../Components/Navbar";
import { Outlet } from "react-router-dom";
import Footer from "../Components/Footer";

export default function Layout() {
  const [theme, setTheme] = useState(
    localStorage.getItem("theme") || "light"
  );

  const dotRef = useRef(null);
  const outLineRef = useRef(null);
  const mouse = useRef({ x: 0, y: 0 });
  const position = useRef({ x: 0, y: 0 });

  useEffect(() => {
    const handleMouseMove = (e) => {
      mouse.current.x = e.clientX;
      mouse.current.y = e.clientY;
    };

    document.addEventListener("mousemove", handleMouseMove);

    const animate = () => {
      position.current.x +=
        (mouse.current.x - position.current.x) * 0.1;

      position.current.y +=
        (mouse.current.y - position.current.y) * 0.1;

      if (dotRef.current && outLineRef.current) {
        dotRef.current.style.transform = `translate3d(
          ${mouse.current.x - 6}px,
          ${mouse.current.y - 6}px,
          0
        )`;

        outLineRef.current.style.transform = `translate3d(
          ${position.current.x - 20}px,
          ${position.current.y - 20}px,
          0
        )`;
      }

      requestAnimationFrame(animate);
    };

    animate();

    return () => {
      document.removeEventListener("mousemove", handleMouseMove);
    };
  }, []);

  return (
    <div className="min-h-screen flex flex-col dark:bg-black">
      <Navbar theme={theme} setTheme={setTheme} />

      <main className="flex-1">
        <Outlet />
      </main>

      <Footer theme={theme} />

      <div
        ref={outLineRef}
        className="fixed top-0 left-0 h-10 w-10
        rounded-full border border-primary
        pointer-events-none z-[9999]"
      />

      <div
        ref={dotRef}
        className="fixed top-0 left-0 h-3 w-3
        rounded-full bg-primary
        pointer-events-none z-[9999]"
      />
    </div>
  );
}