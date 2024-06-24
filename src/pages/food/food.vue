<template>
  <div class="movie">
    <div class="movieItem" v-for="(food, index) in foodList" :key="index" @tap="goToDetail(index)">
      <div class="movieItemInner">
        <div class="movie_img" >
          <img :src="food.images[0]" alt="">
        </div>
        <div class="movie_info">
          <p class="movie_info-name">{{food.name}}</p>
          <p class="movie_info-year">{{food.businessHours}}</p>
          <p class="movie_info-ndir">{{food.address}}</p>
        </div>
        <div class="movie_rating">{{food.score}}分</div>
      </div>
    </div>
    <!-- <div class="movieItem">
      <div class="movieItemInner">
        <div class="movie_img" >
          <img src="/static/images/index/cart.jpg" alt="">
        </div>
        <div class="movie_info">
          <p class="movie_info-name">名称</p>
          <p class="movie_info-year">时间</p>
          <p class="movie_info-ndir">地址</p>
        </div>
        <div class="movie_rating">9.6分</div>
      </div>
    </div> -->
  </div>
</template>

<script>
  export default {
    data() {
      return {
        foodList:[]
      }
    },
    beforeMount() {
      this.$fly.get('https://locally.uieee.com/categories/1/shops')
        .then(res => {
          //console.log(res);
          const foodList = res.data
          this.foodList = foodList
          console.log(this.foodList)
        })
        .catch(error => {
          console.log(error);
        });
    },
    methods: {
      goToDetail(index){
        wx.navigateTo({
          url: '/pages/foodDetail/main?index=' + index
        })
      }
    }
  }
</script>

<style lang="scss">
  .movieItem{
    padding:26rpx;
    border-bottom:1px solid #ddd;
    &:last-child{
      border-bottom:0;
    }
  }
  .movieItemInner{
    display:table;
    table-layout:fixed;
    width:100%;
    position:relative;
  }
  .movie_img,.movie_rating{
    display: table-cell;
    vertical-align:middle;
    position: relative;
  }
  .movie_img{
    width:160rpx;
    height:135rpx;
    overflow:hidden;
    img{
      display:block;
      width:100%;
      height:100%;
    }
  }
  .movie_info{
    padding-left:15rpx;
    &-name{
      color:#333;
      font-size:32rpx;
      font-weight:bold;
      height:60rpx;
      line-height:60rpx;
      text-overflow: ellipsis;
      overflow: hidden;
      white-space: nowrap;
    }
    &-year{
      color:#999;
      font-size:30rpx;
    }
    &-ndir{
      margin-top:10rpx;
      font-size:30rpx;
      color:#666;
    }
  }
  .movie_rating{
    position: absolute;
    color:#f00;
    top:15rpx;
    right:15rpx;
    font-size:32rpx;
    font-weight:bold;
  }
</style>