import React, { useState } from "react";

import './styles.css'

const Input = (props) => {
  const [text, setText] = useState('');

  const onKeyDown = (e) => {
    if (e.key === 'Enter') {
      props.onKeyDown(text)
    }
  }

  return (
    <div>
      {props.label && <label>{props.label}</label>}
      <input
        placeholder={props.placeholder}
        className="components-input"
        type="text"
        value={text}
        onChange={e => setText(e.target.value)}
        onKeyDown={onKeyDown}
      />
    </div>
  );
}

export default Input;