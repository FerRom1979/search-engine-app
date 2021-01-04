import { createStore, applyMiddleware } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import searchDataReducer from '../reducer/index';
import thunk from 'redux-thunk';

const compositeEnhancer = composeWithDevTools;

export default function generateStore() {
  const store = createStore(searchDataReducer, compositeEnhancer(applyMiddleware(thunk)));
  return store;
}
