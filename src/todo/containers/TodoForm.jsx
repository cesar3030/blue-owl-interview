import React, { Component } from 'react';
import { connect } from 'react-redux';
import { addTodo } from '../../state/todos';

class TodoForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      text: ''
    };
  }

  handleSubmit = e => {
    e.preventDefault();
    this.props.addTodo(this.state.text);
    this.setState({ text: '' });
  };

  handleTextChange = e => {
    this.setState({ text: e.target.value });
  };

  render() {
    return (
      <form className='form-inline' onSubmit={this.handleSubmit}>
        <div className='form-group'>
          <label htmlFor='todoText' className='mr-2'>
            Title
          </label>
          <input
            id='todoText'
            type='text'
            className='form-control mr-2'
            value={this.state.text}
            placeholder='text...'
            onChange={this.handleTextChange}
          />
        </div>
        <button className='btn'>Add</button>
      </form>
    );
  }
}

const mapStateToProps = state => {
  return {};
};

const mapDispatchToProps = dispatch => {
  return {
    addTodo: todo => dispatch(addTodo(todo))
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(TodoForm);
