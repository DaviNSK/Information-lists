import { combineReducers } from 'redux';

import filter from './filter/reducer';
import list from './list/reducer';

export default combineReducers({
  filter,
  list
});
