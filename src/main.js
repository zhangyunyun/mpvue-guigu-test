import Vue from 'vue'
import App from './App.vue'
import Fly from "flyio/dist/npm/wx" //使用axios
import store from './store/store'   //使用vuex

//用于启动项目的时候提示信息，设置为false关闭提示,默认为false
Vue.config.productionTip = true

//声明当前组件的类型
/*
   这个值是为了与后面要讲的小程序页面组件所区分开来，
   因为小程序页面组件和这个App.vue组件的写法和引入方式是一致的，
   为了区分两者，需要设置mpType值
*/
App.mpType = 'app'

//将store对象放置在vue的原型上，为的是每个实例都可以使用
Vue.prototype.$store = store

//flyio库，分装请求插件
let fly = new Fly
Vue.prototype.$fly = fly

//创建vue实例
const app = new Vue(App)

//挂载组件
app.$mount()

