import React, { useState } from "react";
import styled from "styled-components";

const ForgotPasswordContainer = styled.div`
  width: 100%;
  height: 100vh;
  background-color: #fff;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const ForgotPasswordForm = styled.form`
  width: 400px;
  padding: 20px;
  border: 1px solid #ccc;
`;

const ForgotPasswordHeading = styled.h1`
  text-align: center;
  margin-bottom: 20px;
`;

const ForgotPasswordInput = styled.input`
  width: 90%;
  padding: 10px;
  border: 1px solid #ccc;
  margin-bottom: 10px;
  margin-left: 10px;
  margin-right: 10px;
  align-items: center;
`;

const ForgotPasswordButton = styled.button`
  width: 100%;
  padding: 10px;
  background-color: #000;
  align-items: center;
  color: #fff;
  border: none;
  border-radius: 5px;
`;

const ForgotPassword = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();

    // TODO: Submit the forgot password request to the server
  };

  return (
    <ForgotPasswordContainer>
      <ForgotPasswordForm onSubmit={handleSubmit}>
        <ForgotPasswordHeading>Forgot Password?</ForgotPasswordHeading>
        <p>Enter your email address.</p>
        <ForgotPasswordInput
          type="email"
          name="email"
          placeholder="Enter email address"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        <ForgotPasswordHeading>New Password</ForgotPasswordHeading>
        <p>Please create a new password that you don’t use on any other site.</p>
        <ForgotPasswordInput
          type="password"
          name="newPassword"
          placeholder="Create new password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
        <ForgotPasswordInput
          type="password"
          name="confirmPassword"
          placeholder="Confirm new password"
          value={confirmPassword}
          onChange={(e) => setConfirmPassword(e.target.value)}
        />
        <ForgotPasswordButton type="submit">Change</ForgotPasswordButton>
      </ForgotPasswordForm>
    </ForgotPasswordContainer>
  );
};

export default ForgotPassword;
