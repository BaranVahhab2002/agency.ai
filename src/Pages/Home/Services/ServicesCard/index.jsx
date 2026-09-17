import React, { useRef, useState } from "react";

export default function ServicesCard({ service, index }) {
  const [position, setPosition] = useState({ x: 0, y: 0 });
  const [visible, setVisible] = useState(false);

  const divRef = useRef(null);

  const handleMouseMove = (e) => {
    const rect = divRef.current.getBoundingClientRect();
    setPosition({ x: e.clientX - rect.left, y: e.clientY - rect.top });
  };
  return (
    <div
      className="relative overflow-hidden max-w-lg m-2 sm:m-4
    rounded-xl border border-gray-200 dark:border-gray-700 shadow-2xl
    shadow-gray-100 dark:shadow-white/10
    "
      onMouseEnter={() => {
        setVisible(true);
      }}
      onMouseLeave={() => {
        setVisible(false);
      }}
      ref={divRef}
      onMouseMove={handleMouseMove}
    >
      <div
        className={`pointer-events-none blur-2xl rounded-full
      bg-gradient-to-r from-blue-500 via-indigo-500 to-purple-500
      w-[300px] h-[300px] absolute z-0 transition-opacity duration-500
      mix-blend-lighten ${visible ? "opacity-70" : "opacity-0"}`}
        style={{ top: position.y - 150, left: position.x - 150 }}
      />

      <div
        className="flex items-center gap-10 p-8 hover:p-7.5 hover:m-0.5
        transition-all rounded-[10px] bg-white dark:bg-gray-900 z-10 relative"
      >
        <div className="w-fit h-fit shrink-0 rounded-full bg-gray-100 dark:bg-gray-700 p-2">
          <img
            src={service.icon}
            alt=""
            className="w-16 h-16 object-contain rounded-full bg-white dark:bg-gray-900"
          />
        </div>

        <div className="flex-1">
          <h3 className="font-bold">{service.title}</h3>

          <p className="text-sm mt-2">{service.description}</p>
        </div>
      </div>
    </div>
  );
}
