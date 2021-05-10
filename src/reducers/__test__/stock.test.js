import {
  fetchStockError,
} from '../../actions/index';

import stock from '../stock';

describe('recipesReducer', () => {
  const state = {
    loading: false,
    stock: [],
    error: '',
  };

  describe('Action type ', () => {
    it('returns the current state, setting isLoading to false, and isError to true', () => {
      expect(stock(state, fetchStockError())).toEqual({
        loading: false,
        stock: [],
        error: undefined,
      });
    });
  });

  it('returns current state if the action type is not one expected', () => {
    expect(stock(state, { type: 'OTHER' })).toEqual({
      loading: false,
      stock: [],
      error: '',
    });
  });

  it(`returns initial state if it us undefined
    and the action type is not one expected`, () => {
    expect(stock(undefined, { type: 'OTHER' })).toEqual({
      loading: false,
      stock: [],
      error: '',
    });
  });
});
