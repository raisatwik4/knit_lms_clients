import React from 'react';
import { Form, Button } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import Signup from './Signup';
import './Login.css';

function LoginForm() {
  return (
    <div className="login" >
    <Form >
      <Form.Group controlId="formBasicEmail">
        <Form.Label>Email address</Form.Label>
        <Form.Control type="email" placeholder="Enter email" />
        <Form.Text className="text-muted">
          We'll never share your email with anyone else.
        </Form.Text>
      </Form.Group>

      <Form.Group controlId="formBasicPassword">
        <Form.Label>Password</Form.Label>
        <Form.Control type="password" placeholder="Password" />
      </Form.Group>
      <Form.Group controlId="formBasicCheckbox">
        
      </Form.Group>
      <div className="d-grid gap-2 mt-5">
      <Button variant="primary" size="md">
        Login
      </Button> 
    </div>
    <div className="mt-2">
        
        <p > <Link to="/signup" >Signup</Link> <span >&nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;&nbsp; &nbsp;&nbsp; &nbsp; &nbsp; &nbsp; &nbsp;</span> <a href="#">Forgot Password?</a></p> 
    </div>
    </Form>
    </div>
  );
}

export default LoginForm;
