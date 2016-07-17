import React from 'react';
import ReactDOM from 'react-dom';
import ToDoContainer from './ToDoContainer';
import reducer from './reducers/index';
import {createStore} from 'redux';
import {Provider} from 'react-redux';
import 'file?name=[name].[ext]!../index.html';

let store = createStore(reducer);
ReactDOM.render(<Provider store={store}>
        <ToDoContainer />
    </Provider>,
    document.getElementById('todo-app'));
