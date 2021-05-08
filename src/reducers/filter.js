/* eslint-disable no-console */
import { CHANGE_FILTER } from '../actions/index';

const initialState = 'ENGLAND: Premier League';

const catfilter = (state = initialState, action) => {
  const { type, filter } = action;
  switch (type) {
    case CHANGE_FILTER:
      return filter;
    default:
      return state;
  }
};

export default catfilter;
