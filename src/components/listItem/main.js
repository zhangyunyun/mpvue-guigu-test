import Vue from 'vue'
import ListItem from './listItem.vue'

//生成实例
const listItem = new Vue(ListItem)

//挂载当前页面
listItem.$mount()