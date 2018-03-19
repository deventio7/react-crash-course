import { combineReducers } from 'redux';
import PureChildComponentReducers from './PureChildComponent/PureChildComponentReducers';

const Reducers = combineReducers({
    ...PureChildComponentReducers
});

export default Reducers;