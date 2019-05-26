//logs.js
// const util = require('../../utils/util.js')
import { formatTime } from '../../utils/util.js'
const app = getApp()
Page({
  data: {
    logs: []
  },
  onLoad: function (e) {
    console.log('e', app.router.extract(e))
    this.setData({
      logs: (wx.getStorageSync('logs') || []).map(log => {
        return formatTime(new Date(log))
      })
    })
  }
})
