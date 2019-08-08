import { createStore, applyMiddleware } from "redux"
//applyMiddleware 是一个函数：利用中间件
import thunk from "redux-thunk";
import {composeWithDevTools } from "redux-devtools-extension"

import { counter } from "./reducers"


//生成一个store对象
//内部会第一次调用reducer函数，即当前reducer函数 ：counter； 得到初始state
const store = createStore(
	counter,
	// applyMiddleware(thunk),//应用上异步中间件 ----这个参数是，applyMiddleware(thunk)调用的结果
	composeWithDevTools(applyMiddleware(thunk))  //使用扩展工具，浏览器中的扩展程序：redux
)

export default store