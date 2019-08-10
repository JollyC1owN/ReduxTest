import { connect } from "react-redux"
import Search from "../components/search/search"
import { searchAsync } from "../store/actions"


export default connect(
	state => ({}),
	{ searchAsync }
)(Search)

