import { connect } from "react-redux"
import List from "../components/list/list"


export default connect(
	state => ({...state.searchReducers }),
)(List)