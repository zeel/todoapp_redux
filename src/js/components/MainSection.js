/**
 * Created by zeelshah on 08/07/16.
 */
import React, {Component, PropTypes} from 'react';
import TodoItem from './ToDoItem';
import ToDoActions from '../actions/index';
class MainSection extends Component {
    static propTypes = {
        allTodos: PropTypes.array.isRequired,
    };

    render() {
        let todos = this.props.allTodos,
            todoComponents = [];
        for (let todoId in todos) {
            let todo = todos[todoId];
            todoComponents.push(<TodoItem key={todoId} {...todo} dispatch={this.props.dispatch}/>)
        }
        return <div>
            <div id="todo-container">
                <ul id="todo-box">
                    {todoComponents}
                </ul>
            </div>
        </div>
    }
}
export default MainSection;