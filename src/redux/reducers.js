import { ADD_COMMENT, DEL_COMMENT, RECEIVE_COMMENTS } from "./action-types";

/* 包含多个reducers函数（根据老的state和action返回一个新的state） */
// const initComments = [
// 	{ userId: "001", userName: "tomb", userContent: "reactGoGoGO" },
// 	{ userId: "002", userName: "jolly", userContent: "react666666" },
// 	{ userId: "003", userName: "clown", userContent: "react难难难" },
// ]
const initComments =[]
export function comments(state = initComments, action) {
	switch (action.type) {
		case ADD_COMMENT:
			return [action.data, ...state] //返回一个新的状态--数组，不能修改initComments和state，要产生一个新的
		case DEL_COMMENT:
			return state.filter((item, index) => item.userId !== action.data)   //过滤
		case RECEIVE_COMMENTS:
			return action.data
		default:
			return state
	}
}