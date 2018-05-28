//index.js
//获取应用实例
const app = getApp()

Page({
  data: {
    motto: 'Hello World',
    msg:"初始化显示信息",
    userInfo: {},
    hasUserInfo: false,
    canIUse: wx.canIUse('button.open-type.getUserInfo')
  },
  //事件处理函数
  bindViewTap: function() {
    wx.navigateTo({
      url: '../logs/logs'
    })
  },
  onLoad: function () {
    this.setData({ msg: "onLoad" });
    if (app.globalData.userInfo) {
      this.setData({
        userInfo: app.globalData.userInfo,
        hasUserInfo: true
      })
    } else if (this.data.canIUse){
      // 由于 getUserInfo 是网络请求，可能会在 Page.onLoad 之后才返回
      // 所以此处加入 callback 以防止这种情况
      app.userInfoReadyCallback = res => {
        this.setData({
          userInfo: res.userInfo,
          hasUserInfo: true
        })
      }
    } else {
      // 在没有 open-type=getUserInfo 版本的兼容处理
      wx.getUserInfo({
        success: res => {
          app.globalData.userInfo = res.userInfo
          this.setData({
            userInfo: res.userInfo,
            hasUserInfo: true
          })
        }
      })
    }
  },
  onReady:function(){
    console.log("onReady");
  },
  onPullDownRefresh:function(){
    console.log("onPullDownRefresh");
  },
  getUserInfo: function(e) {
    console.log(e)
    app.globalData.userInfo = e.detail.userInfo
    this.setData({
      userInfo: e.detail.userInfo,
      hasUserInfo: true
    })
  },
  clickMe:function(e){
    this.setData({ msg: "hhhhh" },function(){
      console.log("ddddfd");
    });
    wx.navigateTo({
      url: '../zujian/view/test?username=sane'
    });
   
    // wx.switchTab({
    //   url: 'test'
    // })
   
  },
  onShareAppMessage: function () {
    return {
      title: '自定义转发标题',
      path: '/page/user?username=sane'
    }
  },
  showDemo:function(e){
    wx.navigateTo({
      url: '../zujian/zujian'
    });
  }
})
