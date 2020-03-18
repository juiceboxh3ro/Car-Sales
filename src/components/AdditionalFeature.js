import React from 'react';
import { connect } from 'react-redux';

import { buyItem } from '../actions'

const AdditionalFeature = props => {
  return (
    <li>
      <button
        className="button"
        onClick={() => props.buyItem(props.feature.id)}>Add</button>
      {props.feature.name} (+{props.feature.price})
    </li>
  );
};

const mapStateToProps = state => {
  return {
    car: state.car,
  }
}

export default connect(mapStateToProps, { buyItem })(AdditionalFeature);
