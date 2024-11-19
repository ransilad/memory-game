import React from 'react'

interface CardProps {
  image: string;
  isFlipped: boolean;
  onClick: () => void;
}

export const Card: React.FC<CardProps> = ({ image, isFlipped, onClick }) => {
  return (
    <div
      className="size-16 md:size-28 bg-zinc-800 flex items-center justify-center cursor-pointer rounded-md"
      onClick={onClick}
    >
      {isFlipped ? <img src={image} alt="Card" className="w-full h-full object-cover rounded-md" /> : null}
    </div>
  )
}
