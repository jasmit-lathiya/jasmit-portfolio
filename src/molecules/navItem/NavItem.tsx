import { memo } from 'react'

interface NavItemProps {
  children: string
  onClick: () => void
}

const NavItem = memo(({ children, onClick }: NavItemProps) => (
  <span
    onClick={onClick}
    className="hidden md:block cursor-pointer text-xs sm:text-sm lg:text-base"
  >
    {children}
  </span>
))

export default NavItem
