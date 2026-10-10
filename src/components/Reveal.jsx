import { useReveal } from '../hooks/useReveal.js'

/**
 * Reveal — wraps children and animates them into view on scroll.
 * variant: 'up' (default) | 'left' | 'right' | 'scale'
 */
export default function Reveal({
  children,
  delay = 0,
  variant = 'up',
  className = '',
  as: Tag = 'div',
  ...rest
}) {
  const [ref, visible] = useReveal()

  const variantClass =
    variant === 'left'
      ? 'reveal-left'
      : variant === 'right'
        ? 'reveal-right'
        : variant === 'scale'
          ? 'reveal-scale'
          : ''

  return (
    <Tag
      ref={ref}
      className={`reveal ${variantClass} ${visible ? 'is-visible' : ''} ${className}`}
      style={{ transitionDelay: `${delay}ms` }}
      {...rest}
    >
      {children}
    </Tag>
  )
}
