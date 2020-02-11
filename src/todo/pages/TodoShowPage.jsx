import React from 'react';
import { useParams } from 'react-router-dom';
import TodoDetailContainer from '../containers/TodoDetailContainer';

function TodoShowPage() {
  const { id } = useParams();
  return (
    <>
      <h1>Show Todo</h1>
      <hr />
      <TodoDetailContainer id={id} />
    </>
  );
}

export default TodoShowPage;
