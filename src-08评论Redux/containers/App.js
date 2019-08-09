import React, { Component } from 'react'
import PropTypes from 'prop-types';
import { connect} from "react-redux"
import { addComment ,delComment, getComments} from "../redux/actions"
import Add from "../components/add/Add"
import List from "../components/list/List"

class App extends Component {

  static propTypes = {
    comments: PropTypes.array.isRequired,
    addComment: PropTypes.func.isRequired,
    delComment: PropTypes.func.isRequired,
    getComments: PropTypes.func.isRequired,
  }
  componentDidMount() {
    //一开始就获取数组里面原有的数据
    this.props.getComments()
  }

  render() {
    let { comments, addComment, delComment } = this.props
    return (
      <div>
        <header className="site-header jumbotron">
          <div className="container">
            <div className="row">
              <div className="col-xs-12">
                <h1>请发表对React的评论</h1>
              </div>
            </div>
          </div>
        </header>
        <div className="container">
          <Add addComment={addComment} />
          <List comments={comments} delComment={delComment} />
        </div>
      </div>
    )
  }
}


export default connect(
  state => ({ comments: state }), //state就是一个comments数组
  { addComment, delComment, getComments}
)(App)