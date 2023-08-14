import { Children, useCallback } from 'react'
import { useRouter } from 'next/router'
import Row from 'antd/lib/row'
import Col from 'antd/lib/col'
import cn from 'classnames'

import { navItems } from 'utils/statics/data/nav'
import styles from './navigation.module.scss'

export default function Navigation() {
  const { push, pathname } = useRouter()

  const isActive = useCallback(
    (route: string) => {
      if (route === '/') return pathname === route
      return pathname.includes(route)
    },
    [pathname]
  )

  const goTo = (route: string) => push(route)

  return (
    <Row className={styles['nav']}>
      {Children.toArray(
        navItems.map(({ icon, route, title }) => (
          <Col
            className={cn(
              styles['nav__item'],
              isActive(route) ? styles['nav__item--active'] : ''
            )}
            onClick={() => goTo(route)}
            flex='0 1 20%'
            role='button'
            tabIndex={0}
          >
            <Col className={styles['nav__item--icon']} span={24}>
              {icon}
            </Col>
            <Col className={styles['nav__item--title']} span={24}>
              {title}
            </Col>
          </Col>
        ))
      )}
    </Row>
  )
}
