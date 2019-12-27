// 通过mutation间接更新state的多个方法的对象
import {
  RECEIVE_ADDRESS,
  RECEIVE_BOOKS
} from './mutation-types'
import { reqShopBooks, reqAddress } from '../api'
// import {  } from "../api";

export default {
  // 异步获取地址
  getAddress ({commit, state}) {
  },
  async getShopBooks ({commit}) {
    const result = await reqShopBooks()
    if (result.code === 0) {
      const books = result.data
      commit(RECEIVE_BOOKS, {books})
    }
  }

}
