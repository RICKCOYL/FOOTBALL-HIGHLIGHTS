/* eslint-disable no-console */
import { CHANGE_FILTER } from '../actions/index';

const initialState = [{
  filter: 'ALL',
}];

const catfilter = (state = initialState, action) => {
  const { type, filter } = action;
  switch (type) {
    case CHANGE_FILTER:
      return [...state, console.log(filter)];
    default:
      return state;
  }
};

export default catfilter;
