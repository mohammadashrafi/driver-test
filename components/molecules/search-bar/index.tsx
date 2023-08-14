import { useRef, type ChangeEvent } from 'react'
import Row from 'antd/lib/row'
import Col from 'antd/lib/col'
import Icon from 'components/atoms/icon'
import useDebounce from 'utils/hooks/useDebounce'

import type { SearchBarProps } from './interface'
import styles from './search-bar.module.scss'

export default function SearchBar({ onChange }: SearchBarProps) {
  const inputRef = useRef<HTMLInputElement | null>(null)
  const debouncedValue = useDebounce((e) => {
    const event = e as ChangeEvent<HTMLInputElement>
    onChange(event.target.value)
  })

  function clearInput() {
    if (inputRef.current) inputRef.current.value = ''
    onChange('')
  }

  return (
    <Row className={styles['search']} align='middle' gutter={8}>
      <Col className={styles['search--flex']}>
        <Icon id='search' />
      </Col>
      <Col flex='auto'>
        <input
          ref={inputRef}
          className={styles['search--input']}
          placeholder='جستجو'
          onChange={debouncedValue}
        />
      </Col>
      <Col
        className={styles['search--flex']}
        role='button'
        tabIndex={0}
        onClick={clearInput}
      >
        <Icon className='stroke-neutral-black-60' id='delete' />
      </Col>
    </Row>
  )
}
