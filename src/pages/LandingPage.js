import React from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';

const LandingPage = () => {
  
  return (
    <LandingPageContainer>

      <div className="landing-page">
        <h1 className="landing-title">WELCOME</h1>
        <p className="landing-description">
          Check whether your CHEQUE is real or fake
        </p>

        <div className="buttons">
          <Link to="/login">
            <button className="login-button">Login</button>
          </Link>
          <Link to="/register">
            <button className="register-button">Register</button>
          </Link>
        </div>

      </div>

    </LandingPageContainer>
  );
};

const LandingPageContainer = styled.div`
  body {
    margin: 0;
    padding: 0;
  }

  .landing-page {
    background-color: #f5f5f5;
    background-image: url('https://www.datasciencecentral.com/wp-content/uploads/2023/09/AdobeStock_613025532-scaled.jpeg');
    background-size: cover;
  
    background-position: center center;
    height: 100vh;
    display: flex;
    flex-direction: column;
    align-items: flex-end;
    justify-content: center;
    padding: 0 180px 0 10%;

  }
 

  .landing-title {
    text-align: center;
    font-size: 55px;
    color: #007bff;
    margin-top: -50px;
    margin-bottom: 10px;
  }

  .landing-description {
    text-align: right;
    font-size: 20px;
    color: white;
    margin: 10px 0;
    padding: -10 20%;
  }

  .buttons {
    margin-top: 50px;
  }

  .login-button,
  .register-button {
    border: #0056b3 0.25rem solid;
    padding: 28px 38px;
    color: #fff;
    margin-left: 50px;

    font-size: 16px;
    font-weight: bold;
    background-color: #640d87;
    border-radius: 1em;
    outline: none;
    box-shadow: 0 0 1em 0.25em #007bff, 0 0 4em 1em rgba(191, 123, 255, 0.781),
      inset 0 0 0.75em 0.25em #007bff;
    text-shadow: 0 0 0.5em #007bff;
    cursor: pointer;
    transition: all 0.3s;
  }

  .login-button:hover,
  .register-button:hover {
    background-color: #0056b3;
  }

  .register-button {
    background-color: transparent;
    border: 1px solid #007bff;
    color: #007bff;
    cursor: pointer;
  
  }
`;

export default LandingPage;
