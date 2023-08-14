import { useEffect } from 'react'
import { Provider } from 'react-redux'
import { store } from 'libs/redux/store'
import themeConfig from 'utils/configs/theme.config'
import handleSprite from 'utils/helpers/sprite'
import ConfigProvider from 'antd/lib/config-provider'

import type { AppPropsWithLayout } from 'utils/interfaces'
import 'styles/globals.scss'

export default function App({ Component, pageProps }: AppPropsWithLayout) {
  const getLayout = Component.getLayout ?? ((page) => page)

  useEffect(() => {
    handleSprite()
  }, [])

  return (
    <Provider store={store}>
      <ConfigProvider
        theme={themeConfig}
        getPopupContainer={(trigger) => trigger?.parentElement as HTMLElement}
      >
        {getLayout(<Component {...pageProps} />)}
      </ConfigProvider>
    </Provider>
  )
}
