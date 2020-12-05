const Routes = [
  {
    path: '/', component: '@/layout/index', routes: [
      {
        path: '/',
        redirect: '/course',
      },
      {
        path: '/course',
        routes: [
          { path: '/course', redirect: '/course/list' },
          { path: '/course/list', component: '@/pages/Course' },
          // { path: '/course/add', redirect: '/course/list' },
        ]
      },
      {
        exact: true,
        path: '/about',
        component: '@/pages/About',
      },
      { path: '*', component: '@/pages/NotFound' },
    ]
  },
]

export default Routes
