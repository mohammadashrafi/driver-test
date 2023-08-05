import { useRouter } from 'next/router'
import Row from 'antd/lib/row'
import Col from 'antd/lib/col'
import cn from 'classnames'

import type { SimpleLayoutProps } from 'layouts/interface'
import styles from './simple.module.scss'
// import { renderFooter } from './helper'
import { useAppSelector } from 'libs/redux/store'

export default function SimpleLayout({
  children,
  title,
  historyBack = true,
  hasAction = false, //   actionTitle = '',
}: SimpleLayoutProps) {
  const { back } = useRouter()
  const { selected } = useAppSelector((state) => state.footer)

  const hasFooter = hasAction && selected

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
          hasFooter ? styles['simple__content--hasFooter'] : ''
        )}
      >
        {children}
      </div>
      {/* {renderFooter(hasAction, actionTitle, selected)} */}
    </div>
  )
}
