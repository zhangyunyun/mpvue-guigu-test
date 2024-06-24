import Vue from 'vue'
import Film from './film.vue'

//生成实例
const film = new Vue(Film)

//挂载当前的页面
film.$mount()
