import React from "react";

function SimpleInput(props) {
  const { placeholder } = props;
  return (
    <input className="simple-input" type="text" placeholder={placeholder} />
  );
}

export default SimpleInput;
