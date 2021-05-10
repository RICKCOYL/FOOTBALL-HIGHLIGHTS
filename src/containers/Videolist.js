/* eslint-disable react/no-unused-prop-types */
/* eslint-disable no-undef */
/* eslint-disable max-len */
/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
/* eslint-disable no-console */
import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import { fetchStock } from '../actions/index';
import ball from '../images/Soccer-ball.gif';

const Videolist = ({
  userData, error, loading, fetchStock, filter,
}) => {
  useEffect(() => {
    fetchStock();
  }, []);

  const leagues = userData.map((e) => (
    e.competition.name
  ));

  const homearr = [];
  const homeDisplayarr = [];

  const homeDisplay = userData.map((e) => homearr.push(e));

  homearr.filter((e) => (filter === e.competition.name ? homeDisplayarr.push(e) : 'Nothing'));

  return (
    <div className="all-matches grid shadow">
      {loading && <div><img id="loader" src={ball} alt="" /></div>}
      {error || homeDisplayarr.map((e) => (
        <div key={e.title} className="card">
          <Link to={`/details/${e.title}`}>
            <div><img src={e.thumbnail} className="card-img-top" alt="" /></div>

            <div className="card-body">
              <p>{e.competition.name}</p>
              <h4 className="card-text">{e.title}</h4>
            </div>
          </Link>
        </div>

      ))}
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

Videolist.defaultProps = {

};

Videolist.propTypes = {
  fetchStock: PropTypes.func.isRequired,
  error: PropTypes.string.isRequired,
  loading: PropTypes.bool.isRequired,
  filter: PropTypes.string.isRequired,
};
export default connect(mapStateToProps, mapDispatchToProps)(Videolist);
