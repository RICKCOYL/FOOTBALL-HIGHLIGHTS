/* eslint-disable react/jsx-key */
/* eslint-disable prefer-const */
/* eslint-disable no-console */
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

  let arrDetails = [];

  const details = userData.map((e) => ({
    title: e.title,
    embed: e.embed,
    url: e.url,
    thumbnail: e.thumbnail,
    date: e.date,
    side1: e.side1.name,
    side2: e.side2.name,
    videos: e.videos.map((e) => e.embed),
  }));

  const filterDetails = details.filter((e) => (title === e.title ? arrDetails.push({
    title: e.title,
    embed: e.embed,
    url: e.url,
    thumbnail: e.thumbnail,
    date: e.date,
    side1: e.side1,
    side2: e.side2,
    videos: e.videos,
  }) : 'nothing'));

  console.log(arrDetails);

  return (
    <>
      {arrDetails.map((e) => (

        <div className="d-flex justify-content-between">
          <div className="">
            <h1>
              {title}
            </h1>
          </div>
          <div>
            <a href={e.url} className="btn btn-primary" target="_blank" rel="noreferrer">HIGHLIGHTS</a>
          </div>
        </div>

      ))}

    </>
  );
};

const mapStateToProps = (state, ownProps) => ({
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
