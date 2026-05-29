import React from "react";

const Button = ({ text, type }) => {
  return (
    <>
      <a href="#" className={`btn ${type}`}>
        {text}
      </a>
    </>
  );
};

export default Button;
