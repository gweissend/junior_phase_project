import React from 'react';
import ReactDOM from 'react-dom';
import App from './App.js';
// import store from './store'
import { BrowserRouter } from 'react-router-dom'

ReactDOM.render(<App /> , document.getElementById('root')
);

// ReactDOM.render(
//    <Provider store = { store }>
//       <App />
//    </Provider>, 
//    document.getElementById('root')
//    );