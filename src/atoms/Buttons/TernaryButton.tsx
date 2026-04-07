import { ReactNode } from 'react'

interface TernaryButtonProps {
  children: ReactNode
  className: string
}

const TernaryButton = ({
  children,
  className,
  ...props
}: TernaryButtonProps) => {
  return (
    <button
      className={
        'px-6 py-3 rounded-lg bg-gradient-to-r from-purple-600 to-pink-500 text-white hover:scale-105 transition ' +
        className
      }
      {...props}
    >
      {children}
    </button>
  )
}

export default TernaryButton
