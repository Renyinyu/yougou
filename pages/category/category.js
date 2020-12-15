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
    this.fetchGoodsCategory()
  },

  /**
   * 获取商品分类
   */
  fetchGoodsCategory () {
    request({
      url: 'https://api-hmugo-web.itheima.net/api/public/v1/categories'
    }).then(data => {
      console.log('商品分类，', data)
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