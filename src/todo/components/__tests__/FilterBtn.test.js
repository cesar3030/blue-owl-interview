import React from 'react';
import FilterBtn from '../FilterBtn';
import { shallow } from 'enzyme';

const setup = propOverrides => {
  const props = {
    ...propOverrides
  };

  const wrapper = shallow(<FilterBtn {...props} />);
  const btn = wrapper.find('button');
  return {
    wrapper,
    btn,
    props
  };
};

describe('<FilterBtn />', () => {
  it('renders', () => {
    const { wrapper } = setup();
    expect(wrapper.exists()).toBe(true);
  });

  it('should execute handleClick function when user clicking', () => {
    const handleClick = jest.fn();
    const { btn } = setup({ handleClick });

    btn.simulate('click');

    expect(handleClick).toHaveBeenCalled();
  });

  it('should have active class if selectedFilter equals to Filter button type', () => {
    const filterType = jest.fn();
    const { btn } = setup({ type: filterType, selectedFilter: filterType });

    expect(btn.hasClass('active')).toBeTruthy();
  });

  it('should not have active class if selectedFilter is different than Filter button type', () => {
    const selectedFilter = jest.fn();
    const type = jest.fn();
    const { btn } = setup({ type, selectedFilter });

    expect(btn.hasClass('active')).toBeFalsy();
  });
});
