import React from 'react';
import PropTypes from 'prop-types';

function TodoDetail({ id, text, done, deletedAt }) {
  return (
    <div className='card'>
      <div className='card-body'>
        <table className='table'>
          <thead>
            <tr>
              <th>Id</th>
              <th>Text</th>
              <th>Done</th>
              <th>deletedAt</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>{id}</td>
              <td>{text}</td>
              <td>{done ? '✅' : '❌'}</td>
              <td>{deletedAt ? deletedAt : '----'}</td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  );
}

TodoDetail.propTypes = {
  id: PropTypes.string,
  text: PropTypes.string,
  done: PropTypes.bool,
  deletedAt: PropTypes.string
};

export default TodoDetail;
