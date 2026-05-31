import React, { useState } from "react";
import axios from "axios";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSpinner } from "@fortawesome/free-solid-svg-icons";

const Register = () => {
  const [formData, setFormData] = useState({
    username: "",
    email: "",
    password: "",
  });
  const [success, setSuccess] = useState(false);
  const [errors, setErrors] = useState({});
  const [loading, setLoading] = useState(false);
  const handleChange = (e) => {
    e.preventDefault();
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };
  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    try {
      const response = await axios.post(
        "http://127.0.0.1:8000/api/v1/register/",
        formData,
      );
      setErrors({});
      setSuccess(true);
      console.log("response data =====>", response.data);
      console.log("Register Success");
    } catch (error) {
      setErrors(error.response.data);
      console.log("Something went wrong", error.response.data);
    } finally {
      setLoading(false);
    }
  };
  return (
    <>
      <div className="container">
        <div className="row justify-content-center">
          <div className="col-md-6 bg-light-dark p-5 rounded">
            <h3 className="text-light text-center mb-4">Create an Account</h3>
            <form onSubmit={handleSubmit}>
              <div className="mb-3">
                <input
                  type="text"
                  className="form-control"
                  placeholder="Enter username"
                  name="username"
                  value={formData.username}
                  onChange={handleChange}
                />
                {errors.username && (
                  <small>
                    <div className="text-danger">{errors.username[0]}</div>
                  </small>
                )}
              </div>
              <div className="mb-3">
                <input
                  type="email"
                  className="form-control"
                  placeholder="Enter email address"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                />
                {errors.email && (
                  <small>
                    <div className="text-danger">{errors.email[0]}</div>
                  </small>
                )}
              </div>
              <div className="mb-3">
                <input
                  type="password"
                  className="form-control"
                  placeholder="Set password"
                  name="password"
                  value={formData.password}
                  onChange={handleChange}
                />
                {errors.password && (
                  <small>
                    <div className="text-danger">{errors.password[0]}</div>
                  </small>
                )}
              </div>
              {success && (
                <div className="alert alert-success">
                  You have successfully registered!
                </div>
              )}
              {loading ? (
                <button
                  type="submit"
                  className="btn btn-info d-block mx-auto"
                  disabled
                >
                  <FontAwesomeIcon icon={faSpinner} spin />
                  &nbsp; Please wait
                </button>
              ) : (
                <button type="submit" className="btn btn-info d-block mx-auto">
                  Register
                </button>
              )}
            </form>
          </div>
        </div>
      </div>
    </>
  );
};

export default Register;
