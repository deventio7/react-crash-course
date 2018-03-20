import React, { Component } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import SampleChildComponentActions from './SampleChildComponentActions';

export class SampleChildComponent extends Component {
  submit = () => {
    this.props.pureComponentTextSetter(this.props.storedText);
  }

  updateInputValue = (event) => {
    this.props.actions.updateStoredText(event.target.value);
  }

  render = () => {
    console.log('Rendering SampleChildComponent');
    return (
      <div>
        SampleChildComponent: { this.props.storedText }<br/>
        <input type="text" onChange={ this.updateInputValue }/>
        <button onClick={ this.submit }>submit</button>
      </div>
    );
  }
}

/* istanbul ignore next */
const mapStateToProps = (state) => {
  return {
    storedText: state.sampleChildSubmit.storedText
  };
}

/* istanbul ignore next */
const mapDispatchToProps = (dispatch) => {
  return {
    actions: bindActionCreators(SampleChildComponentActions, dispatch)
  }
}

SampleChildComponent.propTypes = {
  actions: PropTypes.object.isRequired,
  pureComponentTextSetter: PropTypes.func.isRequired,
  storedText: PropTypes.string.isRequired
}

export default connect(mapStateToProps, mapDispatchToProps)(SampleChildComponent);
