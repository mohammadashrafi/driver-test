import Button from 'antd/lib/button'

export function ProfileHeader() {
  return (
    <Button
      style={{ marginInlineStart: 'auto' }}
      form='profile'
      type='primary'
      htmlType='submit'
    >
      ذخیره تغییرات
    </Button>
  )
}
