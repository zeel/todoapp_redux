/**
 * Created by zeelshah on 17/07/16.
 */
import TodoApp from './components/ToDoApp';
import {connect} from 'react-redux';
import 'css/style.css';
function mapStateToProps(state) {
    return {todos: state.todos};
}
function mapDispatchToProps(dispatch) {
    return {
        dispatch
    }
}
export default connect(mapStateToProps, mapDispatchToProps)(TodoApp);