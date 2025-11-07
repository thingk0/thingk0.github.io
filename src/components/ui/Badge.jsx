import React from 'react'

const Badge = ({ 
  children, 
  variant = 'gray', 
  size = 'sm', 
  withBorder = false,
  className = ''
}) => {
  const variantStyles = {
    indigo: 'text-indigo-600 dark:text-indigo-400 bg-indigo-50 dark:bg-indigo-900/30',
    gray: 'text-gray-600 dark:text-gray-400 bg-gray-50 dark:bg-gray-800',
    amber: 'text-amber-600 dark:text-amber-400 bg-amber-50 dark:bg-amber-900/30',
    slate: 'text-slate-600 dark:text-slate-400 bg-slate-50 dark:bg-slate-900/30',
    green: 'text-green-700 dark:text-green-300 bg-green-50 dark:bg-green-900/20'
  }

  const sizeStyles = {
    sm: 'text-xs',
    md: 'text-sm'
  }

  const borderStyle = withBorder 
    ? 'border border-gray-200 dark:border-gray-700' 
    : ''

  return (
    <span 
      className={`inline-block px-3 py-1 rounded-full font-semibold ${variantStyles[variant]} ${sizeStyles[size]} ${borderStyle} ${className}`}
    >
      {children}
    </span>
  )
}

export default Badge
