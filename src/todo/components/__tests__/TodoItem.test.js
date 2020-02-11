import React from 'react';
import TodoItem from '../TodoItem';
import { shallow } from 'enzyme';

const setup = propOverrides => {
  const props = {
    ...propOverrides
  };

  const wrapper = shallow(<TodoItem {...props} />);
  const todoItem = wrapper.find('.todo-item');

  return {
    wrapper,
    props,
    todoItem
  };
};

describe('<TodoItem />', () => {
  it('renders', () => {
    const { wrapper } = setup();
    expect(wrapper.exists()).toBe(true);
  });

  it('has done class if todo is done', () => {
    const { todoItem } = setup({ done: true });

    expect(todoItem.hasClass('done')).toBeTruthy();
  });

  it('does not have done class if todo is not done', () => {
    const { todoItem } = setup({ done: false });

    expect(todoItem.hasClass('done')).toBeFalsy();
  });

  it('should have a dark style when the todo has been deleted', () => {
    const { todoItem } = setup({ deletedAt: jest.fn() });

    expect(todoItem.hasClass('bg-white')).toBeFalsy();
    expect(todoItem.hasClass('bg-dark')).toBeTruthy();
    expect(todoItem.hasClass('text-light')).toBeTruthy();
  });

  it('should have a light style when the todo has not been deleted yet', () => {
    const { todoItem } = setup();

    expect(todoItem.hasClass('bg-white')).toBeTruthy();
    expect(todoItem.hasClass('bg-dark')).toBeFalsy();
    expect(todoItem.hasClass('text-light')).toBeFalsy();
  });
});
