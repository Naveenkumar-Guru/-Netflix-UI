import React, { useState } from "react";
import BackgroundImage from "../components/BackgroundImage";
import styled from "styled-components";
import Header from "../components/Header";

const Wrapper = styled.div`
  position: relative;
  .loginContent {
    position: absolute;
    top: 0;
    left: 0;
    background-color: rgba(0, 0, 0, 0.6); // netflix background img blur...
    height: 100vh;
    width: 100vw;
    grid-template-columns: 15vh 85vh;
    .form-wrapper {
      display: flex;
      flex-direction: column;
      justify-content: center;
      align-items: center;
      gap: 2rem;
      height: 80vh;
    }
    .form {
      display: flex;
      flex-direction: column;
      justify-content: center;
      align-items: center;
      gap: 2rem;
      background-color: rgba(0, 0, 0, 0.7); //form background color
      height: 75vh;
      width: 22vw; // form background
      padding: 2rem;
      color: white;
      border-radius: 0.4rem;
      .container {
        display: flex;
        flex-direction: column;
        gap: 2rem;
        input {
          border-radius: 0.4rem;
          padding: 0.5rem 1rem;
          width: 17rem;
          height: 2.2rem; // input box height
          outline: none;
        }
        button {
          padding: 0.5rem;
          background-color: red;
          border: none;
          cursor: pointer;
          border-radius: 0.4rem;
          height: 3.4rem;
          color: white;
          font-weight: bolder;
          font-size: 1.05rem;
        }
      }
    }
  }
`;

const LoginPage = () => {
  return (
    <Wrapper>
      <BackgroundImage />
      <div className="loginContent">
        <Header />
        <div className="form-wrapper">
          <div className="form">
            <div className="title">
              <h1>Login</h1>
            </div>
            <div className="container">
              <input type="text" placeholder="email" />
              <input type="password" placeholder="password" />
              <button>Login</button>
            </div>
          </div>
        </div>
      </div>
    </Wrapper>
  );
};

export default LoginPage;
