import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import PropTypes from 'prop-types';
import SampleChildComponentActions from './SampleChildComponentActions';

class SampleChildComponent extends Component {
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

const mapStateToProps = (state) => {
  return {
    storedText: state.sampleChildSubmit.storedText
  };
}

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
