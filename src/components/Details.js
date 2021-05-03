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

  const details = userData.map((e) => ({
    thumbnail: e.thumbnail,
    title: e.title,
  }));

  let arrDetails = [];

  const filterDetails = details.filter((e, i, a) => (title === e.title ? arrDetails.push({
    thumnail: e.thumbnail,
  }) : 'nothing'));

  console.log(arrDetails);

  return (
    <div>
      <h1>
        {title}
      </h1>

      <div>
        {arrDetails.map((e) => (
          <div>
            <div>
              <img src={e.thumnail} alt="" />
            </div>
          </div>
        ))}
      </div>
    </div>
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
