const request = (options) => {
  const baseUrl = 'https://api-hmugo-web.itheima.net/api/public/v1'
  return new Promise((resolve, reject) => {
    wx.request({
      ...options,
      url: `${baseUrl}${options.url}`,
      success(res) {
        resolve(res.data)
      },
      fail(error) {
        reject(error)
      }
    })
  })
}

module.exports = request