/* eslint-disable no-unused-vars */
/* eslint-disable no-console */
/* eslint-disable react/no-array-index-key */
/* eslint-disable react/prop-types */
import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { fetchStock } from '../actions/index';

const CatFilter = ({ userData, handleFilterChange }) => {
  const leagues = userData.map((e) => (
    e.competition.name
  ));

  const newLeagues = [...new Set(leagues)];
  newLeagues.sort();

  return (
    <div>
      <form className="d-flex">
        <select name="" id="" onChange={(e) => handleFilterChange(e.target.value)}>
          {['ALL LEAGUES', ...newLeagues].map((e) => (
            <option key={e}>{e}</option>
          ))}
        </select>
      </form>
    </div>
  );
};

CatFilter.propTypes = {
  userData: PropTypes.shape({
    title: PropTypes.string.isRequired,
    stock: PropTypes.string.isRequired,
  }).isRequired,
};

const mapStateToProps = (state) => ({
  userData: state.stock.stock,
  loading: state.stock.loading,
  error: state.stock.error,
});

const mapDispatchToProps = (dispatch) => ({
  fetchStock: () => dispatch(fetchStock()),
});

export default connect(mapStateToProps, mapDispatchToProps)(CatFilter);
