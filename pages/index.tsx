// import { useEffect } from 'react'
import Button from 'antd/lib/button'
import Col from 'antd/lib/col'
import Row from 'antd/lib/row'
import SimpleLayout from 'layouts/simple'
import { activeFooter } from 'libs/redux/slices/footer'
import { useAppDispatch, useAppSelector } from 'libs/redux/store'
import { BottomSheet } from 'react-spring-bottom-sheet'
// To Do: move react-spring-bottom-sheet imports to another file and create custom component
import 'react-spring-bottom-sheet/dist/style.css'

import type { ReactElement } from 'react'

export default function HomePage() {
  const { selected } = useAppSelector((state) => state.footer)
  const dispatch = useAppDispatch()

  const onClick = () => dispatch(activeFooter(!selected))

  // remove comment to handle update prompt of pwa
  // useEffect(() => {
  //   if (
  //     typeof window !== 'undefined' &&
  //     'serviceWorker' in navigator &&
  //     window.workbox !== undefined
  //   ) {
  //     const wb = window.workbox

  //     const promptNewVersionAvailable = (event) => {
  //       if (
  //         confirm(
  //           'A newer version of this web app is available, reload to update?'
  //         )
  //       ) {
  //         wb.addEventListener('controlling', (event) => {
  //           window.location.reload()
  //         })

  //         wb.messageSkipWaiting()
  //       }
  //     }

  //     wb.addEventListener('waiting', promptNewVersionAvailable)
  //   }
  // }, [])

  return (
    <Row align='middle' gutter={[0, 32]}>
      <Col span={24}>
        <Button type='primary' block>
          Test
        </Button>
      </Col>
      <Col span={24}>
        <Button type='primary' block>
          Test
        </Button>
      </Col>
      <Col span={24}>
        <Button type='primary' block>
          Test
        </Button>
      </Col>
      <Col span={24}>
        <Button type='primary' block>
          Test
        </Button>
      </Col>
      <Col span={24}>
        <Button type='primary' block>
          Test
        </Button>
      </Col>
      <Col span={24}>
        <Button type='primary' block>
          Test
        </Button>
      </Col>
      <Col span={24}>
        <Button type='primary' block>
          Test
        </Button>
      </Col>
      <Col span={24}>
        <Button type='primary' block>
          Test
        </Button>
      </Col>
      <Col span={24}>
        <Button type='primary' block>
          Test
        </Button>
      </Col>
      <Col span={24}>
        <Button type='primary' block>
          Test
        </Button>
      </Col>
      <Col span={24}>
        <Button type='primary' block>
          Test
        </Button>
      </Col>
      <Col span={24}>
        <Button type='primary' block>
          Test
        </Button>
      </Col>
      <Col span={24}>
        <Button type='primary' block>
          Test
        </Button>
      </Col>
      <Col span={24}>
        <Button type='primary' block>
          Test
        </Button>
      </Col>
      <Col span={24}>
        <Button type='primary' block>
          Test
        </Button>
      </Col>
      <Col span={24}>
        <Button type='primary' block>
          Test
        </Button>
      </Col>
      <Col span={24}>
        <Button type='primary' block>
          Test
        </Button>
      </Col>
      <Col span={24}>
        <Button onClick={onClick} type='link' block>
          Test
        </Button>
      </Col>
      <BottomSheet
        open={selected}
        onDismiss={onClick}
        snapPoints={({ minHeight }) => 11 * minHeight}
      >
        <span>some text to see</span>
      </BottomSheet>
    </Row>
  )
}

HomePage.getLayout = function getLayout(page: ReactElement) {
  return (
    <SimpleLayout title='خلاصه وضعیت درخواست ها' actionTitle='تایید' hasAction>
      {page}
    </SimpleLayout>
  )
}
