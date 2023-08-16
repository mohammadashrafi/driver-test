import { useEffect, useState } from 'react'
import { useRouter } from 'next/router'
import { useAppDispatch, useAppSelector } from 'libs/redux/store'
import { deSelectCards } from 'libs/redux/slices/card'
import useCurrentPath from 'utils/hooks/useCurrentPath'
import Row from 'antd/lib/row'
import Col from 'antd/lib/col'
import Button from 'antd/lib/button'
import Icon from 'components/atoms/icon'
import SearchBar from 'components/molecules/search-bar'
import Navigation from 'components/molecules/navigation'
import cn from 'classnames'

import type { LayoutProps } from 'layouts/interface'
import styles from './layout.module.scss'

interface SimpleProps extends Partial<LayoutProps> {
  selected?: boolean
}

export function LayoutFooter({
  hasFooterAction,
  actionFooterTitle,
  selected = false,
}: SimpleProps) {
  if (hasFooterAction && selected) {
    return (
      <Row className={styles['layout__footer']}>
        <Button block type='default' onClick={() => console.log('clicked')}>
          {actionFooterTitle}
        </Button>
      </Row>
    )
  }
  return <Navigation />
}

function LayoutSelectedHeader() {
  const dispatch = useAppDispatch()
  const { selected: cardSelected } = useAppSelector((state) => state.card)

  function unSelect() {
    dispatch(deSelectCards())
  }

  return (
    <Row className={styles['layout__header']} gutter={8} align='middle'>
      <Col className={styles['layout__header--back']}>
        <button type='button' onClick={unSelect}>
          <Icon id='delete' className='stroke-neutral-black-60' />
        </button>
      </Col>
      <Col className={styles['layout__header--title']}>
        {cardSelected.length} مورد انتخاب شده
      </Col>
    </Row>
  )
}

export function LayoutHeader({
  historyBack,
  hasSearch,
  hasHeaderAction,
  title,
}: SimpleProps) {
  const { selected: cardSelected } = useAppSelector((state) => state.card)
  const { back, pathname } = useRouter()
  const [isSearching, setIsSearching] = useState<boolean>(false)
  const { header } = useCurrentPath()

  useEffect(() => {
    setIsSearching(false)
  }, [pathname])

  function toggleSearch() {
    setIsSearching((prev) => !prev)
  }

  if (cardSelected?.length) {
    return <LayoutSelectedHeader />
  }

  return !isSearching ? (
    <Row className={styles['layout__header']} gutter={8} align='middle'>
      {historyBack && (
        <Col className={styles['layout__header--back']}>
          <button type='button' onClick={back}>
            <Icon id='arrow-right-long' />
          </button>
        </Col>
      )}
      <Col className={styles['layout__header--title']}>{title}</Col>
      {hasHeaderAction && header}
      {hasSearch && (
        <button
          type='button'
          className={styles['layout__header--search']}
          onClick={toggleSearch}
        >
          <Icon id='search' />
        </button>
      )}
    </Row>
  ) : (
    <Row
      className={cn(
        styles['layout__header'],
        isSearching ? styles['layout__header--searching'] : ''
      )}
      gutter={6}
      align='middle'
    >
      <Col className={styles['layout__header--searchBar']} flex='auto'>
        <SearchBar onChange={(value) => console.log(value)} />
      </Col>
      <Col className={styles['layout__header--cancel']} flex='none'>
        <button type='button' onClick={toggleSearch}>
          لغو
        </button>
      </Col>
    </Row>
  )
}
