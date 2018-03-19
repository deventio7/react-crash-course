import SampleChildComponentActionTypes from '../../SampleChildComponent/SampleChildComponentActionTypes';
import PureChildComponentReducers from '../PureChildComponentReducers';

describe('PureChildComponentReducers', () => {
  it('should return initial state', () => {
    const otherAction = {
      type: 'test'
    };
    const result = PureChildComponentReducers.sampleChildSubmit(undefined, otherAction);
    expect(result).toMatchSnapshot();
  });

  it('should change state appropriately when receiving SAMPLE_CHILD_COMPONENT_SUBMIT', () => {
    const createAlertAction = {
      type: SampleChildComponentActionTypes.SAMPLE_CHILD_COMPONENT_SUBMIT,
      payload: 'TEST TEXT'
    };
    const result = PureChildComponentReducers.sampleChildSubmit(undefined, createAlertAction);
    expect(result).toMatchSnapshot();
  });
});