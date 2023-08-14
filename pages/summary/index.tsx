import Summary from 'components/templates/summary'
import SimpleLayout from 'layouts/simple'

import type { ReactElement } from 'react'

export default function SummaryPage() {
  return <Summary />
}

SummaryPage.getLayout = function getLayout(page: ReactElement) {
  return (
    <SimpleLayout
      contentBgColor='#f7f7f7'
      title='خلاصه وضعیت درخواست ها'
      actionTitle='تایید'
      hasAction
      hasSearch
      historyBack
    >
      {page}
    </SimpleLayout>
  )
}
