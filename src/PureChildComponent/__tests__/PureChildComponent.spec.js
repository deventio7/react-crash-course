import React from 'react';
import { shallow } from 'enzyme';
import PureChildComponent from '../PureChildComponent';

describe('PureChildComponent', () => {
  it('renders and matches snapshot', () => {
    const wrapper = shallow(<PureChildComponent passedText="TEST TEXT"/>);
    expect(wrapper).toMatchSnapshot();
  });
})
