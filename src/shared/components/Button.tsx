import React from 'react'

interface ButtonProps {
  variant?: 'primary' | 'secondary' | 'outline'
  size?: 'sm' | 'md' | 'lg'
  children: React.ReactNode
  onClick?: () => void
  className?: string
  type?: 'button' | 'submit' | 'reset'
  'aria-label'?: string
}

const Button: React.FC<ButtonProps> = ({
  variant = 'primary',
  size = 'md',
  children,
  onClick,
  className = '',
  type = 'button',
  'aria-label': ariaLabel,
}) => {
  // Variant styles
  const variantClasses = {
    primary: 'bg-[#E10600] text-white hover:bg-[#B30500] active:bg-[#8A0400]',
    secondary:
      'bg-white text-[#E10600] border-2 border-[#E10600] hover:bg-[#E10600] hover:text-white',
    outline:
      'bg-transparent text-[#111827] border-2 border-[#1F2937] hover:bg-[#1F2937] hover:text-white',
  }

  // Size styles
  const sizeClasses = {
    sm: 'px-4 py-2 text-sm',
    md: 'px-6 py-3 text-base',
    lg: 'px-8 py-4 text-lg',
  }

  return (
    <button
      type={type}
      onClick={onClick}
      aria-label={ariaLabel}
      className={`
        ${variantClasses[variant]}
        ${sizeClasses[size]}
        rounded-xl
        font-semibold
        transition-all
        duration-300
        ease-in-out
        ${className}
      `
        .trim()
        .replace(/\s+/g, ' ')}
    >
      {children}
    </button>
  )
}

export default Button
