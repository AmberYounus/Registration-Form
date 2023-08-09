import React, { useState } from "react";
import "./App.css";

function App() {
  const [values, setValues] = useState({
    firstName: "",
    lastName: "",
    email: "",
    password: "",
    cpassword: "",
  });
  const [submitted, setSubmitted] = useState(false);
  const [valid, setValid] = useState(false);

  const handleFirstNameInputChange = (e) => {
    setValues({ ...values, firstName: e.target.value });
  };
  const handleLastNameInputChange = (e) => {
    setValues({ ...values, lastName: e.target.value });
  };
  const handleEmailInputChange = (e) => {
    setValues({ ...values, email: e.target.value });
  };
  const handlePasswordInputChange = (e) => {
    setValues({ ...values, password: e.target.value });
  };
  const handleConfirmPasswordInputChange = (e) => {
    setValues({ ...values, cpassword: e.target.value });
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    if (
      values.firstName &&
      values.lastName &&
      values.email &&
      values.password &&
      values.cpassword && (values.password === values.cpassword)
    ) {
      setValid(true);
    }
 
    setSubmitted(true);
  };
  setTimeout(() => {
    setValid(false)
  }, 4000);
  return (
    <>
      <div className="form-container  ">
        <form action="" onSubmit={handleSubmit} className="register-form ">
          <h1 className="text-center text-white bg-secondary py-2 "> Registration Form</h1>
          {submitted && valid ? (
            <div className="bg-success text-white py-3 px-3  fw-bold">Successfull ! Thank you for registration</div>
          ) : null}

          <div className="mb-3 my-3 mx-5 ">
            <label htmlFor="exampleInputfirstName" className="form-label">
              First Name
            </label>
            <input
              type="text"
              className="form-control"
              id="exampleInputfirstName"
              onChange={handleFirstNameInputChange}
              value={values.firstName}      
              placeholder="First Name"
              name="firstName"
            />
            {submitted && !values.firstName ? (
              <span>please enter first name</span>
            ) : null}
          </div>

          <div className="mb-3 mx-5  mx-5   ">
            <label htmlFor="exampleInputlastName" className="form-label">
              Last Name{" "}
            </label>
            <input
              type="text"
              className="form-control"
              id="exampleInputlastName"
              onChange={handleLastNameInputChange}
              value={values.lastName}            
              placeholder="Last Name"
              name="lastName"
            />
            {submitted && !values.lastName ? (
              <span>please enter last name</span>
            ) : null}
          </div>

          <div className="mb-3 mx-5 ">
            <label htmlFor="exampleInputEmail" className="form-label">
              Email{" "}
            </label>
            <input
              type="email"
              className="form-control"
              id="exampleInputEmail"
              onChange={handleEmailInputChange}
              value={values.email}
              placeholder="Email"
              name="email"
            />
            {submitted && !values.email ? (
              <span>please enter Email address</span>
            ) : null}
          </div>

          <div className="mb-3 mx-5 ">
            <label htmlFor="password" className="form-label">
              Password
            </label>
            <input
              type="password"
              className="form-control"
              id="password"
              onChange={handlePasswordInputChange}
              value={values.password}
              placeholder="Password"
              name="password"
            />
            {submitted && !values.password ? (
              <span>please enter password</span>
            ) : null}
          </div>

          <div className="mb-3 mx-5 ">
            <label htmlFor="cpassword" className="form-label">
              Confirm Password
            </label>
            <input
              type="password"
              className="form-control"
              id="cpassword"
              onChange={handleConfirmPasswordInputChange}
              value={values.cpassword}
              placeholder="Confirm Password"
              name="password"
            />
            {submitted && !values.cpassword ? (
              <span>please enter confirm password</span>
            ) : null}
          </div>

          <button type="submit" className="btn btn-success my-3 mx-5 btn-lg">
            Register
          </button>

        </form>
      </div>
    </>
  );
}

export default App;
