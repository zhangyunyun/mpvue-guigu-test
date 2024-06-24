<template>
  <div class="listItem" @tap="goToDetail">
      <div class="listTime">
        <img :src="list.avatar" alt=""> 
        <p><span>{{list.date}}</span></p>       
      </div>
      <div class="listCont">
        <h2>{{list.title}}</h2>
        <img :src="list.detail_img" alt="">
        <p>{{list.detail_content}}</p>
      </div>
      <div class="listMark">
        <span><img :src=list.detail_love_image1 alt="">{{list.love_count}}</span>
        <span><img :src="list.detail_love_image2" alt="">{{list.attention_count}}</span>
      </div>
  </div>
</template>

<script>
export default {
  props:{
    list:{
      type:Object
    },
    index:{
      type:Number
    }
  },
  data() {
    return {
    }
  },
  methods: {
    goToDetail(){
      //console.log(this.index)
      wx.navigateTo({
        url:'/pages/listDetail/main?index=' + this.index
      })
    }
  }
}
</script>

<style lang="scss">
.listItem{
  padding:26rpx;
  border-bottom:1rpx solid #eee;
}
.listTime{
  height:60rpx;
  line-height:60rpx;
  position: relative;
  padding-left:70rpx;
  img{
    position:absolute;
    left:0;
    top:calc(50% - 30rpx);
    width:60rpx;
    height:60rpx;
    border-radius:150rpx;
  }
  p{
    font-size:35rpx;
    span{
      font-size:24rpx;
      color:#666;
      margin-left:15rpx;
    }
  }
}
.listCont{
  margin-top:10rpx;
  h2{
    height:60rpx;
    line-height:60rpx;
    color:#333;
    font-size:35rpx;
    font-weight:bold;
  }
  img{
    margin-top:5rpx;
    display: block;
    width:100%;
    height:400rpx;
  }
  p{
    margin-top:5rpx;
    font-size:35rpx;
    color:#333;
    line-height:1.6;
  }
}
.listMark{
  margin-top:10rpx;
  img{
    position: relative;
    top:3rpx;
    display:inline-block;
    width:30rpx;
    height:30rpx;
    margin-right:10rpx;
  }
  span{
    color:#666;
    font-size:28rpx;
    margin-right:20rpx;
  }
}
</style>
