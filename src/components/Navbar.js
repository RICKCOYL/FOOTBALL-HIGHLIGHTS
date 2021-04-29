/* eslint-disable no-console */
/* eslint-disable react/prop-types */
/* eslint-disable react/no-array-index-key */
import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { fetchStock } from '../actions/index';

const Navbar = ({ userData, fetchStock }) => {
  const leagues = userData.map((e) => (
    e.competition.name
  ));

  const newLeagues = [...new Set(leagues)];
  newLeagues.sort();
  useEffect(() => {
    fetchStock();
  }, []);
  return (
    <nav className="navbar navbar-light bg-light">
      <div className="container-fluid">
        <a href="/" className="navbar-brand">HOME</a>

        <form className="d-flex">
          <select name="" id="">
            {['ALL LEAGUES', ...newLeagues].map((e, i) => (
              <option key={i}>{e}</option>
            ))}
          </select>
          <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search" />
          <button className="btn btn-outline-success" type="submit">Search</button>
        </form>
      </div>
    </nav>
  );
};
const mapStateToProps = (state) => ({
  userData: state.stock.stock,
  loading: state.stock.loading,
  error: state.stock.error,
});

const mapDispatchToProps = (dispatch) => ({
  fetchStock: () => dispatch(fetchStock()),
});

Navbar.propTypes = {
  fetchStock: PropTypes.func.isRequired,
  userData: PropTypes.shape({
    title: PropTypes.string.isRequired,
    stock: PropTypes.string.isRequired,
  }).isRequired,
};

export default connect(mapStateToProps, mapDispatchToProps)(Navbar);
