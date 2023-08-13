import { useRouter } from 'next/router'
import { useAppSelector } from 'libs/redux/store'
import { renderFooter } from './helper'
import Row from 'antd/lib/row'
import Col from 'antd/lib/col'
import cn from 'classnames'

import type { CSSProperties } from 'react'
import type { SimpleLayoutProps } from 'layouts/interface'
import styles from './simple.module.scss'

export default function SimpleLayout({
  children,
  title,
  historyBack = true,
  hasAction = false,
  actionTitle = '',
  contentBgColor = undefined,
}: SimpleLayoutProps) {
  const { back } = useRouter()
  const { selected } = useAppSelector((state) => state.footer)

  const hasActionFooter = hasAction && selected

  const hasNavFooter = hasAction && !selected

  const bgColorOutput: CSSProperties = contentBgColor
    ? { backgroundColor: contentBgColor }
    : {}

  return (
    <div className={styles['simple']}>
      <Row className={styles['simple__header']} gutter={8} align='middle'>
        {historyBack && (
          <Col>
            <button onClick={back}>back</button>
          </Col>
        )}
        <Col className={styles['simple__header--title']}>{title}</Col>
      </Row>
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
      {renderFooter(hasAction, actionTitle, selected)}
    </div>
  )
}
