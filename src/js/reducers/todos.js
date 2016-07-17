/**
 * Created by zeelshah on 11/07/16.
 */
import ToDoConstants from '../constants/ToDoConstants';
import update from 'react-addons-update';
/**
 * returns updated todo list
 * @param todolist
 * @param todo
 * @param index
 */
function getReplacedTodoInList(todolist, todo, index) {
    return update(todolist, {$splice: [[index, 1, todo]]});
}
/**
 * perform updates on that index of array
 * @param todolist
 * @param updates
 * @param index
 * @returns {*}
 */
function getUpdatedList(todolist, updates, index) {
    return getReplacedTodoInList(todolist, Object.assign({}, todolist[index], updates), index);
}
function todos(state = [], action) {
    let {index} = action;
    switch (action.type) {
        case ToDoConstants.TOGGLE_ALL:
            return state.map((todo, index, array) => {
                return getUpdatedList(array, {isCompleted: action.isCompleted}, index);
            });
        case ToDoConstants.CREATE:
            return update(state, {
                $push: [{
                    text: action.text,
                    isComplete: false
                }]
            });
            break;
        case ToDoConstants.UPDATE:
            return getUpdatedList(state, {text: action.text}, index);
        case ToDoConstants.TOGGLE:
            return getUpdatedList(state, {isCompleted: action.isCompleted}, index);
        case ToDoConstants.DELETE:
            return update(state, {$splice: [[index, 1]]});
        default:
            return state;
    }
}
export default todos;