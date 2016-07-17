/**
 * Created by zeelshah on 08/07/16.
 */
import React from 'react';
import ToDoTextInput from './TodoTextInput';
import ToDoActions from '../actions/index';

const Header = (props) => {
    let dispatch = props.dispatch,
        _onSelectAll = (event) => {
            dispatch(ToDoActions.TOGGLE_ALL(event.target.checked));
        },
        _onEnter = (text) => {
            text && dispatch(ToDoActions.CREATE(text));
        };
    return <div className="todo-form">
        <h3>Todos</h3>
        <input type="checkbox" id="select-all" onChange={_onSelectAll}
               checked={props.areAllCompleted}/>
        <ToDoTextInput id="new-todo" onSave={_onEnter}/>
    </div>;
};
export default Header;
