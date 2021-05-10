import {
  fetchStockSuccess, fetchStockError, changefilter,
} from '../index';

describe('State actions', () => {
  describe('filterRecipes', () => {
    const payload = 'ENGLAND: Premier League';
    it('returns an object with payload equal to the passed category', () => {
      expect(changefilter(payload)).toEqual({ filter: 'ENGLAND: Premier League', type: 'CHANGE_FILTER' });
    });

    it('returns an object with payload and type properties', () => {
      expect(changefilter(payload)).toEqual({ filter: 'ENGLAND: Premier League', type: 'CHANGE_FILTER' });
    });
  });

  describe('fetchSuccess', () => {
    const data = { cocktails: [] };
    it('returns an object with type "RECIPE_FETCH_SUCCESS"', () => {
      expect(fetchStockSuccess(data).type).toEqual('FETCH_STOCK_SUCCESS');
    });
  });

  describe('fetchFailure', () => {
    it('returns an object with type "RECIPE_FETCH_FAILURE"', () => {
      expect(fetchStockError().type).toEqual('FETCH_STOCK_ERROR');
    });
  });
});
