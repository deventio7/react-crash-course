import SampleChildComponentActionTypes from '../SampleChildComponentActionTypes';
import SampleChildComponentReducers from '../SampleChildComponentReducers';

describe('SampleChildComponentReducers', () => {
  it('should return initial state', () => {
    const otherAction = {
      type: 'test'
    };
    const result = SampleChildComponentReducers.sampleChildSubmit(undefined, otherAction);
    expect(result).toMatchSnapshot();
  });

  it('should change state appropriately when receiving SAMPLE_CHILD_COMPONENT_SUBMIT', () => {
    const createAlertAction = {
      type: SampleChildComponentActionTypes.SAMPLE_CHILD_COMPONENT_SUBMIT,
      payload: 'TEST TEXT'
    };
    const result = SampleChildComponentReducers.sampleChildSubmit(undefined, createAlertAction);
    expect(result).toMatchSnapshot();
  });
});