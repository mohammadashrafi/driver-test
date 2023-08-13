import type { CheckboxChangeEvent } from 'antd/lib/checkbox'
import type { ReactNode } from 'react'

export type CustomCardType = 'collect' | 'consignment' | 'distribution' | 'trip'

export interface CustomCardContent {
  label: string
  value: string | number
  wrapperCol?: number
  className?: string
}

export interface CustomCardProps {
  title: ReactNode
  type?: CustomCardType
  content: CustomCardContent[]
  selectable?: boolean
  onSelect?: (event: CheckboxChangeEvent) => void
  extra?: ReactNode
  description?: string
  checked?: boolean
}
