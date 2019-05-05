const routers = require('router.js')

const push = ({
  name,
  data = {}
}) => {
  data = encodeURIComponent(JSON.stringify(data))
  let route = routers[name]
  if (route.type === 'tab') {
    wx.switchTab({
      url: `${route.path}`,
    })
    return;
  }
  if (route.type === 'redirect') {
    wx.redirectTo({
      url: `${route.path}?routerOps=${data}`,
    })
    return;
  }
  if (route.type === 'reLaunch') {
    wx.reLaunch({
      url: `${route.path}?routerOps=${data}`,
    })
    return;
  }
  wx.navigateTo({
    url: `${route.path}?routerOps=${data}`,
  })
}
const back = (num) => {
  wx.navigateBack({
    delta: num
  })
}
// 解密路由参数
function extract(options) {
  return JSON.parse(decodeURIComponent(options.routerOps));
}
module.exports = {
  push,
  back,
  extract
}