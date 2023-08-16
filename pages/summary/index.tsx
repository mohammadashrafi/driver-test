import Summary from 'components/templates/summary'
import Layout from 'layouts'

import type { ReactElement } from 'react'

export default function SummaryPage() {
  return <Summary />
}

SummaryPage.getLayout = function getLayout(page: ReactElement) {
  return (
    <Layout
      contentBgColor='#f7f7f7'
      title='خلاصه وضعیت درخواست ها'
      hasFooterAction
      hasSearch
      historyBack
    >
      {page}
    </Layout>
  )
}
