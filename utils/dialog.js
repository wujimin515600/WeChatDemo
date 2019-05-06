const dialog = (msg='测试') => {
	wx.showToast({
    title: msg,
    icon:'none'
  })
}
module.exports = {
    dialog,
}