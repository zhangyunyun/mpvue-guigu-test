 <template>
  <div class="list">
     <swiper indicator-dots autoplay circular>
         <block v-for="(img,index) in imgList" :key="index">
             <swiper-item>
                 <img mode="aspectFill" v-bind:src="img.imgUrl" />
             </swiper-item>
         </block>
     </swiper>
     <listItem v-for="(list,index) in listData" :key="index" :list="list" :index='index'></listItem>
  </div>
</template>

<script>
import { mapState } from 'vuex'
import listItem from '../../components/listItem/listItem'
export default {
  components: {
    listItem
  },
  data() {
    return {
      imgList:[
        {
          imgUrl:require('../../../static/images/detail/carousel/01.jpg')
        },
        {
          imgUrl:require('../../../static/images/detail/carousel/02.jpg')
        },
        {
          imgUrl:require('../../../static/images/detail/carousel/03.jpg')
        },
        {
          imgUrl:require('../../../static/images/detail/carousel/04.jpg')
        }
      ]
    }
  },
  beforeMount() {
    //分发action修改状态
    this.$store.dispatch('getList')
  },
  computed:{
    //映射状态到组件
    ...mapState(['listData'])
  }
}
</script>

<style lang="scss">
</style>
     