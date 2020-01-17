Page({

  /**
   * 页面的初始数据
   */
  data: {
    searchText: "搜索啦",
    nav: [{
        id: "1",
        name: "a"
      },
      {
        id: "2",
        name: "b"
      },
      {
        id: "3",
        name: "c"
      },
      {
        id: "4",
        name: "d"
      }
    ],
    // 轮播图数据
    slideshow: [],
    // 导航数据
    catesList:[],
    // 标题内容
    flootList:[],

    tabs: [
      {name:"体验问题"},
      {name:"商品/商家投诉"}
    ]
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function(options) {
    wx.request({
      url: 'https://api.zbztb.cn/api/public/v1/home/swiperdata',
      success: (res) => {
        console.log(res);
        this.setData({
          slideshow: res.data.message
        })
      },
    }),
    wx.request({
      url: 'https://api.zbztb.cn/api/public/v1/home/catitems',
      success: (res)=> {
        console.log(res)
        this.setData({
          catesList:res.data.message
        })
      },
    }),
    wx.request({
      url: 'https://api.zbztb.cn/api/public/v1/home/floordata',
      success: (res)=> {
        console.log(res);
        this.setData({
          flootList: res.data.message
        })
        console.log(this.data.flootList)
      },
     
    })
  },
  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function() {

  },

  /**
   * 生命周期函数--监听页面显示
   */
  onShow: function() {

  },

  /**
   * 生命周期函数--监听页面隐藏
   */
  onHide: function() {

  },

  /**
   * 生命周期函数--监听页面卸载
   */
  onUnload: function() {

  },

  /**
   * 页面相关事件处理函数--监听用户下拉动作
   */
  onPullDownRefresh: function() {

  },

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom: function() {

  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function() {

  }
})