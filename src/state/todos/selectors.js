import {
  TODO_FILTER_DELETED,
  TODO_FILTER_VISIBLE,
  TODO_FILTER_ALL
} from './types';

export const selectTodos = (todos = [], filter = TODO_FILTER_ALL) => {
  switch (filter) {
    case TODO_FILTER_DELETED:
      return todos.filter(t => t.hasOwnProperty('deletedAt'));
    case TODO_FILTER_VISIBLE:
      return todos.filter(t => !t.hasOwnProperty('deletedAt'));
    default:
      return todos;
  }
};

/**
 * Returns the todo with the provided id
 * @param {Array} todos
 * @param {String} todoId
 */
export const selectTodo = (todos = [], todoId) => {
  const todoArr = todos.filter(t => t.id === todoId);
  return todoArr.length > 0 ? todoArr[0] : null;
};
