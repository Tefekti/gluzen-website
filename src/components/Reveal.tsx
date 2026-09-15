import type { ElementType, HTMLAttributes, ReactNode } from 'react'
import { useInView } from '../hooks/useInView'

interface RevealProps extends HTMLAttributes<HTMLElement> {
  children: ReactNode
  as?: ElementType
  delay?: number
}

export function Reveal({ children, as: Tag = 'div', delay = 0, className = '', style, ...rest }: RevealProps) {
  const { ref, isInView } = useInView<HTMLElement>()

  return (
    <Tag
      ref={ref}
      className={`reveal ${isInView ? 'is-visible' : ''} ${className}`}
      style={{ transitionDelay: isInView ? `${delay}ms` : '0ms', ...style }}
      {...rest}
    >
      {children}
    </Tag>
  )
}
