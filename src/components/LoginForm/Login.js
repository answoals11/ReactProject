import React from "react";
import styled, { css } from "styled-components";
import { Link } from "react-router-dom";
import { Header, Footer } from "../";
import "./Login.scss";

const LoginContainer = styled.div`
  display: flex;
  padding-top: 140px;
  justify-content: center;
`;

const LoginTop = styled.div`
  display: flex;
  justify-content: center;
  margin-top: 40px;
  .LoginLogo {
    font-size: 2rem;
  }
`;

function Login() {
  return (
    <>
      <Header />
      <LoginContainer>
        <LoginTop>
          <a className="LoginLogo">로그인</a>
        </LoginTop>
      </LoginContainer>
      <div class="login-page">
        <div class="form">
          <form class="register-form">
            <input type="text" placeholder="name" />
            <input type="password" placeholder="password" />
            <input type="text" placeholder="email address" />
            <button>create</button>
            <p class="message">
              Already registered? <a href="#">Sign In</a>
            </p>
          </form>

          <form class="login-form">
            <input type="text" placeholder="username" />
            <input type="password" placeholder="password" />
            <button>login</button>
            <p class="message">
              Not registered? <a href="#">Create an account</a>
            </p>
          </form>
        </div>
        
      </div>
      <Footer />
    </>
  );
}

export default Login;
