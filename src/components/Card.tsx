import React from 'react'

interface CardProps {
  image: string;
  isFlipped: boolean;
  onClick: () => void;
}

export const Card: React.FC<CardProps> = ({ image, isFlipped, onClick }) => {
  return (
    <div
      className="w-full aspect-square bg-zinc-800 flex items-center justify-center cursor-pointer rounded-md bg-cover bg-center"
      onClick={onClick}
      style={{ backgroundImage: isFlipped ? `url(${image})` : '' }}
    />
  )
}
