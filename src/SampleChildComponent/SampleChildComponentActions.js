import SampleChildComponentActionTypes from './SampleChildComponentActionTypes';

const submit = (text) => {
  return {
    type: SampleChildComponentActionTypes.SAMPLE_CHILD_COMPONENT_SUBMIT,
    payload: text
  }
}

export default {
	submit
}