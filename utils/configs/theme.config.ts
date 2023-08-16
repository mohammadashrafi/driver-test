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
    Checkbox: {
      colorBorder: '#898A8F',
      controlInteractiveSize: 20,
      lineWidth: 2,
    },
    Drawer: {
      colorBgElevated: '#242e36',
      colorText: '#CCCCCC',
      colorSplit: '#fff',
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
      radioSize: 20,
      dotSize: 13,
      fontSize: 14,
      lineWidth: 2,
      colorText: '#272729',
      colorBorder: '#898A8F',
      wireframe: true,
    },
    Select: {
      controlHeight: 36,
      colorBorder: '#CCCCCC',
      colorText: '#272729',
    },
    Progress: {
      colorInfo: 'rgba(0, 0, 0, 0.88)',
    },
    Segmented: {
      fontSize: 12,
      colorBgLayout: '#f2f2f2',
      boxShadowTertiary: '0px 2px 4px 0px rgba(0, 0, 0, 0.12)',
      colorTextLabel: '#272729',
    },
  },
}

export default themeConfig
