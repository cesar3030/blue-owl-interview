import React from 'react';
import TodoIndexPage from './todo/pages/TodoIndexPage';
import TodoShowPage from './todo/pages/TodoShowPage';
import QuotesIndexPage from './quotes/pages/QuotesIndexPage';
import QuotesHistoryPage from './quotes/pages/QuotesHistoryPage';
import RobotIndexPage from './robot/pages/RobotIndexPage';

export default [
  { path: '/todos/:id', component: () => <TodoShowPage /> },
  { path: '/todos', component: () => <TodoIndexPage /> },
  { path: '/quotes/history', component: () => <QuotesHistoryPage /> },
  { path: '/quotes', component: () => <QuotesIndexPage /> },
  { path: '/robot', component: () => <RobotIndexPage /> },

  {
    path: '*',
    component: () => <div>Wrong path, this route does not exist!</div>
  }
];
