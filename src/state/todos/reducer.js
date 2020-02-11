import { combineReducers } from 'redux';

import {
  ADD_TODO,
  DELETE_TODO,
  DONE_TODO,
  TODO_FILTER_ALL,
  TODO_FILTER_DELETED,
  TODO_FILTER_VISIBLE
} from './types';
import { generateId } from '../../utils/generators';

const initState = [{ id: 1, text: 'Say hi to someone :)' }];

const todoReducer = (state = initState, action) => {
  switch (action.type) {
    case ADD_TODO:
      return [
        ...state,
        { id: generateId(), text: action.payload.text, done: false }
      ];
    case DONE_TODO:
      return state.map(todo => {
        if (todo.id === action.payload.id) {
          return { ...todo, done: true };
        }

        return { ...todo };
      });
    case DELETE_TODO:
      return state.map(todo => {
        if (todo.id === action.payload.id) {
          return { ...todo, deletedAt: `${new Date().toISOString()}` };
        }

        return { ...todo };
      });
    default:
      return state;
  }
};

const filterReducer = (state = TODO_FILTER_ALL, action) => {
  const filters = [TODO_FILTER_ALL, TODO_FILTER_DELETED, TODO_FILTER_VISIBLE];
  if (filters.includes(action.type)) {
    return action.type;
  }

  return state;
};

export default combineReducers({ items: todoReducer, filter: filterReducer });
