import Mock from 'mockjs'
import data from './data.json'
Mock.mock('/books', {
  code: 0,
  data: data.books
})
