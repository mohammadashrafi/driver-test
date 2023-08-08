import type { ThemeConfig } from 'antd'

const themeConfig: ThemeConfig = {
  token: {
    colorPrimary: '#EA6601',
    fontSize: 14,
    borderRadius: 8,
  },
  components: {
    Button: {
      controlHeight: 32,
      controlHeightLG: 40,
    },
    Form: {
      controlHeight: 36,
    },
    Input: {
      controlHeight: 36,
      colorBorder: '#CCCCCC',
      colorText: '#272729',
    },
    Radio: {
      radioSize: 18,
      dotSize: 10,
    },
    Select: {
      controlHeight: 36,
      colorBorder: '#CCCCCC',
      colorText: '#272729',
    },
    Progress: {
      colorInfo: 'rgba(0, 0, 0, 0.88)',
    },
  },
}

export default themeConfig
