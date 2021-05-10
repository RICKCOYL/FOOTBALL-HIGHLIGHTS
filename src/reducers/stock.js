import { FETCH_STOCK_REQUEST, FETCH_STOCK_SUCCESS, FETCH_STOCK_ERROR } from '../actions/index';

const initialState = {
  loading: false,
  stock: [],
  error: '',
};

const stock = (state = initialState, action) => {
  switch (action.type) {
    case FETCH_STOCK_REQUEST:
      return { ...state, loading: true };
    case FETCH_STOCK_SUCCESS:
      return {
        loading: false,
        stock: action.payload,
        error: '',
      };
    case FETCH_STOCK_ERROR:
      return {
        loading: false,
        stock: [],
        error: action.payload,
      };
    default:
      return state;
  }
};

export default stock;
