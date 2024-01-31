import React, { useState } from "react";
import { Container, Row, Col } from "react-bootstrap";
import Form from "react-bootstrap/Form";
const MultiStepForm = () => {
  const [fromData, setFormData] = useState({
    step: 1,
    firstName: "",
    lastName: "",
    email: "",
    password: "",
  });
  const { step, firstName, lastName, email, password } = fromData;
  const nextStep = () => {
    setFormData((prevState) => ({
      ...prevState,
      step: prevState.step + 1,
    }));
  };

  const prevStep = () => {
    setFormData((prevState) => ({
      ...prevState,
      step: prevState.step - 1,
    }));
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    localStorage.setItem("formData", JSON.stringify(fromData));
    console.log("Email sent successfully!");
  };
  const formComponent = {
    1: (
      <div>
        <label>First Name:</label>
        <input
          className="form-group"
          type="text"
          name="firstName"
          value={firstName}
          onChange={handleChange}
        />
        <br />
        <label>Last Name:</label>
        <input
          type="text"
          name="lastName"
          value={lastName}
          onChange={handleChange}
        />
        <br />
        <button onClick={nextStep}>Next</button>
      </div>
    ),
    2: (
      <div>
        <label>Email:</label>
        <input
          type="email"
          name="email"
          value={email}
          onChange={handleChange}
        />
        <br />
        <label>Password:</label>
        <input
          type="password"
          name="password"
          value={password}
          onChange={handleChange}
        />
        <br />
        <button onClick={prevStep}>Previous</button>
        <button onClick={nextStep}>Next</button>
      </div>
    ),
    3: (
      <div>
        <h2>Summary</h2>
        <p>First Name: {firstName}</p>
        <p>Last Name: {lastName}</p>
        <p>Email: {email}</p>
        <p>Password: {password}</p>
        <button onClick={prevStep}>Previous</button>
        <button onClick={handleSubmit}>submit</button>
      </div>
    ),
  };
  return (
    <div>
      <h1>Multi Step Form</h1>
      {formComponent[step]}
    </div>
  );
};
export default MultiStepForm;
