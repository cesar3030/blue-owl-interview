import React from 'react';

import TodoList from '../containers/TodoList';
import TodoForm from '../containers/TodoForm';

function TodoIndexPage(props) {
  return (
    <>
      <h1>Todo Page</h1>
      <hr />
      <TodoForm />
      <TodoList />
    </>
  );
}

export default TodoIndexPage;
