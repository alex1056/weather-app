import { applyMiddleware, createStore } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import api from './middleware/api';
import reducer from './reducer';

const enhancer = applyMiddleware(api);

export default createStore(reducer, composeWithDevTools(enhancer));
