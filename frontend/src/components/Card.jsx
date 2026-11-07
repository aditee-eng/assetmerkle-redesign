
import React from 'react';

const Card = ({ imageSrc, title, description, onClick }) => {
  return (
    <div
      onClick={onClick}
      className="cursor-pointer bg-black border border-blue-400 rounded-2xl shadow-lg p-6 flex flex-col items-center transition-transform duration-300 transform hover:scale-105 hover:shadow-blue-500/50 w-[400px]"
    >
      <img
        src={imageSrc}
        alt={title}
        className="h-40 w-40 object-contain mb-4"
      />
      <h2 className="text-white text-2xl font-semibold mb-2">{title}</h2>
      <p className="text-white text-center text-base">{description}</p>
    </div>
  );
};

export default Card;
