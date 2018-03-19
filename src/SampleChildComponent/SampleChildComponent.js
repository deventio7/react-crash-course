import React, { Component } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import SampleChildComponentActions from './SampleChildComponentActions';

export class SampleChildComponent extends Component {
  constructor() {
    super();
    this.state = {
      inputText: ''
    }
  };

  submit = () => {
    this.props.actions.submit(this.state.inputText);
  }

  updateInputValue = (event) => {
    this.setState({
      inputText: event.target.value
    });
  }

  render = () => {
    console.log('Rendering SampleChildComponent');
    return (
      <div>
        SampleChildComponent<br/>
        <input type="text" onChange={ this.updateInputValue }/>
        <button onClick={ this.submit }>submit</button>
      </div>
    );
  }
}

/* istanbul ignore next */
const mapDispatchToProps = (dispatch) => {
  return {
    actions: bindActionCreators(SampleChildComponentActions, dispatch)
  }
}

SampleChildComponent.propTypes = {
  actions: PropTypes.object.isRequired
}

export default connect(undefined, mapDispatchToProps)(SampleChildComponent);
