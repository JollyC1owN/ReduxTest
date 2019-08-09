import React from 'react';
import ReactDOM from 'react-dom';
//引入react-redux中的Provider
import { Provider } from "react-redux"


import App from "./containers/App"
import store from './redux/store';




//store对象交给 Provider组件进行管理：让所有组件都可以得到state数据
ReactDOM.render((
	<Provider store={store}>
		<App  />
	</Provider>
), document.getElementById('root'));


