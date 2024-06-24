import Vue from 'vue'
import App from './App'

//用于启动项目的时候提示信息，设置为false关闭提示
Vue.config.productionTip = false
App.mpType = 'app'

//生成实例
const app = new Vue(App)

//挂载页面
app.$mount()
