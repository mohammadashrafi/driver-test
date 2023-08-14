import type { IconProps } from './interface'

export default function Icon({
  id,
  width = 24,
  height = 24,
  className = '',
}: IconProps) {
  return (
    <svg width={width} height={height} className={className}>
      <use xlinkHref={`#${id}`} />
    </svg>
  )
}
