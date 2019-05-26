import {
  http
} from './http.js'
import {
  dialog
} from 'dialog.js'
export const login = {
  // 检查用户是否登录
  isLogin() {
    return wx.getStorageSync('userInfo')
  },
  getInfo() {
    wx.login({
      success: res => {
        http.post('userLogin', {
            code: res.code
          })
          .then(res => {
            console.log('resLogin', res)
            if (res.code == 200) {
             wx.setStorageSync('userInfo', res.data) //返回成功提示信息
             console.log('oo',res)
             return res.data;
          } else {
            //返回错误提示信息
            errorMsg(1001)
          }
            
           
          })
        // 发送 res.code 到后台换取 openId, sessionKey, unionId
      }
    })
  }
}
function errorMsg(msg) {
  if (msg) {
    console.log('m',msg)
    dialog.tips(msg)
  } else {
    dialog.tips(1001)
  }

}
// module.exports = {
//   login
// }