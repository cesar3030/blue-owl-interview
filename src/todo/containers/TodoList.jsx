import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useHistory } from 'react-router-dom';
import { selectTodos } from '../../state/todos';

import TodoItem from '../components/TodoItem';
import FilterBtn from '../components/FilterBtn';
import {
  showAllTodos,
  showVisibleTodos,
  showDeletedTodos
} from '../../state/todos/actions';
import { doneTodo, deleteTodo } from '../../state/todos/actions';
import {
  TODO_FILTER_ALL,
  TODO_FILTER_VISIBLE,
  TODO_FILTER_DELETED
} from '../../state/todos/types';

function TodoList(props) {
  const dispatch = useDispatch();
  const history = useHistory();
  const filter = useSelector(state => state.todos.filter);
  const todos = useSelector(state => selectTodos(state.todos.items, filter));
  const handleAction = action => todoId => {
    dispatch(action(todoId));
  };
  const handleVisibilityChange = action => event => {
    event.stopPropagation();
    dispatch(action());
  };

  const handleShowDetail = id => history.push(`/todos/${id}`);

  return (
    <>
      <div className='row mt-2'>
        <div className='col'>
          <FilterBtn
            handleClick={handleVisibilityChange(showAllTodos)}
            type={TODO_FILTER_ALL}
            selectedFilter={filter}
          >
            All
          </FilterBtn>
          <FilterBtn
            handleClick={handleVisibilityChange(showVisibleTodos)}
            type={TODO_FILTER_VISIBLE}
            selectedFilter={filter}
          >
            Not deleted
          </FilterBtn>
          <FilterBtn
            handleClick={handleVisibilityChange(showDeletedTodos)}
            type={TODO_FILTER_DELETED}
            selectedFilter={filter}
          >
            Deleted
          </FilterBtn>
        </div>
      </div>
      <div className='row mt-2'>
        <div className='col'>
          {todos.length === 0 && (
            <div className='alert alert-warning' role='alert'>
              No todo
            </div>
          )}
          {todos.map(todo => (
            <TodoItem
              key={todo.id}
              {...todo}
              handleDone={handleAction(doneTodo)}
              handleDelete={handleAction(deleteTodo)}
              handleShowDetail={handleShowDetail}
            />
          ))}
        </div>
      </div>
    </>
  );
}

export default TodoList;
