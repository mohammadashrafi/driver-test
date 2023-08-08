import { Children } from 'react'
import Col from 'antd/lib/col'
import Row from 'antd/lib/row'
import Form from 'antd/lib/form'
import Input from 'antd/lib/input'
import Select from 'antd/lib/select'
import Button from 'antd/lib/button'
import Icon from 'components/atoms/icon'
import SummaryCard from 'components/organisms/summary-card'

import styles from './summary.module.scss'
import type { SummaryCardProps } from 'components/organisms/summary-card/interface'

type FieldType = {
  username?: string
  password?: string
}

export default function Summary() {
  const mockData: SummaryCardProps[] = [
    { title: 'توزیع', status: 'pending', progress: 20 },
    { title: 'جمع آوری', status: 'completed', progress: 100 },
    { title: 'مبادله', status: 'failed', progress: 30 },
  ]

  const onFinish = (values: FieldType) => {
    console.log('Success:', values)
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
        <Form
          onFinish={onFinish}
          labelCol={{ span: 24 }}
          wrapperCol={{ span: 24 }}
          autoComplete='off'
        >
          <Form.Item<FieldType>
            label='نام و نام خانوادگی'
            name='username'
            rules={[{ required: true, message: 'Please input your username!' }]}
          >
            <Select
              placeholder='موضوع'
              options={[
                { label: 'test', value: 'test' },
                { label: 'something else', value: 'something' },
              ]}
            />
          </Form.Item>
          <Form.Item<FieldType>
            label='رمز عبور'
            name='password'
            rules={[{ required: true, message: 'Please input your password!' }]}
          >
            <Input.Password />
          </Form.Item>
          <Form.Item<FieldType>
            label='رمز عبور'
            name='password'
            rules={[{ required: true, message: 'Please input your password!' }]}
          >
            <Input suffix={<Icon id='edit' />} />
          </Form.Item>
          <Form.Item>
            <Button type='primary' htmlType='submit' block>
              Submit
            </Button>
          </Form.Item>
        </Form>
      </Col>
    </Row>
  )
}
