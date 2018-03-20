import React from 'react';
import { shallow } from 'enzyme';
import { SampleChildComponent } from '../SampleChildComponent';

describe('SampleChildComponent', () => {
  const basicProps = {
    actions: {
      updateStoredText: jest.fn()
    },
    pureComponentTextSetter: jest.fn(),
    storedText: ''
  }

  beforeEach(() => {
    jest.clearAllMocks();
  });

  it('renders and matches snapshot', () => {
    const wrapper = shallow(<SampleChildComponent {...basicProps} />);
    expect(wrapper).toMatchSnapshot();
  });

  it('updateInputValue calls action', () => {
    const wrapper = shallow(<SampleChildComponent {...basicProps} />);
    wrapper.instance().updateInputValue({
      target: {
        value: 'TEST VALUE'
      }
    });
    expect(basicProps.actions.updateStoredText).toBeCalledWith('TEST VALUE');
  });

  it('submit calls function to propogate data up', () => {
    const wrapper = shallow(<SampleChildComponent {...basicProps} />);
    wrapper.setProps({
      storedText: 'TEST VALUE'
    });
    wrapper.instance().submit();
    expect(basicProps.pureComponentTextSetter).toBeCalledWith('TEST VALUE');
  });
});
