import SampleChildComponentActionTypes from './SampleChildComponentActionTypes';

const initialState = {
	storedText: ''
}

const sampleChildSubmit = (state = initialState, action) => {
	switch (action.type) {
		case SampleChildComponentActionTypes.SAMPLE_CHILD_COMPONENT_SUBMIT:
			return {
				...state,
				storedText: action.payload
			};
		default:
			return state;
	}
}

export default {
  sampleChildSubmit
};