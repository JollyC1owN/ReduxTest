import React, { Component } from 'react'

export default class App extends Component {
  state = {
    count : 0
  }

  increment = () => {
    //得到选择增加的数据:是一个字符串
    const number = this.select.value*1
    //得到原本的count状态值
    const count = this.state.count
    //更新状态
    this.setState({ count: count + number })
  }
  
  decrement = () => {
    //得到选择增加的数据:是一个字符串
    const number = this.select.value * 1
    //得到原本的count状态值
    const count = this.state.count
    //更新状态
    this.setState({ count: count - number })
  }

  incrementIfOdd = () => {
    //得到选择增加的数据:是一个字符串
    const number = this.select.value * 1
    //得到原本的count状态值
    const count = this.state.count
    //判断满足条件再更新状态
    if (count % 2 === 1) { 
      this.setState({ count:count + number })
    }
    
  }

  incrementAsync = () => {
    //得到选择增加的数据:是一个字符串
    const number = this.select.value * 1
    //得到原本的count状态值
    const count = this.state.count
    //启动延时定时器
    setTimeout(() => {
      //更新状态
      this.setState({ count:count + number })
    }, 1000);
    
  }
  render() {
    let { count} = this.state
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
