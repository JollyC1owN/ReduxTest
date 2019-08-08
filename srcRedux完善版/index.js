import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import store from './redux/store';




//初始化渲染
render();
//订阅监听（store中的状态变化了，就会自动调用进行重绘 ）
store.subscribe(render)

function render() {
	ReactDOM.render(<App store={store} />, document.getElementById('root'));
}

