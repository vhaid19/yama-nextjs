'use client'
import Image from 'next/image'
import { useState } from 'react'
import {
  Structuralconsultancy,
  Consultingg,
  Contracting,
  Projectmanagement,
  Architecturee,
  Greenbulding
} from '../../../public/index'

const LandscapeCard = ({ imageUrl, title }) => {
  const [isLiked, setIsLiked] = useState(false)

  return (
    <div className="relative flex w-full max-w-md h-48 bg-white rounded-xl shadow-lg overflow-hidden transition-all duration-300 hover:shadow-xl transform hover:scale-102 cursor-pointer">
      {/* Left side image */}
      <div className="absolute left-0 h-full w-1/3">
        <Image
          src={imageUrl}
          alt={title}
          layout="fill"
          objectFit="cover"
          className="transition-transform duration-300 hover:scale-110"
        />
      </div>

      {/* Center content */}
      <div className="absolute left-1/3 right-0 h-full flex flex-col justify-center items-center px-6">
        <h2 className="text-xl font-semibold text-gray-800 mb-2 transition-colors hover:text-blue-600">
          {title}
        </h2>

        {/* Like button */}
        <button
          onClick={() => setIsLiked(!isLiked)}
          className="absolute top-4 right-4 transition-transform duration-300 hover:scale-110"
        >
          <svg
            className={`w-6 h-6 ${isLiked ? 'text-red-500 fill-current' : 'text-gray-400'}`}
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
          >
            <path d="M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z" />
          </svg>
        </button>
      </div>
    </div>
  )
}

// Example usage:
export default function Page() {
  const cards = [
    {
      imageUrl: Greenbulding,
      title: 'Green Bulding'
    },
    {
      imageUrl: Structuralconsultancy,
      title: 'Structural Consultancy'
    },
    {
      imageUrl: Consultingg,
      title: 'Consulting'
    },
    {
      imageUrl: Contracting,
      title: 'Contracting'
    },
    {
      imageUrl: Architecturee,
      title: 'Architecture'
    },
    {
      imageUrl: Projectmanagement,
      title: 'Project Management'
    },
    // Add more cards as needed
  ]

  return (
    <div className="p-6 flex m-auto md:w-[95%] flex-wrap gap-6 ">
      {cards.map((card, index) => (
        <LandscapeCard
          key={index}
          imageUrl={card.imageUrl}
          title={card.title}
        />
      ))}
    </div>
  )
}
