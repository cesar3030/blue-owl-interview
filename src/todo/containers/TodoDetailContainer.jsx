import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

import TodoDetail from '../components/TodoDetail';
import { selectTodo } from '../../state/todos';

class TodoDetailContainer extends Component {
  render() {
    const { todo, id } = this.props;
    if (!todo) {
      return (
        <div className='alert alert-danger' role='alert'>
          Todo#{id} not found 😢
        </div>
      );
    }

    return <TodoDetail {...todo} />;
  }
}

const mapStateToProps = (state, props) => {
  return { todo: selectTodo(state.todos.items, props.id) };
};

TodoDetailContainer.propTypes = {
  id: PropTypes.number,
  todo: PropTypes.object
};

export default connect(mapStateToProps)(TodoDetailContainer);
