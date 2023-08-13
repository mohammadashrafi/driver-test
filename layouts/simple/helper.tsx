import { useState } from 'react'
import { useRouter } from 'next/router'
import Row from 'antd/lib/row'
import Col from 'antd/lib/col'
import Button from 'antd/lib/button'
import Icon from 'components/atoms/icon'
import SearchBar from 'components/molecules/search-bar'
import Navigation from 'components/molecules/navigation'
import cn from 'classnames'

import type { SimpleLayoutProps } from 'layouts/interface'
import styles from './simple.module.scss'

interface SimpleFooterProps extends Partial<SimpleLayoutProps> {
  selected: boolean
}

export function SimpleFooter({
  hasAction,
  actionTitle,
  selected,
}: SimpleFooterProps) {
  if (hasAction && selected) {
    return (
      <Row className={styles['simple__footer']}>
        <Button block type='default' onClick={() => console.log('clicked')}>
          {actionTitle}
        </Button>
      </Row>
    )
  }
  return <Navigation />
}

export function SimpleHeader({
  historyBack,
  hasSearch,
  title,
}: Partial<SimpleLayoutProps>) {
  const { back } = useRouter()
  const [isSearching, setIsSearching] = useState<boolean>(false)

  function toggleSearch() {
    setIsSearching((prev) => !prev)
  }

  return !isSearching ? (
    <Row className={styles['simple__header']} gutter={8} align='middle'>
      {historyBack && (
        <Col className={styles['simple__header--back']}>
          <button onClick={back}>
            <Icon id='arrow-right-long' />
          </button>
        </Col>
      )}
      <Col className={styles['simple__header--title']}>{title}</Col>
      {hasSearch && (
        <button
          className={styles['simple__header--search']}
          onClick={toggleSearch}
        >
          <Icon id='search' />
        </button>
      )}
    </Row>
  ) : (
    <Row
      className={cn(
        styles['simple__header'],
        isSearching ? styles['simple__header--searching'] : ''
      )}
      gutter={6}
      align='middle'
    >
      <Col className={styles['simple__header--searchBar']} flex='auto'>
        <SearchBar onChange={(value) => console.log(value)} />
      </Col>
      <Col className={styles['simple__header--cancel']} flex='none'>
        <button onClick={toggleSearch}>لغو</button>
      </Col>
    </Row>
  )
}
