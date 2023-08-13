import { Children } from 'react'
import Row from 'antd/lib/row'
import Col from 'antd/lib/col'
import Button from 'antd/lib/button'
import Divider from 'antd/lib/divider'
import Checkbox from 'antd/lib/checkbox'
import Card from 'antd/lib/card'
import cn from 'classnames'

import { cardTypeObject } from './helper'
import type { CustomCardProps } from './interface'
import styles from './custom-card.module.scss'

export default function CustomCard({
  title,
  content,
  checked = false,
  type = 'collect',
  selectable = false,
  extra = undefined,
  description = '',
  onSelect = undefined,
}: CustomCardProps) {
  return (
    <Card className={styles['card']}>
      <Row className={styles['card__header']} align='middle'>
        <Col flex='auto' className={styles['card__header--title']}>
          {selectable && <Checkbox checked={checked} onChange={onSelect} />}
          شماره {cardTypeObject[type]}: {title}
        </Col>
        <Col flex='0 1 1.5rem' className={styles['card__header--icon']}>
          {extra}
        </Col>
      </Row>
      <Divider className={styles['card--divider']} />
      <Row gutter={[0, 12]}>
        {Children.toArray(
          content.map(({ label, value, wrapperCol = 12, className }) => {
            return (
              <Col
                className={cn(styles['card__content'], className ?? '')}
                span={wrapperCol}
              >
                <Col span={24} className={styles['card__content--label']}>
                  {label}:
                </Col>
                <Col span={24} className={styles['card__content--value']}>
                  {value}
                </Col>
              </Col>
            )
          })
        )}
      </Row>
      <Divider className={styles['card--divider']} dashed />
      {description && (
        <Row className={styles['card__description']} gutter={[0, 6]}>
          <Col span={24} className={styles['card__description--label']}>
            توضیحات:
          </Col>
          <Col span={24} className={styles['card__description--value']}>
            {description}
          </Col>
        </Row>
      )}
      <Row className={styles['card__footer']} justify='end' gutter={8}>
        <Col>
          <Button className={styles['card__footer--action']}>مسیریابی</Button>
        </Col>
        <Col>
          <Button className={styles['card__footer--action']}>تماس</Button>
        </Col>
      </Row>
    </Card>
  )
}
