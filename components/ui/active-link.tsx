'use client'

import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { ReactNode } from 'react'
import clsx from 'clsx'

interface ActiveLinkProps {
  href: string
  children: ReactNode
  className?: string
  activeClassName?: string
}

export function ActiveLink({ href, children, className = '', activeClassName = '' }: ActiveLinkProps) {
  const pathname = usePathname()
  const isActive = pathname === href

  return (
    <Link
      href={href}
      className={clsx(
        className,
        isActive && activeClassName,
        'transition-colors duration-200',
        {
          'text-cyan-500 font-semibold': isActive,
          'text-secondary hover:text-cyan-300': !isActive,
        }
      )}
    >
      {children}
    </Link>
  )
}

