<template>
  <div class="film">
    <!-- <div class="moviesContainer" v-for="(item,index) in filmList" :key="index">
      <img class="movies_img" :src="item.cover" alt="">
      <div class="movies_info">
        <p class="movies_name">{{item.title}}</p>
        <p class="movies_year">年份: 2017-9-16</p>
        <p class="movies_dir">导演: 陈凯歌</p>
      </div>
      <p class="movies_rating">{{item._prate}}</p>
    </div> -->
  </div>
</template>

<script>
  export default {
    data(){
      return {
        //filmList:[]
      }
    },
    beforeMount() {
      this.$fly.get('https://api.apiopen.top/videoCategory')
      .then(res => {
        console.log(res)
        //this.filmList = res.data.subjects     
      })
      .catch(error => {
        console.log(error)
      })
    },
    methods: {
      // goToDetail(index){
      //   wx.navigateTo({
      //     url: '/pages/filmDetail/main?index=' + index
      //   })
      // }
    },
  }
</script>

<style lang="scss">
 .moviesContainer {
   display: flex;
   padding:25rpx;
   border-bottom: 1rpx solid #eee;
 }

  .movies_img {
    width: 128rpx;
    height: 128rpx;
    margin-right: 20rpx;
  }
  .movies_info {
    width: 70%;
  }
  
  .movies_name {
    font-size: 32rpx;
    color: #333;
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
  }
  .movies_year {
   font-size: 28rpx;
   color: #999;
    margin: 5rpx 0;
  }
  .movies_dir{
   font-size: 30rpx;
   color: #666;
  }

 .movies_rating{
   font-size: 36rpx;
   font-weight: bold;
   color: red;
 }
</style>