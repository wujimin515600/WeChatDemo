import {
  Promise
} from 'promise.js'
import {
  domain,
  httpList
} from 'api.js'
import {
  dialog
} from 'dialog.js'
const http = {
  defaultOptions: {
    showLoading: true,
    needLogin: false,
  },
  /**
   * @param {String} url
   * 请求地址
   * @param {Object} ops
   * {
   *  needLogin: true,
   * data:{
   * test:'test'
   * }
   * } 
   * 
   */
  get(url, ops = {}) {
    ops.url = url
    ops.method = 'GET'
    main(ops)
  },
  post(url, ops = {}) {
    ops.url = url
    ops.method = 'POST'
    main(ops)
  },
  main(ops) {
    ops = Object.assign({}, defaultOptions, ops);
    return new Promise((resolve, reject) => {
      wx.request({
        url: ops.url,
        data: data,
        method: ops.method,
        header: {
          'content-type': 'application/json',
          //  可以在这加sessionid
        },
        success: function (res) {
          if (res.statusCode == 200) {
            resolve(res); //返回成功提示信息
          } else {
            reject(res.data.message); //返回错误提示信息
          }
        },
        fail: function (res) {
          reject("网络连接错误"); //返回错误提示信息
        },
        complete: function (res) {

        }
      })
    });
  }
}

const request = (url, method, data) => {
  return new Promise((resolve, reject) => {
    wx.request({
      url: url,
      data: data,
      method: method,
      header: {
        'content-type': 'application/json',
        'cld.stats.page_entry': Get('scene'),
        'token': Get('token'),
        'version': app.globalData.version
      },
      success: function(res) {
        if (res.statusCode == 200) {
          resolve(res); //返回成功提示信息
        } else {
          reject(res.data.message); //返回错误提示信息
        }
      },
      fail: function(res) {
        reject("网络连接错误"); //返回错误提示信息
      },
      complete: function(res) {

      }
    })
  });
}