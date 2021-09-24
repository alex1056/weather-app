import { combineReducers } from 'redux';

import testStore from './test-store';
import weather from './load-by-city';

const reducer = combineReducers({
  testStore,
  weather,
});

export default reducer;
