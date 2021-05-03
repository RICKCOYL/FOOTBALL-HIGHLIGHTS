/* eslint-disable max-len */
/* eslint-disable react/jsx-one-expression-per-line */
/* eslint-disable no-unused-vars */
/* eslint-disable react/forbid-prop-types */
/* eslint-disable no-console */
/* eslint-disable react/no-array-index-key */
/* eslint-disable react/prop-types */
import React, { useEffect } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { changefilter, fetchStock } from '../actions/index';
import CatFilter from './CatFilter';
import Videolist from '../containers/Videolist';

const Home = ({ filter, userData, loading }) => {
  const handleFilterChange = (filter) => {
    changefilter(filter);
  };

  useEffect(() => {
    fetchStock();
  }, []);

  const soccerleagues = userData.map((e) => (
    e.competition.name
  ));

  const newLeagues = [...new Set(soccerleagues)];
  newLeagues.sort();

  const handleClick = () => { };

  return (
    <div>
      <h1 className="text-center">ALL FOOTBALL MATCHES</h1>
      <div>
        <CatFilter categories={newLeagues} filter={filter} handleFilterChange={handleFilterChange} />
        <Videolist handleClick={handleClick} />
      </div>

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

Home.propTypes = {
  filter: PropTypes.string.isRequired,
};
export default connect(mapStateToProps, mapDispatchToProps)(Home);
