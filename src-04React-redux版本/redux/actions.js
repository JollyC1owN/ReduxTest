/* 包含所有的action creator 
		创建action 的函数
*/
import { INCREMENT, DECREMENT } from "./action-types"
//增加 
export const increment = (number) => ({ type: INCREMENT, data: number })

//减少
export const decrement = (number) => ({ type: DECREMENT, data: number })