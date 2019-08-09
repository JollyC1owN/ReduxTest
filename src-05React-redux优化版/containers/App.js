/* 这是一个容器组件，使用了redux的API 
	容器组件内会包含一个UI组件----Counter，会对这个UI组建进项包装
	connect用于包装UI组件生成容器组件
*/
import React from 'react';
//链接react组件与redux的，是他们关联起来 connect是一个函数
import { connect } from "react-redux"
import { increment, decrement } from "../redux/actions"
import Counter from "../components/Counter"
//connect()函数执行后返回的是一个函数，这个函数执行的时候需要接受一个组件类，
//connect()(App)  这个返回的是一个新的组件
export default connect(
	state => ({ count: state }), //该箭头函数返回值是一个对象 {count: 数字} count  与App组件内的限制属性类型的名字一直
	//{ increment: increment, decrement: decrement} //传的是两个方法 函数
	//increment后面的属性值是由import {increment,decrement } from "./redux/actions"这里来的 
	{ increment, decrement }  //简写
)(Counter)
// count increment, decrement 与App组件内的限制属性类型的名字一直
//这两个对象中的所有数据，最终会结构赋值交给App组件。做为他的属性传递，