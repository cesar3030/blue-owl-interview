import React from 'react';
import PropTypes from 'prop-types';
import './TodoItem.css';
import { Link } from 'react-router-dom';

function TodoItem({
  id,
  text,
  deletedAt,
  done,
  handleDone,
  handleDelete,
  handleShowDetail
}) {
  const classNameArr = ['shadow-sm', 'rounded', 'todo-item', 'p-2', 'mb-2'];
  if (done) {
    classNameArr.push('done');
  }

  if (deletedAt) {
    classNameArr.push('bg-dark text-light');
  } else {
    classNameArr.push('bg-white');
  }

  const handleOnClick = action => event => {
    event.preventDefault();
    event.stopPropagation();
    action(id);
    return;
  };

  const deleteButton = !deletedAt && (
    <button className='btn' type='click' onClick={handleOnClick(handleDelete)}>
      X
    </button>
  );

  return (
    <Link to={`/todos/${id}`}>
      <div
        className={classNameArr.join(' ')}
        onClick={handleOnClick(handleShowDetail)}
      >
        <span onClick={handleOnClick(handleDone)}>{text}</span> {deleteButton}
      </div>
    </Link>
  );
}

TodoItem.propTypes = {
  text: PropTypes.string.isRequired,
  deleted: PropTypes.string,
  done: PropTypes.bool
};

export default TodoItem;
