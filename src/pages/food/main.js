import Vue from 'vue'
import Food from './food.vue'

//生成实例
const food = new Vue(Food)

//挂载当前的页面
food.$mount()
