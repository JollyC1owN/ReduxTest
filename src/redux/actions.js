import { ADD_COMMENT, DEL_COMMENT,RECEIVE_COMMENTS } from "./action-types";

/* 包含了所有的action  creator（action的工厂函数） */


//同步添加
export const addComment = (obj) => ({ type: ADD_COMMENT, data: obj })
//同步删除
export const delComment = (userId) => ({ type: DEL_COMMENT, data: userId })

//同步接受comments
const receiveComments = (comments) => ({ type: RECEIVE_COMMENTS, data: comments})

//异步从后台获取数据
export const getComments = () => {
	return dispatch => {
		//模拟发送ajax请求异步获取数据
		setTimeout(() => {
			const comments = [
				{ userId: "001", userName: "tomb", userContent: "reactGoGoGO" },
				{ userId: "002", userName: "jolly", userContent: "react666666" },
				{ userId: "003", userName: "clown", userContent: "react难难难" },
			]
			//分发一个同步的action
			dispatch(receiveComments(comments))
		}, 3000);
	}
}