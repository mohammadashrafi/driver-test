import Icon from 'components/atoms/icon'
import Drawer from 'antd/lib/drawer'

import type { CustomDrawerProps } from './interface'

export default function CustomDrawer({ open, setOpen }: CustomDrawerProps) {
  const onClose = () => setOpen(false)

  return (
    <Drawer
      rootClassName='color-neutral-black-20'
      onClose={onClose}
      open={open}
      width={360}
      closeIcon={<Icon className='stroke-primary' id='delete' />}
    >
      <p>Some contents...</p>
      <p>Some contents...</p>
      <p>Some contents...</p>
    </Drawer>
  )
}
