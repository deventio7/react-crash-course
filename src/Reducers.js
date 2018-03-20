import { combineReducers } from 'redux';
import SampleChildComponentReducers from './SampleChildComponent/SampleChildComponentReducers';

const Reducers = combineReducers({
  ...SampleChildComponentReducers
});

export default Reducers;