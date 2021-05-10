/* eslint-disable no-console */
import axios from 'axios';
import API_KEY from '../api';

export const FETCH_STOCK_REQUEST = 'FETCH_STOCK_REQUEST';
export const FETCH_STOCK_SUCCESS = 'FETCH_STOCK_SUCCESS';
export const FETCH_STOCK_ERROR = 'FETCH_STOCK_ERROR';
export const CHANGE_FILTER = 'CHANGE_FILTER';

export const fetchStockRequest = () => ({
  type: FETCH_STOCK_REQUEST,
});

export const fetchStockSuccess = (stock) => ({
  type: FETCH_STOCK_SUCCESS,
  payload: stock,
});

export const fetchStockError = (error) => ({
  type: FETCH_STOCK_ERROR,
  payload: error,
});

export const changefilter = (filter) => ({
  type: CHANGE_FILTER,
  filter,
});

export const fetchStock = () => (dispatch) => {
  dispatch(fetchStockRequest());
  axios.get(API_KEY)
    .then((response) => {
      const stock = response.data;
      dispatch(fetchStockSuccess(stock));
    })
    .catch((error) => {
      const errMsg = error.message;
      dispatch(fetchStockError(errMsg));
    });
};
