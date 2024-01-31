import React, { useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { Container, Row, Col, Button } from "react-bootstrap";
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
    setFormData({});
  };
  const formComponent = {
    1: (
      <Form>
        <Form.Group controlId="firstName">
          <Form.Label>First Name:</Form.Label>
          <Form.Control
            type="text"
            name="firstName"
            value={firstName}
            onChange={handleChange}
          />
        </Form.Group>
        <Form.Group controlId="lastName">
          <Form.Label>Last Name:</Form.Label>
          <Form.Control
            type="text"
            name="lastName"
            value={lastName}
            onChange={handleChange}
          />
        </Form.Group>
        <br></br>
        <Button variant="primary" onClick={nextStep}>
          Next
        </Button>{" "}
      </Form>
    ),
    2: (
      <Form>
        <Form.Group controlId="email">
          <Form.Label>Email:</Form.Label>
          <Form.Control
            type="email"
            name="email"
            value={email}
            onChange={handleChange}
          />
        </Form.Group>
        <Form.Group controlId="password">
          <Form.Label>Password:</Form.Label>
          <Form.Control
            type="password"
            name="password"
            value={password}
            onChange={handleChange}
          />
        </Form.Group>
        <br></br>
        <Form.Group>
          <Button variant="secondary" onClick={prevStep}>
            Previous
          </Button>

          <Button variant="primary" onClick={nextStep}>
            Next
          </Button>
        </Form.Group>
      </Form>
    ),
    3: (
      <div>
        <h2>Summary</h2>
        <p>First Name: {firstName}</p>
        <p>Last Name: {lastName}</p>
        <p>Email: {email}</p>
        <p>Password: {password}</p>
        <Button variant="secondary" onClick={prevStep}>
          Previous
        </Button>
        <Button variant="primary" onClick={handleSubmit}>
          submit
        </Button>
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
