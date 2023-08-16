import type { ReactNode } from 'react'

export interface LayoutProps {
  children: ReactNode
  title: string
  historyBack?: boolean
  hasFooterAction?: boolean
  hasHeaderAction?: boolean
  hasSearch?: boolean
  actionFooterTitle?: string
  contentBgColor?: string
}
