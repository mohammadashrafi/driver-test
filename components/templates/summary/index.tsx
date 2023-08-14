import { Children } from 'react'
import { useAppDispatch, useAppSelector } from 'libs/redux/store'
import {
  deSelectCards,
  selectAllCards,
  selectCard,
} from 'libs/redux/slices/card'
import Row from 'antd/lib/row'
import Col from 'antd/lib/col'
import Button from 'antd/lib/button'
import Icon from 'components/atoms/icon'
import SelectAll from 'components/molecules/select-all'
import CustomCard from 'components/organisms/custom-card'
import SummaryCard from 'components/organisms/summary-card'

import styles from './summary.module.scss'
import type { SummaryCardProps } from 'components/organisms/summary-card/interface'

export default function Summary() {
  const dispatch = useAppDispatch()
  const { selected } = useAppSelector((state) => state.card)

  const mockData: SummaryCardProps[] = [
    { title: 'توزیع', status: 'pending', progress: 20 },
    { title: 'جمع آوری', status: 'completed', progress: 100 },
    { title: 'مبادله', status: 'failed', progress: 30 },
  ]

  const mockContent = [
    { label: 'تاریخ جمع آوری', value: '1401/02/02' },
    { label: 'زمان جمع آوری', value: '10:50' },
    { label: 'شیفت جمع آوری', value: 'صبح' },
    { label: 'تحویل دهنده', value: 'مهدیس انصاری' },
    { label: 'تعداد', value: 8, wrapperCol: 24 },
    {
      label: 'محل جمع آوری',
      value:
        'میدان انقلاب - خیابان 12 فروردین - خیابان شهدای ژاندارمری - پلاک36 - واحد 2',
      wrapperCol: 24,
    },
  ]

  function selectAll() {
    if (selected.length !== 4) {
      dispatch(selectAllCards(['0', '1', '2', '3']))
    } else dispatch(deSelectCards())
  }

  return (
    <Row align='middle' gutter={[0, 8]}>
      {Children.toArray(
        mockData.map((item) => (
          <Col span={24}>
            <SummaryCard {...item} />
          </Col>
        ))
      )}
      <Col span={24}>
        <Button
          className={styles['summary--btn']}
          size='large'
          type='primary'
          block
          ghost
        >
          بروزرسانی وضعیت
        </Button>
      </Col>
      <Col span={24}>
        <SelectAll
          indeterminate={!!(selected.length && selected.length !== 4)}
          checked={selected.length === 4}
          onChange={selectAll}
        />
      </Col>
      <Col span={24}>
        <Row gutter={[0, 16]}>
          {Children.toArray(
            [0, 1, 2, 3].map((item) => (
              <Col span={24}>
                <CustomCard
                  title={23}
                  extra={<Icon id='delete-circle' />}
                  content={mockContent}
                  description='لطفا به سرایدار تحویل داده شود'
                  onSelect={() => dispatch(selectCard(String(item)))}
                  checked={selected.includes(String(item))}
                  selectable
                />
              </Col>
            ))
          )}
        </Row>
      </Col>
    </Row>
  )
}
