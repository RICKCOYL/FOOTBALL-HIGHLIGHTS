/* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */
import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';

import { useParams } from 'react-router';
import { fetchStock } from '../actions/index';

const Details = ({
  fetchStock, userData, error, loading,
}) => {
  const { title } = useParams();
  useEffect(() => {
    fetchStock();
  }, []);
  return (
    <div>
      <h1>
        DETAILS -
        {title}
      </h1>

    </div>
  );
};

const mapStateToProps = (state) => ({
  userData: state.stock.stock,
  filter: state.catfilter,
  loading: state.stock.loading,
  error: state.stock.error,
});

const mapDispatchToProps = (dispatch) => ({
  fetchStock: () => dispatch(fetchStock()),
});

Details.propTypes = {
  fetchStock: PropTypes.func.isRequired,
  userData: PropTypes.shape({
    title: PropTypes.string.isRequired,
    stock: PropTypes.string.isRequired,
  }).isRequired,
};

export default connect(mapStateToProps, mapDispatchToProps)(Details);
