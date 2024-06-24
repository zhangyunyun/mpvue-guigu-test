<template>
  <div class="detail">
    <div class="filmDetail">
      <div class="film_img"><img src="/static/images/index/cart.jpg" alt="" mode="aspectFill"></div>
      <div class="film_mark">
        <span class="green">动作</span>
        <span class="blue">冒险</span>
        <span class="gray">评分</span>
      </div>
      <div class="film_info">
        <h2 class="film_info-name">霸王别姬</h2>
        <div class="film_info-text">
          <span>评分9.5</span>
          <span>导演：陈凯歌</span>
          <span>主演：陈凯歌、张国荣、张丰毅</span>
        </div>
        <button class="film_info-see">我要观影</button>
      </div>
      <h2 class="item_title">影片简介</h2>
      <div class="item_cont">
        <ul class="introTab">
          <li>剧情简介</li>
          <li>影片人员</li>
        </ul>
        <div class="introPanel">
          <div class="panel">
            <p>1862年，热气球飞行家艾米丽亚·雷恩与科学家詹姆斯·格莱舍乘坐热气球展开了一场非凡的高空冒险，试图探寻天堂的奥秘。在飞行过程中，他们挑战了人类从未乘热气球抵达的高度，却也陷入一场史诗般的生存之战。</p>
          </div>
          <div class="panel">
            <div class="nameMark">
              <span>汤姆·哈伯 【导演 】</span>
              <span>埃迪·雷德梅恩 【饰 James Glaisher 】 </span>
              <span>菲丽希缇·琼斯 【饰 Amelia Wren 】 </span>
              <span>文森特·佩雷斯 【饰 Pierre Rennes 】 </span>
            </div>
          </div>
        </div>
      </div>
      <h2 class="item_title">播放来源</h2>
      <div class="item_cont">
        <div class="playMark">
          <span></span>
          <span></span>
        </div>
      </div>
      <h2 class="item_title">评论</h2>
      <div class="item_cont">
        <ul class="commentList">
          <li>
            <div cllass="commentListInner">
              <div class="comment_img"><img src="/static/images/avatar/0.png" alt=""></div>
              <div class="comment_info">
                <h3 class="comment_info-title">机智的M4</h3>
                <p class="comment_info-time">2021-03-18 13:08:49 </p>
                <div class="comment_info-star">
                  <span></span>
                  <span></span>
                  <span></span>
                  <span></span>
                  <span></span>
                </div>
                <div class="comment_info-text">
                  <p>有意义，但却无聊的莫名其妙 </p>
                </div>
              </div>
            </div>
          </li>
          <li></li>
        </ul>
      </div>
    </div>
  </div>
</template>

<script>
  export default {
    data() {
      return {
      }
    }
  }
</script>

<style lang="scss">
  .detail{
    position:relative;
    .filmDetail{
       display: flex;
       flex-direction: column;
      .film_img{
        height:400rpx;
        padding:26rpx;
        img{
          display: block;
          width:100%;
          height:400rpx;
        }
      }
      .film_mark{
        padding:0 26rpx;
        display: flex;
        align-items: center;
        justify-content: center;
        flex-wrap:wrap;
        text-align: center;
        span{
          display:inline-block;
          text-align: center;
          color:#fff;
          border-radius:10rpx;
          width:120rpx;
          height:55rpx;
          line-height:55rpx;
          margin:0 10rpx;
          font-size:25rpx;
          &.green{
            background:#07c160;
          }
          &.blue{
            background:#00bcd4;
          }
          &.gray{
            background:#e0e0e0;
          }
        }
      }
      
      .film_info{
        margin-top:20rpx;
        padding:0 26rpx;
        &-name{
          font-size: 40rpx;
          font-weight: bold;
        }
        &-text{
          display: flex;
          flex-direction: column;
          margin-top: 30rpx;
          line-height: 50rpx;
          font-size: 26rpx;
          span{
            display: block;
          }
        }
        &-see{
          width:300rpx;
          height:80rpx;
          line-height: 80rpx;
          margin:auto;
          background: #07c160;
          color: #fff;
          font-size: 28rpx;
          margin-top: 20rpx;
        }
      }
    }
  }
</style>
