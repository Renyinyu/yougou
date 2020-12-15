// pages/category/category.js
const request = require('../../utils/request')
Page({

  /**
   * 页面的初始数据
   */
  data: {
    asideData: [],
    activeAsideItem: null
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    const goodsCategory = wx.getStorageSync('goodsCategory')
    console.log('ddd,', goodsCategory)
    const expireSeconds = 1000 * 10
    const nowDate = Date.now()
    if (goodsCategory && nowDate - goodsCategory.time < expireSeconds) {
      this.setData({
        asideData: goodsCategory.data,
        activeAsideItem: goodsCategory.data[0]
      })
    } else {
      this.fetchGoodsCategory()
    }
  },

  /**
   * 获取商品分类
   */
  fetchGoodsCategory () {
    request({
      url: 'https://api-hmugo-web.itheima.net/api/public/v1/categories'
    }).then(data => {
      wx.setStorage({
        data: {time: Date.now(), data: data.message},
        key: 'goodsCategory',
      })
      this.setData({
        asideData: data.message,
        activeAsideItem: data.message[0]
      })
    })
  },

  /**
   * 点击左侧分类
   */
  handleAsideItemClick (e) {
    this.setData({
      activeAsideItem: e.currentTarget.dataset.item
    })
  }
})