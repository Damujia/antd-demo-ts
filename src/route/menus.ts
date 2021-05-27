export const menus = [
  {
    id: '1',
    authName: '首页',
    path: '/main',
  },
  {
    id: '2',
    authName: 'Demo',
    path: '/demo',
    children: [
      {
        id: '3',
        authName: '示例1',
        path: '/lineInfo',
      },
      {
        id: '4',
        authName: '示例2',
        path: '/siteInfo',
      },
      {
        id: '5',
        authName: '示例3',
        path: '/demo3',
      }
    ],
  }
]