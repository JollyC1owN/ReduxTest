import React, { Component } from 'react'
import { INCREMENT, DECREMENT } from "./redux/action-types"
export default class App extends Component {
  increment = () => {
    //得到选择增加的数据:是一个字符串  需要×1  得到一个数字
    const number = this.select.value*1
    //调用store的方法更新状态
    //stores上有一个dispatch方法：分发一个同步的action
    this.props.store.dispatch({ type: INCREMENT,data:number})
  }
  
  decrement = () => {
    //得到选择增加的数据:是一个字符串
    const number = this.select.value * 1
    //调用store的方法更新状态
    this.props.store.dispatch({ type: DECREMENT, data: number })
  }

  incrementIfOdd = () => {
    //得到选择增加的数据:是一个字符串
    const number = this.select.value * 1
    //得到原本的count状态值
    const count = this.props.store.getState()
    //判断满足条件再更新状态
    if (count % 2 === 1) { 
      //调用store的方法更新状态
      this.props.store.dispatch({ type: INCREMENT, data: number })
    }
  }

  incrementAsync = () => {
    //得到选择增加的数据:是一个字符串
    const number = this.select.value * 1    
    //启动延时定时器
    setTimeout(() => {
      //调用store的方法更新状态
      this.props.store.dispatch({ type: INCREMENT, data: number })
    }, 1000);
  }
  render() {
    let count = this.props.store.getState()
    console.log(this.props.store.getState());
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
