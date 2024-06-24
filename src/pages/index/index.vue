<template>
  <div class="index">
     <img class="iImg" v-if="isShow" :src="userInfos.avatarUrl" alt="">
     <button  class="iBtn" v-else open-type="getUserInfo" @getuserinfo="getUserInfo">获取用户信息</button>
     <h1 class="iTitle">hello {{userInfos.nickName}}</h1>
     <button class="iExplain" @tap="goToList">开启我的mpvue旅程</button>
  </div>
</template>

<script>
   export default {
      data() {
         return {
            isShow:false, //是否显示头像
            userInfos:{} //存储用户信息
         }
      },
      beforeMount () {//页面加载前就加载，先于mounted
         /* 
            默认进来是获取不到用户信息的，需要用户同意才能获取到
            如果能获取到信息是不合理的，需要清除授权缓存
         */
         //页面加载进来就获取用户信息
         this.handleGetUserInfo()
      },
      methods: {//methods中统一放事件的回调
         //获取用户登录信息
         handleGetUserInfo(){
            wx.getUserInfo({
               success: (res) => {
                  //用户已经授权过
                  console.log('用户已经授权过')
                  //更新data中的数据
                  const { userInfos, isShow } = this
                  this.userInfos = res.userInfo
                  this.isShow = true
               },
               fail: () => { 
                  console.log('用户还未授权过')
               }
            })
         },

         //点击获取用户登录信息
         getUserInfo(e){
            //判断用户是否授权
            if (e.mp.detail.rawData){
               //用户按了允许授权按钮
               console.log('用户按了允许授权按钮')
               this.handleGetUserInfo()
            } else {
               //用户按了拒绝按钮
               console.log('用户按了拒绝按钮')
            }
         },

         //点击跳转页面
         goToList(){
            wx.switchTab({ 
               url: '/pages/list/main' 
            });
         }
      }
   }
</script>

<style lang="scss">
   page{
      background:#07c160;
      color:#fff;
   }
   .index{
      font-size:12px;
      display: flex;
      flex-direction: column;
      align-items: center;
      color:#fff;
      .iImg{
         width:200rpx;
         height:200rpx;
         border-radius: 100rpx;
         margin:100rpx 0;
      }
      .iBtn{
         width:300rpx;
         height:80rpx;
         line-height:80rpx;
         font-size:30rpx;
         background:#fff;
         color:#07c160;
         font-weight:bold;
      }
      .iTitle{
         font-size: 40rpx;
         font-weight: bold;
         margin:100rpx 0;
      }
      .iExplain{
         font-size: 40rpx;
         font-weight: bold;
         margin:10rpx 0;
         color:rgba(255,255,255,.8);
         border:1rpx solid rgba(255,255,255,.8);
         border-radius:10rpx;
         text-align:center;
         width:350rpx;
         height:80rpx;
         line-height:80rpx;
         font-size:30rpx;
         background: transparent;
      }
   }   
</style>
