import SampleChildComponentActionTypes from './SampleChildComponentActionTypes';

const updateStoredText = (text) => {
  return {
    type: SampleChildComponentActionTypes.SAMPLE_CHILD_COMPONENT_SUBMIT,
    payload: text
  }
}

export default {
	updateStoredText
}