// pages/ranks/ranks.js

const app = getApp();

Page({

  /**
   * 页面的初始数据
   */
  data: {
    headline: '排行榜',
    userInfo: {},
    hasUserInfo: false,
    canIUse: wx.canIUse('button.open-type.getUserInfo'),

    top3: [
    {
      divClass: 'second',
      day: '233',
      nikClass: 'secondNik',
      dayClass: 'secondDay'
    },
    {
      divClass: 'first',
      day: '365',
      nikClass: 'firstNik',
      dayClass: 'firstDay'
    },
    {
      divClass: 'third',
      day: '128',
      nikClass: 'thirdNik',
      dayClass: 'thirdDay'
    }
  ],

  top10: [
    {
      rank: '4',
      day: '102'
    },
    {
      rank: '5',
      day: '96'
    },
    {
      rank: '6',
      day: '90'
    },
    {
      rank: '7',
      day: '84'
    },
    {
      rank: '8',
      day: '78'
    }, {
      rank: '9',
      day: '72'
    },
    {
      rank: '10',
      day: '66'
    }
  ]
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    if (app.globalData.userInfo) {
      this.setData({
        userInfo: app.globalData.userInfo,
        hasUserInfo: true
      })
    } else if (this.data.canIUse) {
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

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function () {

  },

  /**
   * 生命周期函数--监听页面显示
   */
  onShow: function () {

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

  }
})