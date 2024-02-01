import React, { useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { Navigate } from "react-router-dom";

import { Container, Row, Col, Button } from "react-bootstrap";
import Form from "react-bootstrap/Form";
const MultiStepForm = () => {
  const [fromData, setFormData] = useState({
    step: 1,
    firstName: "",
    lastName: "",
    gender: "",
    email: "",
    password: "",
  });
  const { step, firstName, lastName, gender, email, password } = fromData;
  const [submitted, setSubmitted] = useState(false);
  const [errors, setErrors] = useState({});

  // validation for form input

  const findFormErrors = () => {
    const { firstName, lastName, gender, email, password } = fromData;
    const newErrors = {};
    if (step === 1) {
      if (!firstName || firstName === "")
        newErrors.firstName = "cannot be blank";
      else if (firstName.length > 15)
        newErrors.firstName = "first name is too long";

      if (!lastName || lastName === "") newErrors.lastName = "cannot be blank";
      else if (lastName.length > 15)
        newErrors.lastName = "last name is too long";
    } else if (step === 2) {
      if (!email || email === "") newErrors.email = "cannot be blank";
      else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
        newErrors.email = "Invalid email format!";
      }
      if (!password || password === "") newErrors.password = "cannot be blank";
      else if (password.length < 8)
        password.city = " password must be atleast 8 char";
    } else {
      if (!gender) newErrors.gender = "please select your gender";
    }
    return newErrors;
  };

  const nextStep = () => {
    const newErrors = findFormErrors();
    if (Object.keys(newErrors).length > 0) {
      setErrors(newErrors); // Corrected setErrorss to setErrors
    } else {
      console.log("Moving to next step with state:", FormData);
      setFormData((prevState) => ({
        ...prevState,
        step: prevState.step + 1,
      }));
    }
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
    setSubmitted(true);
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
            isInvalid={!!errors.firstName}
          />
          <Form.Control.Feedback type="invalid">
            {errors.firstName}
          </Form.Control.Feedback>
        </Form.Group>
        <Form.Group controlId="lastName">
          <Form.Label>Last Name:</Form.Label>
          <Form.Control
            type="text"
            name="lastName"
            value={lastName}
            onChange={handleChange}
            isInvalid={!!errors.lastName}
          />
          <Form.Control.Feedback type="invalid">
            {errors.lastName}
          </Form.Control.Feedback>
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
            isInvalid={!!errors.email}
          />
          <Form.Control.Feedback type="invalid">
            {errors.email}
          </Form.Control.Feedback>
        </Form.Group>
        <Form.Group controlId="password">
          <Form.Label>Password:</Form.Label>
          <Form.Control
            type="password"
            name="password"
            value={password}
            onChange={handleChange}
            isInvalid={!!errors.password}
          />
          <Form.Control.Feedback type="invalid">
            {errors.password}
          </Form.Control.Feedback>
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
      <Form>
        <Form.Group controlId="gender">
          <Form.Label>Gender:</Form.Label>
          <Form.Check
            type="radio"
            label="Male"
            name="gender"
            value="male"
            checked={gender === "male"}
            onChange={handleChange}
            isInvalid={!!errors.gender}
          />
          <Form.Check
            type="radio"
            label="Female"
            name="gender"
            value="female"
            checked={gender === "female"}
            onChange={handleChange}
            isInvalid={!!errors.gender}
          />
          <Form.Check
            type="radio"
            label="Other"
            name="gender"
            value="other"
            checked={gender === "other"}
            onChange={handleChange}
            isInvalid={!!errors.gender}
          />
        </Form.Group>
        <Form.Control.Feedback type="invalid">
          {errors.gender}
        </Form.Control.Feedback>
        <br />
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
    4: (
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
  if (submitted) {
    return <Navigate to="/thankyou" />;
  }
  return (
    <Container>
      <Row className="mt-5">
        <Col md={{ span: 8, offset: 2 }} lg={{ span: 6, offset: 3 }}>
          <h1>Multi Step Form</h1>
          {formComponent[step]}
        </Col>
      </Row>
    </Container>
  );
};
export default MultiStepForm;
