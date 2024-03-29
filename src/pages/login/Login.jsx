import React from "react";
import { Container, Row, Col, Image, Button } from "react-bootstrap";
import Form from "react-bootstrap/Form";
import login from "../../assets/icons/login.png";
import "./login.css";

const Login = () => {
  return (
    <Container fluid bsPrefix="container">
      <Row bsPrefix="row">
        <Col bsPrefix="col">
          <Image src={login} />
        </Col>
        <Col bsPrefix="col">
          <div className="wrapper">
            <h1>Sign In</h1>
            <p className="text">
              Don't have an account? <a>Sign Up</a>
            </p>
            <Form.Label>Email Address</Form.Label>
            <Form.Control
              bsPrefix="form-control"
              type="email"
              placeholder="abc@email.com"
            />
            <Form.Label>Password </Form.Label>
            <Form.Control type="password" />
            <p className="text">Forgot your password?</p>
            <Button>Sign in</Button>
          </div>
        </Col>
      </Row>
    </Container>
  );
};

export default Login;
