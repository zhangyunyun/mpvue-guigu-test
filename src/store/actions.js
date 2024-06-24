/* 
   异步
   通过mutation间接更新state的多个方法的对象
*/
import listData from '../mock/data-list'  //请求的数据,这里模拟数据

import { RECEIVE_LIST } from './mutation-type'

export default{
   getList({commit}){
      //触发对应的mutation
      /* 
         RECEIVE_LIST
         data应为发送请求获取到的数据，这里用模拟的数据代替
          commit(RECEIVE_LIST, data)
      */
      console.log(listData)
      commit(RECEIVE_LIST, listData)
   }
}