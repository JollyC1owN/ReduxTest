import { combineReducers } from "redux"
import { LOADING, SUCCESS, ERROR } from "./actions-type"

const defaultObj = {
	isFirst: true,
	isLoading: false,
	users: [],
	errMsg: ""
}


function searchReducers(state = defaultObj, action) {
	switch (action.type) {
		case LOADING:
			return {
				isFirst: false,
				isLoading: true,
				users: [],
				errMsg: ""
			}
		case SUCCESS:
			return {
				isFirst: false,
				isLoading: false,
				users: action.data,
				errMsg: ""
			}
		case ERROR:
			return {
				isFirst: false,
				isLoading: false,
				users: [],
				errMsg: "暂时未匹配到用户，请稍候再试"
			}
		default:
			return state
	}
}


export default combineReducers({ searchReducers })