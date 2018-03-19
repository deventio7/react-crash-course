import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';

const PureChildComponent = ({ passedText }) => {
  console.log('Rendering PureChildComponent');
  return (
    <div>
      PureChildComponent<br/>
      THIS COMPONENT RECEIVED: '{ passedText }'
    </div>
  );
}

PureChildComponent.propTypes = {
  passedText: PropTypes.string.isRequired
}

const mapStateToProps = (state) => {
  return {
    passedText: state.sampleChildSubmit.passedText
  };
}

export default connect(mapStateToProps)(PureChildComponent);