import {
  ADD_TODO,
  DONE_TODO,
  DELETE_TODO,
  TODO_FILTER_VISIBLE,
  TODO_FILTER_ALL,
  TODO_FILTER_DELETED
} from './types';

export const addTodo = text => ({
  type: ADD_TODO,
  payload: { text }
});

export const doneTodo = id => ({
  type: DONE_TODO,
  payload: { id }
});

export const deleteTodo = id => ({
  type: DELETE_TODO,
  payload: { id }
});

export const showAllTodos = () => ({
  type: TODO_FILTER_ALL
});

export const showVisibleTodos = () => ({
  type: TODO_FILTER_VISIBLE
});

export const showDeletedTodos = () => ({
  type: TODO_FILTER_DELETED
});
