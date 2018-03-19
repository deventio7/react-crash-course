import { applyMiddleware, compose, createStore } from 'redux';
import reduxImmutableStateInvariant from 'redux-immutable-state-invariant';
import reducers from './Reducers';

const middleware = [
	reduxImmutableStateInvariant()
]

const configureStore = (initialState) => {
    const store = createStore(
        reducers,
        initialState,
        compose(applyMiddleware(...middleware))
    );
    return store;
};

const Store = {
    configureStore
};

export default Store;