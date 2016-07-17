/**
 * Created by zeelshah on 08/07/16.
 */
import ToDoConstants from '../constants/ToDoConstants';
export default {
    CREATE: (text) => {
        return {
            type: ToDoConstants.CREATE,
            text
        };
    },
    UPDATE: (index, text) => {
        return {
            type: ToDoConstants.UPDATE,
            index,
            text
        };
    },
    DELETE: (index) => {
        return {
            type: ToDoConstants.DELETE,
            index
        };
    },
    TOGGLE_ALL: (isCompleted) => {
        return {
            type: ToDoConstants.TOGGLE_ALL,
            isCompleted
        };
    },
    TOGGLE: (index, isCompleted) => {
        return {
            type: ToDoConstants.TOGGLE,
            index,
            isCompleted
        };
    }
};