import React from 'react';
import { shallow } from 'enzyme';
import App from '../App';

describe('App', () => {
  it('renders without crashing', () => {
    const wrapper = shallow(<App />);
  });

  it('render shallow matches snap', () => {
    const wrapper = shallow(<App />);
    expect(wrapper).toMatchSnapshot();
  });

  it('componentTextSetter changes state', () => {
    const wrapper = shallow(<App />);
    jest.spyOn(wrapper.instance(), 'setState');
    wrapper.instance().componentTextSetter('TEST VALUE');
    expect(wrapper.instance().setState).toBeCalledWith({ componentText: 'TEST VALUE' });
    expect(wrapper.instance().state.componentText).toBe('TEST VALUE');
  });
})
