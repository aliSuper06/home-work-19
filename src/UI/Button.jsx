import React from "react";
import { styled } from "styled-components";

const Button = ({ onClick, children }) => {
  return <MyButton onClick={onClick}>{children}</MyButton>;
};

const MyButton = styled.button`
  padding: 15px;
  background-color: #3e5e3e;
  border-radius: 10px;
  border: none;
  color: #fff;
  font-size: 20px;
  font-weight: 600;
  transition: background-color 0.3s ease;

  &:hover {
    background-color: #497a49;
  }

  &:active {
    background-color: #355835;
  }
`;

export default Button;
