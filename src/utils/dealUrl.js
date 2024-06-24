module.exports = {
   size: function (input) {
      //数据是通过网络爬虫获取的数据，链接有特殊情况
      //http://p0.meituan.net/w.h/shaitu/4ffbaec3f82fe3b4240aedb22fee22e5267105.jpg

      return input.replace('w.h', '100.100')
   }
}