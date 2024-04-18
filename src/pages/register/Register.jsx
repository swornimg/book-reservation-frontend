import React, { useState, useEffectz } from "react";
import { Container, Row, Col, Image, Button } from "react-bootstrap";
import Form from "react-bootstrap/Form";
import register from "../../assets/icons/register.png";
import "./register.css";
import { Link } from "react-router-dom";

const Register = () => {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [validMatch, setValidMatch] = useState(true);
  const [error, setError] = useState("");
  const [success, setSuccess] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!firstName || !lastName || !email || !password || !confirmPassword) {
      setError("All fields are required");
      return;
    } else if (!validMatch) {
      setError("Passwords do not match");
      return;
    }
    console.log(validMatch);
    const formdata = new FormData();
    formdata.append("email", email);
    formdata.append("first_name", firstName);
    formdata.append("last_name", lastName);
    formdata.append("password", password);

    const requestOptions = {
      method: "POST",
      body: formdata,
      redirect: "follow",
    };

    fetch("http://139.59.168.208:1337/signup", requestOptions)
      .then((response) => {
        response.json();
        if (response.status === 400) {
          setError("Email already exists");
          setSuccess(false);
        } else if (response.status === 200 || 201) {
          setError("");
          setSuccess(true);
          setFirstName("");
          setLastName("");
          setEmail("");
          setPassword("");
          setConfirmPassword("");
        } else {
          setError("An error occurred");
          setSuccess(false);
        }
      })
      .then((result) => {
        console.log(result);
        if (result.error) {
          setError(result.error);
        } else {
          setError("");
        }
      })
      .catch((error) => console.log("error", error));
  };

  return (
    <Container fluid bsPrefix="container">
      {success ? (
        <Row>
          <p>Registration Successful</p>
          {/* <Link to={login}>Sign in</Link>{" "} */}
        </Row>
      ) : (
        <section>
          <p className="error">{error}</p>
          <Row bsPrefix="row">
            <Col bsPrefix="col">
              <div className="wrapper">
                <h1>Sign Up</h1>
                <p className="text">
                  Already have an account? <Link>Sign in</Link>
                </p>
                <Form onSubmit={handleSubmit}>
                  <Form.Control
                    bsPrefix="form-control"
                    type="text"
                    placeholder="First Name"
                    value={firstName}
                    onChange={(e) => setFirstName(e.target.value)}
                  />
                  <Form.Control
                    bsPrefix="form-control"
                    type="text"
                    placeholder="Last Name"
                    value={lastName}
                    onChange={(e) => setLastName(e.target.value)}
                  />
                  <Form.Control
                    bsPrefix="form-control"
                    type="email"
                    placeholder="abc@email.com"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                  />
                  <Form.Control
                    type="password"
                    placeholder="Password"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                  />
                  <Form.Control
                    type="password"
                    placeholder="Confirm Password"
                    value={confirmPassword}
                    required
                    onChange={(e) => {
                      setConfirmPassword(e.target.value);
                      setValidMatch(e.target.value === password);
                    }}
                  />
                  <Button type="submit">Sign Up</Button>
                </Form>
              </div>
            </Col>
            <Col>
              <Image src={register} bsPrefix="img" />
            </Col>
          </Row>
        </section>
      )}
    </Container>
  );
};
export default Register;
