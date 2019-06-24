// import React, { useState } from "react";
import React, { Component } from "react";

class Input extends Component {
  constructor(props) {
    super(props);

    this.state = {
      value: ""
    };

    this.onChange = this.onChange.bind(this);
    this.onKeyDown = this.onKeyDown.bind(this);
  }

  onChange(e) {
    this.setState({
      value: e.target.value
    });
  }

  onKeyDown(e) {
      if(e.key === 'Enter') {
        this.props.onKeyDown(this.state.value)
    }
  }

  render() {
    const { value } = this.state;
    return (
      <div>
        <label>Search for songs</label>
        <input
          type="text"
          value={value}
          onChange={this.onChange}
          onKeyDown={this.onKeyDown}
        />
      </div>
    );
  }
}
export default Input;


// Approach using react hooks To be investigated
// import { useState } from 'react';

// function Input() {
//     const [input, setInput] = useState(''); // '' is the initial state value
    
//     return (
//       <div>
//         <label>Please specify:</label>
//         <input
//           value={input}
//           onInput={e => setInput(e.target.value)}
//           onKeyDown={}
//         />
//       </div>
//     );
// }

// export default Input;