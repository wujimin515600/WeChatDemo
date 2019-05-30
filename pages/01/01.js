const app = getApp()
Page({

  /**
   * 页面的初始数据
   */
  data: {

  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    this.main()
  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function () {
    this.dialog = this.selectComponent("#dialog");
    this.scroll = this.selectComponent("#scroll");
  },

  /**
   * 生命周期函数--监听页面显示
   */
  onShow: function () {

  },
  showDialog(){
    this.dialog.showDialog()
  },
  //取消事件
  _cancelEvent() {
    console.log('你点击了取消');
    this.dialog.hideDialog();
  },
  //确认事件
  _confirmEvent() {
    console.log('你点击了确定');
    this.dialog.hideDialog();
  },
  _lower(){
    console.log('到底了')
  },
  /**
   * 生命周期函数--监听页面隐藏
   */
  onHide: function () {

  },

  /**
   * 生命周期函数--监听页面卸载
   */
  onUnload: function () {

  },

  /**
   * 页面相关事件处理函数--监听用户下拉动作
   */
  onPullDownRefresh: function () {

  },

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom: function () {

  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function () {

  },
  main() {
    app.http.get('getUser', { needLogin: true, data: { q: 1 } })
      .then(res => {
        console.log(res)
        this.setData({
          list:res
        })
      })
      .catch(err => {
        console.log('err', err)
      })
      .finally(() => {
        console.log('finally')
      })
  }
})