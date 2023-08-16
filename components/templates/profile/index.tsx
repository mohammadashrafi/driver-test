import Row from 'antd/lib/row'
import Col from 'antd/lib/col'
import Form from 'antd/lib/form'
import Input from 'antd/lib/input'
import Button from 'antd/lib/button'
import Icon from 'components/atoms/icon'

import { CustomAvatar } from './helper'
import { validation } from 'utils/helpers/validations'
import type { ProfileField } from './interface'
import styles from './profile.module.scss'

export default function Profile() {
  function onSubmit(values: ProfileField) {
    console.log(values)
  }

  function editPhoneNumber() {
    console.log('edit')
  }

  return (
    <Row className={styles['profile']} gutter={[0, 16]}>
      <Col className={styles['profile__avatar']} span={24}>
        <CustomAvatar />
      </Col>
      <Col span={24}>
        <Row className={styles['profile__info']}>
          <Col span={8}>
            <Row gutter={[0, 4]}>
              <Col className={styles['profile__info--label']} span={24}>
                راننده
              </Col>
              <Col className={styles['profile__info--title']} span={24}>
                تهران
              </Col>
            </Row>
          </Col>
          <Col span={8}>
            <Row gutter={[0, 4]}>
              <Col className={styles['profile__info--label']} span={24}>
                کد راننده
              </Col>
              <Col className={styles['profile__info--title']} span={24}>
                TH0101
              </Col>
            </Row>
          </Col>
          <Col span={8}>
            <Row gutter={[0, 4]}>
              <Col className={styles['profile__info--label']} span={24}>
                کد هاب
              </Col>
              <Col className={styles['profile__info--title']} span={24}>
                TH01
              </Col>
            </Row>
          </Col>
        </Row>
      </Col>
      <Col span={24}>
        <Form
          id='profile'
          labelCol={{ span: 24 }}
          wrapperCol={{ span: 24 }}
          initialValues={{ fullName: 'طاها زمانپور' }}
          onFinish={onSubmit}
          autoComplete='off'
        >
          <Form.Item<ProfileField>
            label='نام و نام خانوادگی'
            name='fullName'
            rules={validation.FULL_NAME}
          >
            <Input />
          </Form.Item>
          <Form.Item<ProfileField>
            label='کد ملی'
            name='nationalCode'
            rules={validation.NATIONAL_CODE}
          >
            <Input />
          </Form.Item>{' '}
          <Form.Item<ProfileField>
            label='شماره پرسنلی'
            name='personnelCode'
            rules={validation.PERSONNEL_CODE}
          >
            <Input />
          </Form.Item>{' '}
          <Form.Item<ProfileField>
            label='شماره همراه'
            name='phoneNumber'
            rules={validation.PHONE_NUMBER}
          >
            <Input
              suffix={
                <button
                  type='button'
                  className={styles['profile--edit-phone']}
                  onClick={editPhoneNumber}
                >
                  <Icon
                    className='fill-neutral-black-32'
                    id='edit'
                    width={20}
                    height={20}
                  />
                </button>
              }
            />
          </Form.Item>
        </Form>
      </Col>
      <Col className={styles['profile--actions']} span={24}>
        <Col>
          <Button type='link'>ویرایش رمز عبور</Button>
        </Col>
        <Col>
          <Button data-selector='logout' type='link'>
            خروج از حساب کاربری
          </Button>
        </Col>
      </Col>
    </Row>
  )
}
