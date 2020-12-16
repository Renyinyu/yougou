const request = require('../../utils/request')

Page({

  /**
   * 页面的初始数据
   */
  data: {
    banners: [],
    navigators: [],
    categories: []
  },

  /**
   * 请求轮播图数据
   * @param {*} options 
   */
  fetchBannerData () {
    request({
      url: '/home/swiperdata'
    }).then(banner => {
      this.setData({ banners: banner.message })
    })
  },

  /**
   * 请求分类数据
   */
  fetchCategoryData () {
    request({
      url: '/home/floordata'
    }).then(data => {
      console.log(data.message, 'data')
      this.setData({
        categories: data.message
      })
    })
  },

  /**
   * 获取导航数据
   * @param {*} options 
   */
  fetchNavigatorData () {
    request({
      url: '/home/catitems'
    }).then(navigaor => {
      this.setData({ navigators: navigaor.message })
    })
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    this.fetchBannerData()
    this.fetchNavigatorData()
    this.fetchCategoryData()
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