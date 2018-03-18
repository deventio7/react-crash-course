import React, { Component } from 'react';
import PropTypes from 'prop-types';

class SampleChildComponent extends Component {
  constructor() {
    super();
    this.state = {
      inputText: ''
    }
  };

  static defaultProps = {
    someOtherProp: { foo: 'bar' }
  }

  submit = () => {
    this.props.pureComponentTextSetter(this.state.inputText);
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
        <button onClick={ this.submit.bind(this) }>submit</button>
      </div>
    );
  }
}

SampleChildComponent.propTypes = {
  pureComponentTextSetter: PropTypes.func.isRequired,
  someOtherProp: PropTypes.any
}
export default SampleChildComponent;
