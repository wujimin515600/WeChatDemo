// components/common-components/scroll/scroll.js

Component({
  /**
   * 组件的属性列表
   */
  properties: {
    list:{
      type: Array,
      value:[1,2,3,4,5,6,7]
    }
  },

  /**
   * 组件的初始数据
   */
  data: {
  },

  /**
   * 组件的方法列表
   */
  methods: {
    _lower(){
      // console.log('到底')
      this.triggerEvent("lower")
    }
  }
})
