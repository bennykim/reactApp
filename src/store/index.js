import { createStore, applyMiddleware} from 'redux';
import { createLogger } from 'redux-logger';
import reducers from './modules';

const middleware = applyMiddleware(createLogger())
const store = createStore(reducers, middleware);

export default store;
