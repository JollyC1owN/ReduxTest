/* 包含所有的action creator 
		创建action 的函数

		同步action 返回的都是一个对象
		异步action 返回的都是一个函数
*/
import { INCREMENT, DECREMENT } from "./action-types"
//增加 
export const increment = (number) => ({ type: INCREMENT, data: number })

//减少
export const decrement = (number) => ({ type: DECREMENT, data: number })


//异步action  ---必须在store中使用中间件才能这么写
//每一个异步的action最好提供一个同步的action
export const incrementAsync = (number) => { 
	//返回的这个函数是由异步中间件（thunk），来调用
	return dispatch => { 
		//异步代码 ---在函数中才能执行异步代码
		setTimeout(() => {
			//1s之后才去分发一个增加的 action
			dispatch(increment(number))
    }, 1000);
	}
}


