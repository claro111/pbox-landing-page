import React from 'react'

interface CardProps {
  children: React.ReactNode
  hover?: boolean
  className?: string
}

const Card: React.FC<CardProps> = ({
  children,
  hover = false,
  className = '',
}) => {
  return (
    <div
      className={`
        bg-white
        rounded-xl
        shadow-md
        p-6
        ${hover ? 'transition-all duration-300 ease-in-out hover:scale-105 hover:shadow-lg' : ''}
        ${className}
      `
        .trim()
        .replace(/\s+/g, ' ')}
    >
      {children}
    </div>
  )
}

export default Card


