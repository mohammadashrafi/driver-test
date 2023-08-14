import Icon from 'components/atoms/icon'
import { WEB } from 'utils/statics/routes/web'

export const navItems = [
  {
    icon: <Icon id='dashboard' width={20} height={20} />,
    title: 'داشبورد',
    route: WEB.ROOT,
  },
  {
    icon: <Icon id='delivery-door' width={20} height={20} />,
    title: 'جمع آوری',
    route: WEB.SUMMARY,
  },
  {
    icon: <Icon id='delivery-truck' width={20} height={20} />,
    title: 'توزیع',
    route: WEB.SUMMARY,
  },
  {
    icon: <Icon id='package-box' width={20} height={20} />,
    title: 'مبادله',
    route: WEB.SUMMARY,
  },
  {
    icon: <Icon id='profile' width={20} height={20} />,
    title: 'پروفایل',
    route: WEB.ROOT,
  },
]
