// pages/cart/cart.js
var that;

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

  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function () {

  },

  onLoad() {
    that = this;
  },
  // 初始化编辑器
  onEditorReady() {
    wx.createSelectorQuery().select('.editor').context(function(res) {
      console.log(res)
      that.editorCtx = res.context

      // that.editorCtx.insertText() // 注意：插入的是对象
      // if (wx.getStorageSync("content")) { // 设置~历史值
      // }

    }).exec()
  },


  handleBlur (e) {
    console.log('e,', e)
    this.clear()
    wx.createSelectorQuery().select('.editor').context(function(res) {
      // that.editorCtx = res.context
      console.log(res.context)
      // if (wx.getStorageSync("content")) { // 设置~历史值
      //   that.editorCtx.insertText(wx.getStorageSync("content")) // 注意：插入的是对象
      // }

    }).exec()
  },

  clear() {
    this.editorCtx.clear({
      success: function(res) {
        console.log("清空成功")
      }
    })
  },
})