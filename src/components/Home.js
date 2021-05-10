import React, { useEffect } from 'react';
import PropTypes from 'prop-types';
import { connect, useDispatch } from 'react-redux';
import { changefilter, fetchStock } from '../actions/index';
import CatFilter from './CatFilter';
import Videolist from '../containers/Videolist';

const Home = ({ filter, userData }) => {
  useEffect(() => {
    fetchStock();
  }, []);

  const soccerleagues = userData.map((e) => (
    e.competition.name
  ));
  const filteredLeagues = [...new Set(soccerleagues)];
  const newLeagues = [...filteredLeagues];
  newLeagues.sort();

  const dispatch = useDispatch();

  const handleFilterChange = (filter) => {
    dispatch(changefilter(filter));
  };

  return (
    <div>
      <h1 className="text-center">USE THE DROP DOWN TO PICK YOUR LEAGUE</h1>
      <div>
        <CatFilter
          handleFilterChange={handleFilterChange}
          categories={newLeagues}
          filter={filter}
        />
        <Videolist />
      </div>

    </div>
  );
};

Home.propTypes = {
  userData: PropTypes.string.isRequired,
};

const mapStateToProps = (state) => ({
  userData: state.stock.stock,
  filter: state.catfilter,
  loading: state.stock.loading,
  error: state.stock.error,
});

Home.propTypes = {
  filter: PropTypes.string.isRequired,
};
export default connect(mapStateToProps, null)(Home);
