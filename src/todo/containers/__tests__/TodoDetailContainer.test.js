import React from 'react';
import { shallow } from 'enzyme';
import TodoDetailContainer from '../TodoDetailContainer';
import { mockStore } from '../../../setupTests';

const initState = {
  todos: { items: [{ id: 1, title: 'a title', done: false }] }
};
const store = mockStore(initState);

const setup = propOverrides => {
  const props = {
    store,
    ...propOverrides
  };

  const wrapper = shallow(<TodoDetailContainer {...props} />);

  return {
    wrapper,
    props
  };
};

describe('<TodoDetailContainer />', () => {
  it('should render the table ', () => {
    const { wrapper } = setup({ id: 1 });
    const { props } = wrapper.instance();
    console.log(props);
    expect(props).toMatchObject(initState.todos.items[0]);
  });
});
