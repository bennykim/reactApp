import { createStore, combineReducers} from 'redux';
import { createLogger } from 'redux-logger';
import { counter } from './reducers';

const reducers = combineReducers({counter});
const store = createStore(reducers);

export default store;
