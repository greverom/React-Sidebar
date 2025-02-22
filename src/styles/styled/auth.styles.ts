import styled from "styled-components";

export const AuthContainer = styled.div`
  display: flex;
  justify-content: center;
  margin-top: 4rem;
  background-color: #f0f2f5;
`;

export const AuthForm = styled.form`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 300px;
  padding: 1.7rem;
  margin-bottom: 2rem;
  background: white;
  border: 1px solid rgb(195, 195, 195);
  border-radius: 8px;
`;

export const AuthTitle = styled.h2`
  font-size: 1.6rem;
  color: #333;
  margin-top: 0;
  margin-bottom: 2.5rem;
  text-align: center;
`;

export const InputGroup = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  margin-bottom: 1rem;
`;

export const Label = styled.label`
  font-size: 12px;
  color: #555;
  text-align: left;
  margin-bottom: 7px;
`;

export const InputContainer = styled.div`
  position: relative;
  width: 100%;
`;

export const Input = styled.input`
  width: 100%;
  max-width: 250px;
  min-width: 250px;
  padding: 10px;
  padding-left: ${({ type }) => (type === "email" ? "35px" : "10px")}; 
  padding-right: ${({ type }) => (type === "password" || type === "text" ? "35px" : "10px")}; 
  border: 1px solid #ccc;
  border-radius: 5px;
  font-size: 14px;
  outline: none;
  transition: border-color 0.3s ease, width 0s, min-width 0s;

  &:focus {
    border-color: #828485;
  }
`;

export const EmailIcon = styled.span`
  position: absolute;
  left: 10px; 
  top: 56%;
  transform: translateY(-50%);
  font-size: 1.2rem;
  color: #888;
  transition: color 0.3s ease-in-out;
  
  &:hover {
    color: #555;
  }
`;

export const PasswordIcon = styled.span`
  position: absolute;
  right: 10px; 
  top: 56%;
  transform: translateY(-50%);
  font-size: 1.2rem;
  cursor: pointer;
  color: #888;
  transition: color 0.3s ease-in-out;

  &:hover {
    color: #555;
  }
`;

export const ErrorMessage = styled.p`
  color: red;
  font-size: 11px;
  text-align: left;
  margin-top: 5px;
  margin-bottom: 0;
`;

export const AuthButton = styled.button`
  background: #007bff;
  color: white;
  padding: 14px;
  border: none;
  border-radius: 5px;
  font-size: 15px;
  cursor: pointer;
  width: 100%;
  max-width: 300px;
  margin-top: 20px;
  transition: background 0.3s ease, transform 0.2s ease;
  text-align: center;

  &:hover {
    transform: scale(1.01);
  }
`;

export const RememberAndForgotContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between; 
  width: 100%;
  margin-top: 0px;
  margin-bottom: 10px;
`;

export const RememberMeContainer = styled.div`
  display: flex;
  align-items: center;
`;

export const RememberMeCheckbox = styled.input`
  width: 14px;
  height: 14px;
  margin-right: 8px;
  cursor: pointer;
`;

export const RememberMeLabel = styled.label`
  font-size: 0.8rem;
  color: grey;
  cursor: pointer;
`;

export const ForgotPasswordLink = styled.a`
  font-size: 0.7rem; 
  color: #007bff;
  text-decoration: none;
  transition: color 0.3s ease-in-out;
  align-self: flex-start;
  margin-top: -10px;

  &:hover {
    color: #0056b3;
    text-decoration: underline;
  }
`;