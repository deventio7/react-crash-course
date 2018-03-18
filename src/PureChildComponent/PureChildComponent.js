import React from 'react';
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

PureChildComponent.defaultProps = {
  passedText: 'nothing.'
}

PureChildComponent.propTypes = {
  passedText: PropTypes.string
}

export default PureChildComponent;