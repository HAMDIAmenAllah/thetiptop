import React from "react";

const Input = ({
  label,
  value,
  handleChange,
  placeholder,
  iconInput,
  classNameIcon = "",
  className = "",
  ...restProps
}) => {
  return (
    <section className="flex flex-col items-center space-y-3 lg:items-start">
      <label>{label}</label>
      <input
        placeholder={placeholder}
        value={value}
        onChange={handleChange}
        {...restProps}
        className={`${className}`}
      />
    </section>
  );
};

export default Input;
