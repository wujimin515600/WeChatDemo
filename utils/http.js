
import {
  domain,
  httpList
} from 'api.js'
import {
  login
} from 'login.js'
import {
  dialog
} from 'dialog.js'
//添加事件结束
Promise.prototype.finally = function (callback) {
  var Promise = this.constructor;
  return this.then(
    function (value) {
      Promise.resolve(callback()).then(
        function () {
          return value;
        }
      );
    },
    function (reason) {
      Promise.resolve(callback()).then(
        function () {
          throw reason;
        }
      );
    }
  );
}

export const http = {
  defaultOptions: {
    showLoading: true,
    // needLogin: false,
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
    console.log(url,'=====',ops)
    let data = getData(ops, this.defaultOptions)
    data['url'] = url
    data['method'] = 'GET'
    // console.log('main', this.main(data))
    // if(!this.main(data)) return;
    return this.main(data);
  },
  post(url, ops = {}) {
    let data = getData(ops, this.defaultOptions)
    data['url'] = url
    data['method'] = 'POST'
    // if (!this.main(data)) return;
    return this.main(data);
  },
  main(ops) {
    // ops = Object.assign({}, this.defaultOptions, ops);
    // if (ops.needLogin) {
    //   if (login.isLogin()){

    //     ops.data.openid = login.isLogin().openid
    //   }else{
        
    //     let o = login.getInfo()
    //     console.log('o',o)
    //   }
    //   return;
    // }
    if (ops.showLoading) {
      dialog.loading()
    }
    return new Promise((resolve, reject) => {
      wx.request({
        url: joinDomain(ops.url),
        data: ops.data,
        method: ops.method,
        header: {
          'content-type': 'application/json',
          //  可以在这加sessionid
        },
        success: function(res) {
          if (res.statusCode == 200 && res.data.code == 200) {
            resolve(res.data.result); //返回成功提示信息
          } else {
            reject('接口错误'); //返回错误提示信息
            errorMsg(res.statusCode)
          }
        },
        fail: function(res) {
          reject("网络连接错误"); //返回错误提示信息
          errorMsg(400)
        },
        complete: function(res) {
          if (ops.showLoading) {
            dialog.hideLoading()
          }
        }
      })
    });
  }
}
// 拼接url
function joinDomain(url) {
  return domain + httpList[url];
}
// 获取data
function getData(ops, defaultOptions){
  let obj = {}
  for (let i in defaultOptions){
    if (ops.hasOwnProperty(i)) {
      obj[i] = ops[i]
      delete ops[i]
    }
    obj['data'] = ops
  }
  return obj;
}
function errorMsg(msg) {
  if (msg) {
    console.log('msg',msg)
    dialog.tips(msg)
  } else {
    dialog.tips(1001)
  }

}
module.exports = { http} 