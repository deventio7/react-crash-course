import React from 'react';
import PropTypes from 'prop-types';

const list = [1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20];

const PureChildComponent = ({ passedInt }) => {
  console.log('Rendering PureChildComponent');
  return (
    <div>
      PureChildComponent<br/>
      THIS COMPONENT RECEIVED: '{ passedInt }'
      {
        list.filter((ele) => {
          return ele % passedInt === 0;
        }).map((filteredNumber, index) => {
          return (<div className="PureChildComponent-filteredListElement" key={index}>
            { filteredNumber }
          </div>)
        })
      }
    </div>
  );
}

PureChildComponent.propTypes = {
  passedInt: PropTypes.number.isRequired
}

export default PureChildComponent;