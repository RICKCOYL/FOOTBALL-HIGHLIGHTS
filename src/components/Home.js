/* eslint-disable react/no-array-index-key */
/* eslint-disable react/prop-types */
/* eslint-disable no-console */
import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { fetchStock } from '../actions/index';

const Home = ({
  userData, error, loading, fetchStock,
}) => {
  useEffect(() => {
    fetchStock();
  }, []);
  console.log(userData, error, loading);
  return (
    <div>
      <h1>ALL FOOTBALL MATCHES</h1>
      <div className="all-matches grid shadow">
        {loading && <div>loading...</div>}
        {error || userData.map((e, i) => (
          <div key={i} className="card">
            <div><img src={e.thumbnail} className="card-img-top" alt="" /></div>
            <div className="card-body">
              <p>{e.competition.name}</p>
              <h4 className="card-text">{e.title}</h4>
            </div>
          </div>

        ))}
      </div>
    </div>
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

Home.propTypes = {
  fetchStock: PropTypes.func.isRequired,
  userData: PropTypes.shape({
    title: PropTypes.string.isRequired,
    stock: PropTypes.string.isRequired,
  }).isRequired,
};
export default connect(mapStateToProps, mapDispatchToProps)(Home);
