import React from 'react';
import TodoIndexPage from './todo/pages/TodoIndexPage';
import TodoShowPage from './todo/pages/TodoShowPage';

export default [
  { path: '/todos/:id', component: () => <TodoShowPage /> },
  { path: '/todos', component: () => <TodoIndexPage /> },
  {
    path: '*',
    component: () => <div>Wrong path, this route does not exist!</div>
  }
];
