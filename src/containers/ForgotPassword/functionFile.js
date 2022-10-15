import React, { useState } from "react";

export function Input(props) {
  const [email, setEmail] = useState(null);
  const getInputValue = (e) => {
    setEmail(e.target.value);
    props.Pass(email);
  };
  return (
    <input
      type="text"
      name="email"
      id="email"
      placeholder="Email"
      onChange={getInputValue}
      autoComplete="off"
    />
  );
}
