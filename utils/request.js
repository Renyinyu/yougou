const request = (options) => {
  return new Promise((resolve, reject) => {
    wx.request({
      ...options,
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