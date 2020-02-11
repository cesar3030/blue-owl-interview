import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { addTodo } from '../../state/todos';

function TodoFormHook(props) {
  const [text, setText] = useState('');
  const dispatch = useDispatch();
  const handleTextChange = event => setText(event.target.value);
  const handleSubmit = event => {
    event.preventDefault();
    dispatch(addTodo(text));
    setText('');
  };

  return (
    <form className='form-inline' onSubmit={handleSubmit}>
      <div className='form-group'>
        <label htmlFor='todoText' className='mr-2'>
          Title
        </label>
        <input
          id='todoText'
          type='text'
          className='form-control mr-2'
          value={text}
          placeholder='text...'
          onChange={handleTextChange}
        />
      </div>
      <button className='btn'>Add</button>
    </form>
  );
}

TodoFormHook.propTypes = {};

export default TodoFormHook;
