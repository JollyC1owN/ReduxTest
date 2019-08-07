import React from 'react';
import ReactDOM from 'react-dom';
import { createStore } from "redux"
import App from './App';
import { counter} from "./redux/reducers"

//生成一个store对象
//内部会第一次调用reducer函数，即当前 ：counter； 得到初始state
const store = createStore(counter)
console.log(store);
//初始化渲染
render();
//订阅监听（store中的状态变化了，就会自动调用进行重绘 ）
store.subscribe(render)

function render() {
	ReactDOM.render(<App store={store} />, document.getElementById('root'));
}

