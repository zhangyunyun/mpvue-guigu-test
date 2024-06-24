<template>
  <div class="detail">
    <swiper indicator-dots autoplay circular>
        <block v-for="(item, index) in imgList" :key="index">
            <swiper-item>
                <img v-if="item" :src="item" />
            </swiper-item>
        </block>
    </swiper>

    <div class="heading">
      <div class="name">{{shopList.name}}<span class="score">{{shopList.score}}</span></div>
      <div class="item phone"><span class="text">电话:</span>{{shopList.phone}}</div>
      <div class="item hours"><span class="text">营业时间:</span>{{shopList.businessHours}}</div>
      <div class="item address"><span class="text">地址:</span>{{shopList.address}}</div>
    </div>

    <div class="line"></div>

    <div class="introdection">
      <div class="intro_mark">
        <span class="mark" v-for="(item, index) in shopList.tags" :key="index">{{item}}</span>
      </div>
      <div class="intro_item">
        <div class="intro_item-list" v-for="(item, index) in commentList" :key="index">
          <div class="intro_info">
            <span class="iTitle">{{item.name}}</span>
            <span class="iDate">{{item.date}}</span>
            <span class="iPercentage">{{item.rating}}</span>
          </div>
          <div class="intro_cont">
            <p>{{item.content}}</p>
          </div>
        </div>
        <ul class="intro_item-img">
          <li class="imgList" v-for="(item, index) in commentList.images" :key="index">
            <img :src="item" />
          </li>
        </ul>
      </div>
    </div>
  </div>
</template>

<script>
  export default {
    data() {
      return {
        imgList:[],
        shopList:[],
        commentList:[]
      }
    },
    beforeMount() {
      this.index = parseInt(this.$mp.query.index) + 1

      this.$fly.get('https://locally.uieee.com/shops/' + this.index)
        .then(res => {
          console.log(res.data)
          this.imgList = res.data.images
          this.shopList = res.data
          this.commentList = res.data.comments
        })
        .catch(error => {
          console.log(error)
        })
    }
  }
</script>

<style lang="scss">
  .detail{
    position:relative;
    .heading{
      background:#fff;
      padding:20rpx;
    }   
    .name{
      color: #333;
      font-size: 32rpx;
      font-weight: bold;
      height: 60rpx;
      line-height: 60rpx;
      text-overflow: ellipsis;
      overflow: hidden;
      white-space: nowrap;
      position:relative;
      .score{
        position: absolute;
        top:0; 
        right:0;
        color:#f00;
        font-size:28rpx;
        font-weight: bold;
      }
    }
    .item{
      position:relative;
      font-size:30rpx;
    }
    .text{
      display: inline-block;
    }
    .phone{
      color: #999;
      font-size: 30rpx;
    }
    .hours{
      color: #999;
      font-size: 30rpx;
    }
    .address{
      margin-top: 10rpx;
      font-size: 30rpx;
      color: #666;
    }

    .line{
      height:12rpx;
      background:#f5f5f5;
    }

    .introdection{
      margin-top:10rpx;
      padding:30rpx 25rpx;
    }
    .intro_item-list{
      padding:15rpx;
      border-bottom:1rpx dotted #ddd;
    }
    .intro_item-list:last-child{
      border-bottom:0;
    }
    .intro_info{
      height:60rpx;
      line-height:60rpx;
      position: relative;
      display: flex;
      align-items:center;
    }
    .iTitle{
      flex:1;
      font-size:30rpx;
      justify-content: flex-start;
      color:#07c160;
    }
    .iDate{
      flex:1;
      font-size:28rpx;
      color:#999;
      text-align: right;
      justify-content: flex-end;
    }
    .iPercentage{
      position: absolute;
      right:0; 
      top:28rpx;
      font-size:28rpx;
      font-weight: bold;
      color:#f00;
    }
    .intro_mark{
      font-size:30rpx;
      .mark{
        display:inline-block;
        text-align:center;
        min-width:100rpx;
        padding:0 10rpx;
        height:45rpx;
        line-height:45rpx;
        color:#666;
        font-size:28rpx;
        background:#f1f1f1;
        border-radius:50rpx;
      }
    }
    .intro_cont{
      margin-top:20rpx;
      font-size:30rpx;
      line-height:1.6;
      text-align: justify;
      color:#666;
    }
    .intro_item-img{
      margin-top:20rpx;
      display:flex;
    }
    .imgList{
      flex:1 1 33.333%;
      height:150rpx;
      padding:10rpx 0;
      img{
        display: block;
        width:100%;
        height:150rpx;
      }
    }
  }
</style>
