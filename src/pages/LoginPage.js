import React from 'react';
import styled from 'styled-components';
import { Link, useNavigate } from 'react-router-dom';
import { signInWithEmailAndPassword } from 'firebase/auth';
import { database } from './Config';


const LoginPage = () => {
  const history = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    const email = e.target.email.value;
    const password = e.target.password.value;

    signInWithEmailAndPassword(database, email, password).then((data) => {
      console.log(data, "authData");
      history('/Home');
    });
  };

return (
  <LoginPageContainer>
    <h1>Login</h1>
    <form onSubmit={(e) => handleSubmit(e)}>
      <div className="form-group">
        <label>Email</label>
        <input type="email" name="email" placeholder="Email" />
      </div>
      <div className="form-group">
        <label>Password</label>
        <input type="password" name="password" placeholder="Password" />
      </div>
      <button className="login-button" type="submit">
        Login
      </button>
      <div className="forgot-password">
        <Link to="/forgot-password">Forgot your password?</Link>
      </div>
      <div className="create-account">
        <p>
          Don't have an account? <Link to="/register" style={{ color: 'yellow' }}>Create a new account</Link>
        </p>
      </div>
    </form>
  </LoginPageContainer>
);
};

const LoginPageContainer = styled.div`
  body {
    margin: 0;
    padding: 0;
  }

  display: flex;
  flex-direction: column;
  align-items: flex-end;
  justify-content: center;
  height: 100vh;
  background-color: #f5f5f5;
  background-image: url('https://www.datasciencecentral.com/wp-content/uploads/2023/09/AdobeStock_613025532-scaled.jpeg');
  background-size: cover;
  background-position: center center;
  padding: 0 10%;

  h1 {
    text-align: center;
    font-size: 65px;
    color: #007bff;
    margin-top: -30px;
    margin-bottom: 40px;
    margin-right: 60px;
  }

  form {
    display: flex;
    flex-direction: column;
    align-items: flex-end;
    width: 300px; /* Adjust the width as needed */
  }

  .form-group {
    width: 100%;
    margin-bottom: 10px;
  }

  label {
    font-size: 14px;
    color: white;
    margin-bottom: 10px;
  }

  input {
    width: 100%;
    padding: 15px;
    border: 1px solid #ccc;
    border-radius: 20px;
    font-size: 14px;
  }

  .forgot-password {
    a {
      color: white;
      text-decoration: none;
      &:hover {
        text-decoration: underline;
      }
    }
    margin-bottom: 20px; /* Added margin */
  }
  .login-button {
    border: #0056b3 0.25rem solid;
    padding: 18px 28px;
    color: #fff;
    margin-left: 30px;
    margin-bottom: 20px;
    margin-top: 20px;
    width: 100%;
    font-size: 16px;
    font-weight: bold;
    background-color: #640d87;
    border-radius: 20px;
    outline: none;
    box-shadow: 0 0 1em 0.25em #007bff, 0 0 4em 1em rgba(191, 123, 255, 0.781),
      inset 0 0 0.75em 0.25em #007bff;
    text-shadow: 0 0 0.5em #007bff;
    cursor: pointer;
    transition: all 0.3s;

    &:hover {
      background-color: #0056b3;
    }
  }

  .create-account {
    margin-top: 10px;
    p {
      color: white;
      margin-top: 20px;
      margin-top: 10px;
    }
    
  }
`;

export default LoginPage;
