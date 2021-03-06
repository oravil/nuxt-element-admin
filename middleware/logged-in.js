export default function ({app, route, redirect}) {
  let isLogged = Boolean(app.$cookies.get('mc-login-success')) && Boolean(app.$cookies.get('mc-login-id'))

  //已登录访问登录页, 跳转到首页
  if (route.name === 'login' && isLogged) {
    return redirect({name: 'index'})
  }

  // 未登录访问非登录页 跳转到登录
  if (route.name !== 'login' && !isLogged) {
    return redirect({name: 'login'})
  }
}
