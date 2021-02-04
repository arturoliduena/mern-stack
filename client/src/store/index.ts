import { createStore, applyMiddleware, compose } from 'redux'
import reducers from './reducers';
import createSagaMiddleware from 'redux-saga';
import rootSaga from './sagas';
import { loadState, saveToken } from '../util/localStorage';
import throttle from 'lodash/throttle';

// create the saga middleware
const sagaMiddleware = createSagaMiddleware();

const persistedState = loadState();

const composeEnhancers = (typeof window !== 'undefined' && (window as any).__REDUX_DEVTOOLS_EXTENSION_COMPOSE__) || compose;

// mount it on the Store
const store = createStore(
  reducers,
  persistedState,
  composeEnhancers(applyMiddleware(sagaMiddleware)),
);

store.subscribe(throttle(() => {
  saveToken(store.getState().auth.token);
}, 1000));

export type RootState = ReturnType<typeof reducers>

// then run the saga
sagaMiddleware.run(rootSaga)

export default store;
