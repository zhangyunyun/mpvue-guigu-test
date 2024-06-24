/* 
   同步
   直接更新state的多个方法的对象
*/
import Vue from 'vue'
import { RECEIVE_LIST } from './mutation-type'

export default{
   [RECEIVE_LIST](state,{list_data}){
      //更新state中的数据
      state.listData = list_data
      console.log(state)
   }
}