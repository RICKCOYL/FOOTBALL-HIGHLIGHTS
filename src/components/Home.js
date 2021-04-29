import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { fetchStock } from '../actions/index';

const Home = ({ fetchStock }) => {
  useEffect(() => {
    fetchStock();
  }, []);
  return (
    <div>
      <h1>STOCKS</h1>
    </div>
  );
};

const mapStateToProps = (state) => ({
  stockData: state.stock,
});

const mapDispatchToProps = (dispatch) => ({
  fetchStock: () => dispatch(fetchStock()),
});

Home.propTypes = {
  fetchStock: PropTypes.func.isRequired,
};
export default connect(mapStateToProps, mapDispatchToProps)(Home);
