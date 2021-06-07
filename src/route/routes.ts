
import Main from '../views/Main'
import Lineinfo from '../views/sitemanage/line/lineInfo'
import Selectinput from '../views/sitemanage/site/siteInfo'
import Demo3 from '../views/sitemanage/demo/Demo3'

export const routes = [
  {path: '/main', component: Main},
  {path: '/lineInfo', component: Lineinfo},
  {path: '/siteInfo', component: Selectinput},
  {path: '/demo3', component: Demo3}
]