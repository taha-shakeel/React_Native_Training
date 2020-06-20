import * as types from '../actionTypes';
import {
  todoInitialState,
} from './initialState';

export default function todoReducer(state = todoInitialState, action) {
  switch (action.type) {
    case types.FETCH_TODO_INIT: {
      return Object.assign({}, state, {
        isLoading: true,
      });
    }
    case types.FETCH_TODO_SUCCESS: {
      return Object.assign({}, state, {
        isLoading: false,
        todos: [...action.data],
      });
    }
    case types.FETCH_TODO_FAIL: {
      return Object.assign({}, state, {
        isLoading: false,
        isError: true, 
      });
    }
    default:
      return state;
  }
}
