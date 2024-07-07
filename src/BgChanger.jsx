import React, { useState } from "react";

const BgChanger = () => {
  const colors = ["white", "blue", "green"];
  const [color, setColor] = useState(colors[0]);

  return (
    <div
      className="w-full h-screen duration-150 "
      style={{ backgroundColor: color }}>
      <h1 className="flex flex-wrap justify-center" style={{fontSize:16}}> color: {color}</h1>
      <div className="fixed flex flex-wrap justify-center bottom-12 inset-x-0 px-4">
        <div className="flex flex-wrap justify-center gap-4 shadow-lg bg-indigo-400 px-3 py-2 rounded-full">
          {colors.map((color, index, colors) => (
            <button
              key={index}
              className="outline-none shadow-lg px-4 py-2 rounded-full text-black"
              style={{ backgroundColor: color }}
              onClick={() => setColor(color)}
            >
              {color}
            </button>
          ))}
        </div>
      </div>
    </div>
  );
};

export default BgChanger;
