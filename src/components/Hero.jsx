// src/components/Hero.jsx

import React from "react";

const Hero = () => {
  return (
    <div className="relative w-full h-[80vh] overflow-hidden">
<img
  src="https://th.bing.com/th/id/OIP.cBmf1BnSFtoV-XiZMM9c0QHaE7?w=264&h=180&c=7&r=0&o=5&dpr=1.3&pid=1.7"
  alt="Construction"
  className="w-full h-full absolute top-0 object-cover opacity-40 z-5"
/>

      <div className="absolute inset-0 bg-black bg-opacity-40 flex flex-col justify-center items-center text-white">
        <h1 className="text-4xl md:text-5xl font-bold mb-4">Welcome to Civil A-Z</h1>
        <p className="text-lg md:text-xl">All your construction needs in one place!</p>
      </div>
    </div>
  );
};

export default Hero;
