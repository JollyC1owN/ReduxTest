import React from 'react';
import ReactDOM from 'react-dom';
//引入react-redux中的Provider
import { Provider } from "react-redux"


import App from './App';
import store from './redux/store';




//store对象交给 Provider进行管理
ReactDOM.render((
	<Provider store={store}>
		<App  />
	</Provider>
), document.getElementById('root'));


