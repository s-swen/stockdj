import React, { useContext } from "react";
import Button from "./Button";
import { Link, useNavigate } from "react-router-dom";
import { AuthContext } from "../AuthProvider";

const Header = () => {
  const { isLoggedIn, setIsLoggedIn } = useContext(AuthContext);
  const navigate = useNavigate();
  const handleClick = () => {
    localStorage.removeItem("accessToken");
    localStorage.removeItem("refreshToken");
    setIsLoggedIn(false);
    navigate("/login");
  };
  return (
    <>
      <nav className="navbar container pt-3 pb-3 align-items-start">
        <Link to="/" className="navbar-brand text-light">
          Stock Prediction Portal
        </Link>
        <div>
          {isLoggedIn ? (
            <button className="btn btn-danger" onClick={handleClick}>
              Logout
            </button>
          ) : (
            <>
              <Button text={"Login"} type={"btn-outline-info"} url="/login" />
              &nbsp;
              <Button text={"Register"} type={"btn-info"} url="/register" />
            </>
          )}
        </div>
      </nav>
    </>
  );
};

export default Header;
