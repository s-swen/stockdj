import React from "react";
import { Link } from "react-router-dom";

const Button = ({ text, type, url }) => {
  return (
    <>
      <Link className={`btn ${type}`} to={url}>
        {text}
      </Link>
    </>
  );
};

export default Button;
