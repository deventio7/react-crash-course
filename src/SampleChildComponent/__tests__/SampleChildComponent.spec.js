import React from 'react';
import { shallow } from 'enzyme';
import { SampleChildComponent } from '../SampleChildComponent';

describe('SampleChildComponent', () => {
  const basicProps = {
    actions: {
      submit: jest.fn()
    }
  }

  beforeEach(() => {
    jest.clearAllMocks();
  });

  it('renders and matches snapshot', () => {
    const wrapper = shallow(<SampleChildComponent {...basicProps} />);
    expect(wrapper).toMatchSnapshot();
  });

  it('updateInputValue changes state', () => {
    const wrapper = shallow(<SampleChildComponent {...basicProps} />).instance();
    jest.spyOn(wrapper, 'setState');
    wrapper.updateInputValue({
      target: {
        value: 'TEST VALUE'
      }
    });
    expect(wrapper.setState).toBeCalledWith({ inputText: 'TEST VALUE' });
    expect(wrapper.state.inputText).toBe('TEST VALUE');
  });

  it('submit calls action', () => {
    const wrapper = shallow(<SampleChildComponent {...basicProps} />).instance();
    wrapper.state.inputText = 'TEST VALUE';
    wrapper.submit();
    expect(basicProps.actions.submit).toBeCalledWith('TEST VALUE');
  });
});
