/* eslint-disable react/no-danger */
/* eslint-disable react/jsx-key */
/* eslint-disable prefer-const */
/* eslint-disable no-console */
/* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */
import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import showdown from 'showdown';
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
  let converter = new showdown.Converter();

  const details = userData.map((e) => ({
    title: e.title,
    embed: converter.makeHtml(e.embed),
    url: e.url,
    thumbnail: e.thumbnail,
    date: e.date,
    side1: e.side1.name,
    side2: e.side2.name,
    videos: e.videos.map((e) => e.embed),
    competition: e.competition.name,
    competition_url: e.competition.url,
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
    competition: e.competition,
    competition_url: e.competition_url,
  }) : 'nothing'));

  console.log(arrDetails);

  return (
    <>
      {arrDetails.map((e) => (
        <div>
          <div className="d-flex justify-content-between">
            <div className="">
              <h1>
                {title}
              </h1>
            </div>
            <div>
              <h4 className="comp-name">
                {e.competition}
                {' '}
                :
                <a href={e.competition_url} className="btn btn-info" target="_blank" rel="noreferrer">live scores</a>
              </h4>
            </div>
            <div>
              <a href={e.url} className="btn btn-primary" target="_blank" rel="noreferrer">HIGHLIGHTS</a>
            </div>

          </div>

          <div>
            <div id="embed" dangerouslySetInnerHTML={{ __html: e.embed }} />
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
