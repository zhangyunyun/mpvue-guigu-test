<template>
  <div class="detail">
    <div class="detail_header">
      <img class="header_img" :src="detailObj.detail_img" alt="" mode="aspectFill">
      <span class="header_play" :class="isPlay?'current':''" @tap="handlePlay"></span>
    </div>
    <div class="detail_date">
      <img :src="detailObj.avatar" alt=""> 
      <span>{{detailObj.author}}</span>
      <span>发布于</span>
      <span>{{detailObj.date}}</span>
    </div>
    <p class="detail_company">{{detailObj.title}}</p>
    <div class="detail_share">
      <div class="detail_collection">
        <div class="detail_line"></div>
        <img :src="isCollected?'/static/images/icon/collection.png':'/static/images/icon/collection-anti.png'" alt="" @tap="handleCollection">
        <img :src="isShare?'/static/images/icon/share.png':'/static/images/icon/share-anti.png'" alt="" @tap="handleShare">
      </div>
      <button class="detail_btn" open-type="share">转发此文章</button>
      <div class="detail_cont">
       <p>{{detailObj.detail_content}}</p>
      </div>
    </div>
  </div>
</template>

<script>
import { mapState }  from 'vuex'
import musicObj from '../../mock/data-music.js'
export default {
  components: {

  },
  data() {
    return {
      detailObj:'',
      isCollected:false,  //是否收藏
      isShare:false,    //分享
      isPlay:false
    }
  },
  beforeMount() {
    //let index = this.$mp.query.index
    this.index = this.$mp.query.index
  },
  mounted () {
    console.log(this)
    //更新state中的数据
    this.detailObj = this.listData[this.index]

    //预处理，本地是否收藏的缓存
    let oldStorage = wx.getStorageSync('isCollected')
    if(!oldStorage){
      //如果为空，
      wx.setStorage({
        key:'isCollected',
        data: {}  //设置为空对象防止报错
      })
    }else{
      //用户缓存过，有记录
      //动态修改初始化的状态值(当前页面的)oldStorage[this.index] ---→  true(收藏成功) / false(取消收藏) / undefined(页面刚进来没有点击过)
      this.isCollected = oldStorage[this.index] ? true : false
    }
    //判断当前页面加载的时候音乐是否在播放
    musicObj.pageIndex === this.index && musicObj.isplay ? this.isPlay = true : this.isPlay = false

    //监听音乐播放和暂停
    wx.onBackgroundAudioPlay(() => {
      console.log('音乐播放')
      this.isplay = true
      musicObj.pageIndex = this.index
      musicObj.isPlay = true
    })
    wx.onBackgroundAudioPause(() => {
      console.log('音乐暂停')
      this.isplay = false
      musicObj.isPlay = false
    })
  },
  computed:{
    //映射状态到本组件(页面跳转之前就已经请求到数据，不需要再去分发事件，直接映射)
    ...mapState(['listData'])
  },
  methods: {
    //点击收藏
    handleCollection(){
      //更新状态(收藏成功，取消收藏)
      let isCollected = !this.isCollected
      this.isCollected = isCollected
      let title = isCollected?'收藏成功':'取消收藏'
      wx.showToast({
        title: title,
        icon: 'success'
      })

      //读取之前本地缓存的状态，查看是否收藏
      /* 
        同步获取
        data里的数据创建是 赋值了空字符串，用的时候给这个data当做对象用了，将data里的数据类型改为对象就可以了
      */
      let oldStorage = wx.getStorageSync('isCollected')
      oldStorage = {}
      oldStorage[this.index] = isCollected //存成一个对象
      //将本次设置的成果缓存到本地 
      wx.setStorage({
        key: 'isCollected',
        data: oldStorage
      })
    },
    //点击分享
    handleShare(){
      wx.showActionSheet({
        itemList: ['分享到朋友圈','分享到微博','分享给微信好友']
      })
    },
    //点击播放音乐
    handlePlay(){
      let isPlay = !this.isPlay
      this.isPlay = isPlay
      let { dataUrl,title } = this.detailObj.music
      if(isPlay){
        //播放
        console.log(1)
        wx.playBackgroundAudio({
          dataUrl,  //音乐的链接
          title   //音乐的标题
        })
      }else{
        //暂停
        console.log(2)
        wx.pauseBackgroundAudio()
      }
    }
  },
}
</script>

<style lang="scss">
  .detail{
    position:relative;
    &_header{
      position:relative;
      width:100%;
      height:460rpx;
      img{
        display: block;
        width:100%;
        height:100%;
      }
      span{
        position:absolute;
        top:calc(50% - 50rpx);
        left:calc(50% - 50rpx);
        width:100rpx;
        height:100rpx;
        background:url("../../../static/images/music/music-start.png");
        background-size:100% 100%;
        &.current{
          background:url("../../../static/images/music/music-stop.png");
          background-size:100% 100%;
        }
      }
    }
    &_date{
      padding:10rpx 26rpx;
      img{
        width:64rpx;
        height:64rpx;
        vertical-align:middle;
      }
      span{
        font-weight:bold;
        margin-left:15rpx;
        font-size:25rpx;
        color:#666;
      }
    }
    &_company{
      padding:10rpx 26rpx;
      font-size:32rpx;
      font-weight:bold;
    }
    &_share{
      padding:10rpx 26rpx;
      .detail_collection{
        position: relative;
        display: flex;
        justify-content: flex-end;
      }
      img{
        position: relative;
        z-index: 2;
        width:60rpx;
        height:60rpx;
        margin-right:30rpx;
      }
    }
    &_line{
      position: absolute;
      z-index:1;
      left:0;
      top:calc(50% - .5rpx);
      width:100%;
      height:1rpx;
      background:#f5f5f5;
    }
    &_btn{
      margin-top:15rpx;
      width:240rpx;
      height:80rpx;
      line-height:75rpx;
      border:1rpx solid rgb(235, 234, 234);
      color:#333;
      font-size:35rpx;
      background:#f5f5f5;
    }
    &_cont{
      p{
        margin-top:.15rem;
        text-align:justify;
        font-size:30rpx;
        text-indent:32rpx;
        letter-spacing:3rpx;
        color:#333;
      }
    }
  }
</style>
