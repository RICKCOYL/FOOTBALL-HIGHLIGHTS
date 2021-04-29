/* eslint-disable max-len */
const FETCH_STOCK_REQUEST = 'FETCH_STOCK_REQUEST';
const FETCH_STOCK_SUCCESS = 'FETCH_STOCK_SUCCESS';
const FETCH_STOCK_ERROR = 'FETCH_STOCK_ERROR';

const fetchStockRequest = () => ({
  type: FETCH_STOCK_REQUEST,
});

const fetchStockSuccess = (stock) => ({
  type: FETCH_STOCK_SUCCESS,
  payload: stock,
});

const fetchStockError = (error) => ({
  type: FETCH_STOCK_ERROR,
  payload: error,
});

export {
  fetchStockRequest, fetchStockSuccess, fetchStockError, FETCH_STOCK_REQUEST, FETCH_STOCK_SUCCESS, FETCH_STOCK_ERROR,
};
