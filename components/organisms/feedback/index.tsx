import { type ChangeEvent, Children, useState } from 'react'
import Row from 'antd/lib/row'
import Col from 'antd/lib/col'
import Radio from 'antd/lib/radio'
import Input from 'antd/lib/input'

import type { RadioChangeEvent } from 'antd'
import type { FeedbackProps } from './interface'
import styles from './feedback.module.scss'

const { Group } = Radio
const { TextArea } = Input

export default function Feedback({
  title = 'لطفا دلیل عدم توزیع را توضیح دهید',
  options,
  other = true,
  getValue = undefined,
  getOtherValue = undefined,
}: FeedbackProps) {
  const [value, setValue] = useState<string | number>()
  const [otherValue, setOtherValue] = useState<string>()

  function onChange(event: RadioChangeEvent) {
    setValue(event.target.value)
    getValue?.(event.target.value)
  }

  function textareaOnChange(e: ChangeEvent<HTMLTextAreaElement>) {
    setOtherValue(e.target.value)
    getOtherValue?.(e.target.value)
  }

  return (
    <Row className={styles['feedback']}>
      <Col className={styles['feedback--title']} span={24}>
        {title}
      </Col>
      <Col span={24}>
        <Group onChange={onChange} value={value}>
          <Row gutter={[0, 16]}>
            {Children.toArray(
              options.map(({ label, value }) => (
                <Col span={24}>
                  <Radio className={styles['feedback--option']} value={value}>
                    {label}
                  </Radio>
                </Col>
              ))
            )}
            {other && (
              <Col span={24}>
                <Radio className={styles['feedback--option']} value='other'>
                  سایر موارد
                </Radio>
              </Col>
            )}
            {value === 'other' && (
              <Col span={24}>
                <TextArea
                  value={otherValue}
                  onChange={textareaOnChange}
                  placeholder='متن'
                  autoSize={{ minRows: 5, maxRows: 5 }}
                />
              </Col>
            )}
          </Row>
        </Group>
      </Col>
    </Row>
  )
}
