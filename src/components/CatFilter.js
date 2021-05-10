import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { fetchStock } from '../actions/index';

const CatFilter = ({ handleFilterChange, categories }) => (
  <div className="d-flex justify-content-center my-5">
    <form className="d-flex">
      <select name="" id="" onChange={(e) => handleFilterChange(e.target.value)}>
        {categories.map((e) => (
          <option key={e}>{e}</option>
        ))}
      </select>
    </form>
  </div>
);

CatFilter.propTypes = {
  handleFilterChange: PropTypes.func.isRequired,
  categories: PropTypes.arrayOf(PropTypes.string).isRequired,
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
