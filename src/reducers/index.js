import { combineReducers } from 'redux';
import stock from './stock';
import catfilter from './filter';

const rootReducer = combineReducers({
  stock,
  catfilter,
});

export default rootReducer;
