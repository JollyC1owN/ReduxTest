import { LOADING, SUCCESS, ERROR } from "./actions-type"
import axios from "axios"

export const lodingAction = () => ({ type: LOADING })

export const successAction = (userObj) => ({ type: SUCCESS ,data:userObj})

export const errorAction = () => ({ type: ERROR })

export const searchAsync = (keyWord) => { 
	return dispatch => {
		dispatch(lodingAction())
		const url = `https://api.github.com/search/users?q=${keyWord}`
		axios.get(url)
			.then((result) => { 
				dispatch(successAction(result.data.items))
			})
			.catch((error) => { 
				dispatch(errorAction())
			})
		
	}
}