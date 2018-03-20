import SampleChildComponentActions from '../SampleChildComponentActions';

describe('SampleChildComponentActions', () => {
  it('should dispatch action SAMPLE_CHILD_COMPONENT_SUBMIT', () => {
    const actionPayload = SampleChildComponentActions.updateStoredText('TEST VALUE');
    expect(actionPayload).toMatchSnapshot();
  });
});