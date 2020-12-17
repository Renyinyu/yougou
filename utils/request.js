let ajaxCount = 0;
const request = (options) => {
  ajaxCount++
  const baseUrl = 'https://api-hmugo-web.itheima.net/api/public/v1'
  return new Promise((resolve, reject) => {
    wx.showLoading({
      title: '加载中...',
    })
    wx.request({
      ...options,
      url: `${baseUrl}${options.url}`,
      success(res) {
        resolve(res.data)
      },
      fail(error) {
        reject(error)
      },
      complete() {
        ajaxCount--
        if (ajaxCount === 0) {
          wx.hideLoading()
        }
      }
    })
  })
}

module.exports = request