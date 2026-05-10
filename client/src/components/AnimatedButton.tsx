import React from 'react'
import { motion } from 'framer-motion'
import { Link } from 'react-router-dom'

interface AnimatedButtonProps {
  onClick?: () => void
  disabled?: boolean
  className?: string
  children: React.ReactNode
  type?: 'button' | 'submit' | 'reset'
  variant?: 'primary' | 'secondary' | 'tertiary'
}

interface AnimatedLinkProps {
  to: string
  onClick?: () => void
  className?: string
  children: React.ReactNode
  variant?: 'primary' | 'secondary' | 'tertiary'
}

export const AnimatedButton: React.FC<AnimatedButtonProps> = ({
  onClick,
  disabled,
  className,
  children,
  type = 'button',
  variant = 'primary'
}) => {
  return (
    <motion.button
      type={type}
      onClick={onClick}
      disabled={disabled}
      className={className}
      whileHover={!disabled ? { scale: 1.05, y: -2 } : {}}
      whileTap={!disabled ? { scale: 0.95 } : {}}
      transition={{ type: 'spring', stiffness: 300, damping: 20 }}
    >
      {children}
    </motion.button>
  )
}

export const AnimatedLink: React.FC<AnimatedLinkProps> = ({
  to,
  onClick,
  className,
  children,
  variant = 'primary'
}) => {
  return (
    <motion.div
      whileHover={{ scale: 1.05, y: -2 }}
      whileTap={{ scale: 0.95 }}
      transition={{ type: 'spring', stiffness: 300, damping: 20 }}
    >
      <Link to={to} onClick={onClick} className={className}>
        {children}
      </Link>
    </motion.div>
  )
}
