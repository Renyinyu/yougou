const request = require('../../utils/request')

Page({

  /**
   * 页面的初始数据
   */
  data: {
    totalPage: 0,
    tabValue: 1,
    total: 0,
    requestParams: {
      page: 1,
      size: 15,
      cid: null,
    },
    tabs: [
      { id: 1, title: '综合', isActive: true },
      { id: 2, title: '销量', isActive: false },
      { id: 3, title: '价格', isActive: false },
    ],
    goodsList: []
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    console.log('options,', options)
    this.setData({
     requestParams: Object.assign(this.data.requestParams, {
      cid: options.cid
     })
    })
   
    this.fetchGoodsListData(options.cid)
  },

  /**
   * 页面触底监听
   */
  onReachBottom() {
    if (this.data.requestParams.page < this.data.totalPage) {
      this.setData({ requestParams: Object.assign({}, this.data.requestParams, {
        page: this.data.requestParams.page+1
      }) })
      this.fetchGoodsListData()
    }
  },

  /**
   * 下拉刷新
   */
  onPullDownRefresh() {
    
    const _that = this
    // wx.startPullDownRefresh()
    this.setData({
      goodsList: [],
      requestParams: Object.assign({}, this.data.requestParams, {
        page: 1
      })
    })
    this.fetchGoodsListData()
  },

  /**
   * 
   * @param {*} e 
   */
  fetchGoodsListData () {
    const { page, size, cid } = this.data.requestParams
    request({
      url: '/goods/search',
      data: { cid, pagenum: page, pagesize: size  }
    }).then(data => {
      console.log(data.message)
      let totalPage = Math.ceil(data.message.total / this.data.requestParams.size)
      this.setData({
        total: data.message.total,
        totalPage,
        goodsList: [...this.data.goodsList, ...data.message.goods]
      })
      wx.stopPullDownRefresh()

    }).catch(err => {

      wx.stopPullDownRefresh()
      this.setData({
        goodsList:  []
      })
    })
  },

  /**
   * 点击tab
   * @param {*} e 
   */
  handleTabClick (e) {
    this.setData({
      tabs: this.data.tabs.map(item => {
        item.isActive = e.detail.id === item.id
        return item
      }),
      tabValue: this.data.tabs.find(item => item.isActive).id,
    })
  }
})