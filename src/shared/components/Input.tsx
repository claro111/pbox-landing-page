import React from 'react'

interface InputProps {
  type: 'text' | 'email' | 'textarea'
  name: string
  placeholder: string
  value: string
  onChange: (value: string) => void
  onBlur?: () => void
  error?: string
  required?: boolean
  label?: string
  className?: string
}

const Input: React.FC<InputProps> = ({
  type,
  name,
  placeholder,
  value,
  onChange,
  onBlur,
  error,
  required = false,
  label,
  className = '',
}) => {
  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    onChange(e.target.value)
  }

  const baseClasses = `
    w-full
    px-4
    py-3
    border-2
    rounded-xl
    transition-all
    duration-300
    focus:outline-none
    focus:ring-2
    focus:ring-[#E10600]
    ${error ? 'border-red-500 focus:border-red-500' : 'border-gray-300 focus:border-[#E10600]'}
  `
    .trim()
    .replace(/\s+/g, ' ')

  const inputId = `input-${name}`

  return (
    <div className={`flex flex-col gap-2 ${className}`}>
      {label && (
        <label
          htmlFor={inputId}
          className="text-sm font-semibold text-[#1F2937]"
        >
          {label}
          {required && <span className="text-red-500 ml-1">*</span>}
        </label>
      )}

      {type === 'textarea' ? (
        <textarea
          id={inputId}
          name={name}
          placeholder={placeholder}
          value={value}
          onChange={handleChange}
          onBlur={onBlur}
          required={required}
          rows={5}
          className={baseClasses}
          aria-label={label || placeholder}
          aria-invalid={!!error}
          aria-describedby={error ? `${inputId}-error` : undefined}
        />
      ) : (
        <input
          id={inputId}
          type={type}
          name={name}
          placeholder={placeholder}
          value={value}
          onChange={handleChange}
          onBlur={onBlur}
          required={required}
          className={baseClasses}
          aria-label={label || placeholder}
          aria-invalid={!!error}
          aria-describedby={error ? `${inputId}-error` : undefined}
        />
      )}

      {error && (
        <span
          id={`${inputId}-error`}
          className="text-sm text-red-500"
          role="alert"
        >
          {error}
        </span>
      )}
    </div>
  )
}

export default Input
