import { useEffect, useRef, type ReactNode } from 'react'

type RevealProps = {
  children: ReactNode
  className?: string
  delay?: 1 | 2 | 3
  as?: 'div' | 'article' | 'li'
}

export function Reveal({
  children,
  className = '',
  delay,
  as: Tag = 'div',
}: RevealProps) {
  const ref = useRef<HTMLElement | null>(null)

  useEffect(() => {
    const node = ref.current
    if (!node) return

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          node.classList.add('is-visible')
          observer.unobserve(node)
        }
      },
      { threshold: 0.15, rootMargin: '0px 0px -40px 0px' },
    )

    observer.observe(node)
    return () => observer.disconnect()
  }, [])

  const delayClass = delay ? ` reveal-delay-${delay}` : ''

  return (
    <Tag
      ref={ref as never}
      className={`reveal${delayClass}${className ? ` ${className}` : ''}`}
    >
      {children}
    </Tag>
  )
}
