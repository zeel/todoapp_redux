/**
 * Created by zeelshah on 08/07/16.
 */
import React from 'react';

import Header from './Header';
import MainSection from './MainSection';
import Footer from './Footer';
export default (props) => {
    let {todos : allTodos, dispatch } = props;
    return <div>
        <Header areAllCompleted={false} dispatch={dispatch}/>
        <MainSection allTodos={allTodos} dispatch={dispatch}/>
        <Footer allTodos={allTodos}/>
    </div>
}