import React from "react";
import { Container, Row, Col, Image, Button } from "react-bootstrap";
import Form from "react-bootstrap/Form";
import register from "../../assets/icons/register.png";
import "./register.css";
import { Link } from "react-router-dom";

const Register = () => {
  return (
    <Container fluid bsPrefix="container">
      <Row bsPrefix="row">
        <Col bsPrefix="col">
          <div className="wrapper">
            <h1>Register</h1>
            <p className="text">
              Already have an account? <Link to="/login">Login</Link>
            </p>
            <Form.Control
              bsPrefix="form-control"
              type="text"
              placeholder="First Name"
            />
            <Form.Control
              bsPrefix="form-control"
              type="text"
              placeholder="Last Name"
            />
            <Form.Control
              bsPrefix="form-control"
              type="email"
              placeholder="abc@email.com"
            />
            <Form.Control type="password" placeholder="Password" />
            <Form.Control type="password" placeholder="Confirm Password" />
            <Button>Register</Button>
          </div>
        </Col>
        <Col>
          <Image src={register} bsPrefix="img" />
        </Col>
      </Row>
    </Container>
  );
};
export default Register;
