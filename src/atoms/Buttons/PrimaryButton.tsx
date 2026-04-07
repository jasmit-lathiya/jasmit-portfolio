import { ReactNode, ButtonHTMLAttributes } from 'react'

interface PrimaryButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  children: ReactNode
  className?: string
}

const PrimaryButton = ({
  children,
  className,
  ...props
}: PrimaryButtonProps) => {
  return (
    <button
      className={
        'px-6 py-3 rounded-lg bg-yellow-500 dark:bg-gradient-to-r dark:from-purple-600 dark:to-pink-500 text-white hover:scale-105 transition ' +
        className
      }
      {...props}
    >
      {children}
    </button>
  )
}

export default PrimaryButton
