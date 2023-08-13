import Row from 'antd/lib/row'
import Button from 'antd/lib/button'
import Navigation from 'components/molecules/navigation'

import styles from './simple.module.scss'

export const renderFooter = (
  hasAction: boolean,
  actionTitle: string,
  selected: boolean
) => {
  if (hasAction && selected) {
    return (
      <Row className={styles['simple__footer']}>
        <Button block type='default' onClick={() => console.log('clicked')}>
          {actionTitle}
        </Button>
      </Row>
    )
  }
  return <Navigation />
}
