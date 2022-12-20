import React, { useState } from "react";
import { Form, Button } from "react-bootstrap";
import { Link, Navigate } from "react-router-dom";
import { useDispatch, useSelector } from 'react-redux';
import login from './Login';
import '../../api/user.json';
import { signupRequest, signupSuccess, signupFailure } from '../../reducers/signupSlice';
import axios from 'axios';
import "./Signup.css";

function SignupForm() {
  const dispatch = useDispatch();
  const [isSignup, setIsSignup] = useState(false);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");


  const handleEmailChange = (event) => {
    setEmail(event.target.value);
  };

  const handlePasswordChange = (event) => {
    setPassword(event.target.value);
  };

  const handleConfirmPasswordChange = (event) => {
    setConfirmPassword(event.target.value);
  };

  const handleFirstNameChange = (event) => {
    setFirstName(event.target.value);
  };

  const handleLastNameChange = (event) => {
    setLastName(event.target.value);
  };


    function handleSubmit(event) {
      event.preventDefault();
      if (isSignup) {
        console.log("Signup");
      } else {
        <Navigate to="/Login" />
      }
     
      axios.request({
        method: 'POST',
        url: 'http://localhost:3000/adduser',
        data: {
          first_name: firstName,
          last_name: lastName,
          email: email,
          password: password,
        }
      })
        .then(response => {
          setIsSignup(true);
          dispatch(signupSuccess(response.data));
          <Navigate to="/Login" />
          console.log(response);

        })
        .catch(error => {
          // handle error
          console.log(error);
          
        });

      
      
    }

  return (
    <div className="signup">
    <Form>
      <Form.Group controlId="formBasicFirstName">
        <Form.Label>First Name</Form.Label>
        <Form.Control
          type="text"
          placeholder="First Name"
          value={firstName}
          onChange={handleFirstNameChange}
        />
      </Form.Group>

      <Form.Group controlId="formBasicLastName">
        <Form.Label>Last Name</Form.Label>
        <Form.Control
          type="text"
          placeholder="Last Name"
          value={lastName}
          onChange={handleLastNameChange}
        />
      </Form.Group>
      <Form.Group controlId="formBasicEmail">
        <Form.Label>Email address</Form.Label>
        <Form.Control
          type="email"
          placeholder="Enter email"
          value={email}
          onChange={handleEmailChange}
        />
      </Form.Group>

      <Form.Group controlId="formBasicPassword">
        <Form.Label>Password</Form.Label>
        <Form.Control
          type="password"
          placeholder="Password"
          value={password}
          onChange={handlePasswordChange}
        />
      </Form.Group>

      <Form.Group controlId="formBasicConfirmPassword">
        <Form.Label>Confirm Password</Form.Label>
        <Form.Control
          type="password"
          placeholder="Confirm Password"
          value={confirmPassword}
          onChange={handleConfirmPasswordChange}
        />
      </Form.Group>


      <div className="d-grid gap-2 mt-2">
        <Button
          type="submit"
          onClick={handleSubmit}
        
        variant="primary" size="md">
          Sign Up
        </Button>
      </div>
    </Form>
      <p className="mt-2"> Already have an account <Link to="/login"> Login</Link> </p>
  </div>

  );
}

export default SignupForm;
