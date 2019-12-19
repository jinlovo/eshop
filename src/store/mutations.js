// 直接更新state的多个方法的对象
import {
    RECEIVE_ADDRESS,
    RECEIVE_BOOKS
} from './mutation-types'
import { reqShopBooks,
reqAddress } from '../api'
export default{
    [RECEIVE_ADDRESS] (state, {address}) {
        state.address = address
    },
    [RECEIVE_BOOKS] (state, {books}) {
        state.books = books
    }
}