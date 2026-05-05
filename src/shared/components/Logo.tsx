import React from 'react'

interface LogoProps {
  size?: 'sm' | 'md' | 'lg'
  className?: string
  useImage?: boolean
  imagePath?: string
}

const Logo: React.FC<LogoProps> = ({ 
  size = 'md', 
  className = '', 
  useImage = false,
  imagePath = '/images/pbox-logo.png'
}) => {
  const sizeClasses = {
    sm: 'text-lg',
    md: 'text-xl',
    lg: 'text-2xl',
  }

  const imageSizeClasses = {
    sm: 'h-20',
    md: 'h-28',
    lg: 'h-40',
  }

  // If useImage is true and image exists, show image logo
  if (useImage) {
    return (
      <img 
        src={imagePath} 
        alt="PBOX Construction" 
        className={`${imageSizeClasses[size]} w-auto ${className}`}
      />
    )
  }

  // Otherwise show text logo
  return (
    <div className={`font-black ${sizeClasses[size]} ${className} leading-none`}>
      <span className="text-[#E01A4F]">P</span>
      <span className="text-current">BOX</span>
      <span className="block text-[0.45em] font-bold tracking-[0.2em] uppercase text-current opacity-70">
        Construction
      </span>
    </div>
  )
}

export default Logo


