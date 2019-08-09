import React from 'react';
import ReactDOM from 'react-dom';
import { createStore } from "redux"
import App from './App';
import { counter} from "./redux/reducers"

//生成一个store对象
//内部会第一次调用reducer函数，即当前reducer函数 ：counter； 得到初始state
const store = createStore(counter)

//初始化渲染
ReactDOM.render(<App store={store} />, document.getElementById('root'));
//订阅监听（store中的状态变化了，就会自动调用进行重绘 ）
store.subscribe(() => { 
	ReactDOM.render(<App store={store} />, document.getElementById('root'));
})



