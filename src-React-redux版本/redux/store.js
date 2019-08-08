import { createStore } from "redux"
import { counter } from "./reducers"

//生成一个store对象
//内部会第一次调用reducer函数，即当前reducer函数 ：counter； 得到初始state
const store = createStore(counter)

export default store