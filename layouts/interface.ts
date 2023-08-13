import type { ReactNode } from 'react'

export interface MainLayoutProps {
  children: ReactNode
}

export interface SimpleLayoutProps {
  children: ReactNode
  title: string
  historyBack?: boolean
  hasAction?: boolean
  hasSearch?: boolean
  actionTitle?: string
  contentBgColor?: string
}
