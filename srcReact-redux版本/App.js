import React, { Component } from 'react'
import { PropTypes } from "prop-types"
//链接react组件与redux的，是他们关联起来 connect是一个函数
import {connect } from "react-redux"

import {increment,decrement } from "./redux/actions"

class App extends Component {
  //限制穿过来的参数的数据类型
  static propTypes = {
    count: PropTypes.number.isRequired,
    increment: PropTypes.func.isRequired,
    decrement:PropTypes.func.isRequired,
  }

  increment = () => {
    //得到选择增加的数据:是一个字符串
    const number = this.select.value*1
    //调用store的方法更新状态
    this.props.increment(number)
  }
  
  decrement = () => {
    //得到选择增加的数据:是一个字符串
    const number = this.select.value * 1
    //调用store的方法更新状态
    this.props.decrement(number)
  }

  incrementIfOdd = () => {
    //得到选择增加的数据:是一个字符串
    const number = this.select.value * 1
    //得到原本的count状态值
    const count = this.props.count
    //判断满足条件再更新状态
    if (count % 2 === 1) { 
      //调用store的方法更新状态
      this.props.increment(number)
    }
  }

  incrementAsync = () => {
    //得到选择增加的数据:是一个字符串
    const number = this.select.value * 1    
    //启动延时定时器
    setTimeout(() => {
      //调用store的方法更新状态
      this.props.increment(number)
    }, 1000);
  }
  render() {
    let {count }  = this.props
    return (
      <div>
        <h3>Click {count} times</h3>
        <div>
          <select ref={select => this.select=select}>
            <option value="1">1</option>
            <option value="2">2</option>
            <option value="3">3</option>
          </select>&nbsp;  
          <button onClick={this.increment}>+</button>&nbsp; 
          <button onClick={this.decrement}>-</button>&nbsp; 
          <button onClick={this.incrementIfOdd}>increment if odd</button>&nbsp; 
          <button onClick={this.incrementAsync}>increment async</button>
        </div>
      </div>
    )
  }
}

//connect()函数执行后返回的是一个函数，这个函数执行的时候需要接受一个组件类，
//connect()(App)  这个返回的是一个新的组件
export default connect(
  state => ({ count: state }), //该箭头函数返回值是一个对象 {count: 数字} count  与App组件内的限制属性类型的名字一直
  //{ increment: increment, decrement: decrement} //传的是两个方法 函数
  //increment后面的属性值是由import {increment,decrement } from "./redux/actions"这里来的 
  { increment, decrement}  //简写
)(App) 
// count increment, decrement 与App组件内的限制属性类型的名字一直
//这两个对象中的所有数据，最终会结构赋值交给App组件。做为他的属性传递，