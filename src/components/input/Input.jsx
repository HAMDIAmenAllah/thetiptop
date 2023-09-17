import React, { useState } from "react";

const Input = ({ label, name, onChange, value }) => {
  const [inputValue, setInputValue] = useState(value || "");

  return (
    <div>
      <label htmlFor={name}>{label}</label>
      <input
        type="text"
        id={name}
        value={inputValue}
        onChange={(e) => setInputValue(e.target.value)}
      />
    </div>
  );
};

export default Input;