import { ProfileHeader } from 'layouts/headers/profile'

import type { ReactNode } from 'react'

export interface Route {
  pathname: string
  header?: ReactNode
  footer?: ReactNode
}

export const routes: Route[] = [
  { pathname: '/' },
  { pathname: '/summary' },
  { pathname: '/profile', header: <ProfileHeader /> },
]
