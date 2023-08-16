import Icon from 'components/atoms/icon'
import { WEB } from 'utils/statics/routes/web'

const commonAttributes = { width: 20, height: 20 }

export const navItems = [
  {
    icon: <Icon id='dashboard' {...commonAttributes} />,
    title: 'داشبورد',
    route: WEB.ROOT,
  },
  {
    icon: <Icon id='delivery-door' {...commonAttributes} />,
    title: 'جمع آوری',
    route: WEB.SUMMARY,
  },
  {
    icon: <Icon id='delivery-truck' {...commonAttributes} />,
    title: 'توزیع',
    route: WEB.SUMMARY,
  },
  {
    icon: <Icon id='package-box' {...commonAttributes} />,
    title: 'مبادله',
    route: WEB.SUMMARY,
  },
  {
    icon: <Icon id='profile' {...commonAttributes} />,
    title: 'پروفایل',
    route: WEB.PROFILE,
  },
]
