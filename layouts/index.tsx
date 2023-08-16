import { useAppSelector } from 'libs/redux/store'
import cn from 'classnames'

import { LayoutFooter, LayoutHeader } from './helper'
import type { CSSProperties } from 'react'
import type { LayoutProps } from 'layouts/interface'
import styles from './layout.module.scss'

export default function Layout({
  children,
  title,
  actionFooterTitle = '',
  hasFooterAction = false,
  hasHeaderAction = false,
  hasSearch = false,
  historyBack = false,
  contentBgColor = undefined,
}: LayoutProps) {
  const { selected } = useAppSelector((state) => state.footer)

  const hasActionFooter = hasFooterAction && selected

  const hasNavFooter = hasFooterAction && !selected

  const bgColorOutput: CSSProperties = contentBgColor
    ? { backgroundColor: contentBgColor }
    : {}

  return (
    <div className={styles['layout']}>
      <div className={styles['layout__header--wrapper']}>
        <LayoutHeader
          hasHeaderAction={hasHeaderAction}
          historyBack={historyBack}
          hasSearch={hasSearch}
          title={title}
        />
      </div>
      <div
        className={cn(
          styles['layout__content'],
          hasActionFooter ? styles['layout__content--hasActionFooter'] : '',
          hasNavFooter ? styles['layout__content--hasNavFooter'] : ''
        )}
        style={bgColorOutput}
      >
        {children}
      </div>
      <LayoutFooter
        hasFooterAction={hasFooterAction}
        actionFooterTitle={actionFooterTitle}
        selected={selected}
      />
    </div>
  )
}
