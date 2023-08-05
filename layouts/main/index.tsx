import type { MainLayoutProps } from 'layouts/interface'
import styles from './main.module.scss'

export default function MainLayout({ children }: MainLayoutProps) {
  return <div className={styles['main']}>{children}</div>
}
