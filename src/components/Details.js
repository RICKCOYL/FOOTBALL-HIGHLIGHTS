/* eslint-disable react/no-danger */
import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import showdown from 'showdown';
import { useParams } from 'react-router';
import { fetchStock } from '../actions/index';
import ball from '../images/Soccer-ball.gif';

const Details = ({
  fetchStock, userData, loading,
}) => {
  const { title } = useParams();

  useEffect(() => {
    fetchStock();
  }, []);

  const arrDetails = [];
  const converter = new showdown.Converter();

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

  details.filter((e) => (title === e.title ? arrDetails.push({
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

  return (
    <>
      {loading && <div><img id="loader" src={ball} alt="" /></div>}
      {arrDetails.map((e) => (
        <div key={title}>
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
                <a href={e.competition_url} className="btn btn-info" target="_blank" rel="noreferrer">TABLE</a>
              </h4>
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

Details.propTypes = {
  userData: PropTypes.string.isRequired,
  loading: PropTypes.bool.isRequired,
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
};

export default connect(mapStateToProps, mapDispatchToProps)(Details);
