// components/common-components/dialog/dialog.js
Component({
  /**
   * 组件的属性列表
   */
  properties: {
    title:{
      type: String,
      value:'标题'
    },
    content:{
      type: String,
      value:'这是弹框内容'
    },
    cancelText:{
      type: String,
      value:'取消'
    },
    confirmText: {
      type: String,
      value: '确定'
    }
  },

  /**
   * 组件的初始数据
   */
  data: {
    isShow: false
  },

  /**
   * 组件的方法列表
   */
  methods: {
    hideDialog(){
      this.setData({
        isShow: false
      })
    },
    showDialog() {
      this.setData({
        isShow: true
      })
    },
    _cancelEvent(){
      this.triggerEvent("cancelEvent")
    },
    _confirmEvent() {
      this.triggerEvent("confirmEvent")
    }
  }
})
