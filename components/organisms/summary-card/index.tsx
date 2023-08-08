import Row from 'antd/lib/row'
import Col from 'antd/lib/col'
import Progress from 'antd/lib/progress'

import styles from './summary-card.module.scss'
import type { SummaryCardProps } from './interface'

export default function SummaryCard({
  title,
  progress,
  status,
}: SummaryCardProps) {
  const isCompleted = status === 'completed'
  const isPending = status === 'pending'

  function renderStatusText() {
    if (isCompleted) return 'اطلاعات تکمیل شد'
    if (isPending) return 'در حال دریافت اطلاعات'
    return 'خطا'
  }

  function renderStrokeColor() {
    if (isCompleted) return '#07B83D'
    if (isPending) return '#242E36'
    return '#ff4d4f'
  }

  return (
    <Row className={styles['card']}>
      <Col className={styles['card__info']} flex='auto'>
        <Col className={styles['card__info--title']} span={24}>
          {title}
        </Col>
        <Col className={styles['card__info--status']} span={24}>
          {renderStatusText()}
        </Col>
      </Col>
      <Col flex='4rem'>
        <Progress
          type='circle'
          size='small'
          percent={progress}
          strokeWidth={14}
          format={(percent) => percent + '%'}
          strokeColor={renderStrokeColor()}
        />
      </Col>
    </Row>
  )
}
