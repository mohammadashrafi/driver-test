import Profile from 'components/templates/profile'
import Layout from 'layouts'

import type { ReactElement } from 'react'

export default function ProfilePage() {
  return <Profile />
}

ProfilePage.getLayout = function getLayout(page: ReactElement) {
  return (
    <Layout title='حساب کاربری' hasHeaderAction historyBack>
      {page}
    </Layout>
  )
}
