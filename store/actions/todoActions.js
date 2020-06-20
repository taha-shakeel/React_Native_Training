import * as types from '../actionTypes';
import getStaticTodosSource from '../../sources/staticTodoListSource';
import fetchApiTodosSource, { fetchApiAxiosTodosSource } from '../../sources/fetchApiTodoListSource';

export const fetchTodosInit = () => ({
  type: types.FETCH_TODO_INIT, // mandatory
});

export const fetchTodosSuccess = data => ({
  type: types.FETCH_TODO_SUCCESS,
  data, // optional
});

export const fetchTodosFail = data => ({
  type: types.FETCH_TODO_FAIL,
});


export const getStaticTodosList = () => (dispatch) =>{
  getStaticTodosSource([
    { id: 1, todo: 'redux todo' },
    { id: 2, todo: 'http call todo' },
  ]).then((items) => dispatch(fetchTodosSuccess(items)))
}

export const fetchApiTodosList = () => (dispatch) => {
  fetchApiTodosSource()
    .then((res) => dispatch(fetchTodosSuccess(res)));
}

export const fetchAxiosTodosList = () => (dispatch) => {
  fetchApiAxiosTodosSource()
    .then((res) => dispatch(fetchTodosSuccess(res)));
}