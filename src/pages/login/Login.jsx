import { React, useState, useContext } from "react";
import { Container, Row, Col, Image, Button } from "react-bootstrap";
import Form from "react-bootstrap/Form";
import login from "../../assets/icons/login.png";
import "./login.css";
import { Link } from "react-router-dom";
import AuthContext from "../../context/authProvider";

const Login = () => {
  const { setAuth } = useContext(AuthContext);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const [success, setSuccess] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!email || !password) {
      setError("All fields are required");
      return;
    }

    const formdata = new FormData();
    formdata.append("email", email);
    formdata.append("password", password);

    const requestOptions = {
      method: "POST",
      body: formdata,
      redirect: "follow",
    };

    try {
      const response = await fetch(
        "http://139.59.168.208:1337/login",
        requestOptions
      );
      const accessToken = await response.text();
      setAuth({ email, password, accessToken });
      if (response.status === 401) {
        setError("Invalid email or password");
        setSuccess(false);
      } else if (response.status === 200 || 201) {
        setError("");
        setSuccess(true);
        setEmail("");
        setPassword("");
      } else {
        setError("Login failed");
        setSuccess(false);
      }
    } catch (error) {
      console.log("error", error);
    }
  };

  return (
    <Container fluid bsPrefix="container">
      <Row bsPrefix="row">
        <Col bsPrefix="col">
          <Image src={login} />
        </Col>
        <Col bsPrefix="col">
          <div className="wrapper">
            <h1>Login</h1>
            <p className="text">
              Don't have an account? <Link to="/register">Register</Link>
            </p>
            <Form onSubmit={handleSubmit}>
              <p className="error">{error}</p>
              <Form.Label>Email Address</Form.Label>
              <Form.Control
                bsPrefix="form-control"
                type="email"
                placeholder="abc@email.com"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
              <Form.Label>Password </Form.Label>
              <Form.Control
                type="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
              />
              // Add a link to the Forgot Password page
              <Link className="text">Forgot your password?</Link>
              <Button type="submit">Sign in</Button>
            </Form>
          </div>
        </Col>
      </Row>
    </Container>
  );
};

export default Login;
