interface IconProps {
  id: string
  width?: number
  height?: number
  className?: string
}

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
