import { ReactNode } from 'react'

interface SecondaryButtonProps {
  children: ReactNode
  className?: string
}

const SecondaryButton = ({
  children,
  className,
  ...props
}: SecondaryButtonProps) => {
  return (
    <button
      className={`
        px-6 py-3 rounded-lg text-white
        border-2 border-transparent
        bg-[linear-gradient(#0000,#0000),linear-gradient(to_right,#9333ea,#ec4899)]
        bg-origin-border bg-clip-padding, border
        hover:scale-105 transition
        ${className}
      `}
      {...props}
    >
      {children}
    </button>
  )
}

export default SecondaryButton
