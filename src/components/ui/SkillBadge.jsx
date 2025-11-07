import React from 'react'

const SkillBadge = ({ 
  name, 
  icon, 
  variant = 'gray',
  size = 'md'
}) => {
  const variantStyles = {
    gray: 'bg-gray-100 dark:bg-gray-800 border-gray-200 dark:border-gray-700',
    blue: 'bg-blue-50 dark:bg-blue-900/30 border-blue-200 dark:border-blue-800',
    indigo: 'bg-indigo-50 dark:bg-indigo-900/30 border-indigo-200 dark:border-indigo-800',
  }

  const sizeStyles = {
    sm: {
      container: 'px-2 py-1 gap-1.5',
      icon: 'w-4 h-4',
      text: 'text-xs'
    },
    md: {
      container: 'px-3 py-1.5 gap-2',
      icon: 'w-5 h-5',
      text: 'text-sm'
    }
  }

  const currentSize = sizeStyles[size]
  const currentVariant = variantStyles[variant]

  return (
    <div className={`inline-flex items-center ${currentSize.container} ${currentVariant} border rounded-full`}>
      {/* Icon */}
      {icon && (
        <img
          src={icon}
          alt={name}
          className={`${currentSize.icon} object-contain flex-shrink-0`}
        />
      )}

      {/* Name */}
      <span className={`${currentSize.text} font-semibold text-gray-900 dark:text-white whitespace-nowrap`}>
        {name}
      </span>
    </div>
  )
}

export default SkillBadge
