import SampleChildComponentActionTypes from '../SampleChildComponent/SampleChildComponentActionTypes';

const initialState = {
  passedText: 'initial text'
}

const sampleChildSubmit = (state = initialState, action) => {
  switch (action.type) {
    case SampleChildComponentActionTypes.SAMPLE_CHILD_COMPONENT_SUBMIT:
      return {
        ...state,
        passedText: action.payload
      };
    default:
      return state;
  }
}

export default {
  sampleChildSubmit
};