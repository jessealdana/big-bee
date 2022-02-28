import React from "react";

class Input extends React.Component {
    state = {message: '0'};
  
    updateNumber = (e) => {
      const val = e.target.value;
      // If the current value passes the validity test then apply that to state
      if (e.target.validity.valid) this.setState({message: e.target.value});
      // If the current val is just the negation sign, or it's been provided an empty string,
      // then apply that value to state - we still have to validate this input before processing
      // it to some other component or data structure, but it frees up our input the way a user
      // would expect to interact with this component
      else if (val === '' || val === '-') this.setState({message: val});
    }
  
    render() {
      return (
        <input
          type='tel'
          value={this.state.message}
          onChange={this.updateNumber}
          pattern="^-?[0-9]\d*\.?\d*$"
        />
      );
    }
  }

  export default Input;
  
  // ReactDOM.render(<Input />, document.getElementById('main'));