import { combineReducers } from "redux";
import todoReducer from './todoReducer';

const rootReducer = combineReducers({
  todosList: todoReducer,
});

export default rootReducer;