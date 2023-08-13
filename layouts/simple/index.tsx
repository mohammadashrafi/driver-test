import { useAppSelector } from 'libs/redux/store'
import cn from 'classnames'

import { SimpleFooter, SimpleHeader } from './helper'
import type { CSSProperties } from 'react'
import type { SimpleLayoutProps } from 'layouts/interface'
import styles from './simple.module.scss'

export default function SimpleLayout({
  children,
  title,
  hasAction = false,
  hasSearch = false,
  historyBack = false,
  actionTitle = '',
  contentBgColor = undefined,
}: SimpleLayoutProps) {
  const { selected } = useAppSelector((state) => state.footer)

  const hasActionFooter = hasAction && selected

  const hasNavFooter = hasAction && !selected

  const bgColorOutput: CSSProperties = contentBgColor
    ? { backgroundColor: contentBgColor }
    : {}

  return (
    <div className={styles['simple']}>
      <div className={styles['simple__header--wrapper']}>
        <SimpleHeader
          historyBack={historyBack}
          hasSearch={hasSearch}
          title={title}
        />
      </div>
      <div
        className={cn(
          styles['simple__content'],
          hasActionFooter ? styles['simple__content--hasActionFooter'] : '',
          hasNavFooter ? styles['simple__content--hasNavFooter'] : ''
        )}
        style={bgColorOutput}
      >
        {children}
      </div>
      <SimpleFooter
        hasAction={hasAction}
        actionTitle={actionTitle}
        selected={selected}
      />
    </div>
  )
}
