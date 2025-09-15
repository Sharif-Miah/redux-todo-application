import todosReducer from '@/redux/todos/reducer';
import filtesrReducer from '@/redux/filters/reducer';
import { combineReducers } from 'redux';

const rootReducer = combineReducers({
  todos: todosReducer,
  filters: filtesrReducer,
});

export default rootReducer;
