import React from "react";
import { useNavigate } from "react-router-dom";
import { styled } from "styled-components";
import Button from "../UI/Button";

export const NotificationPage = () => {
  const navigate = useNavigate()
  return (
    <Container>
      <h1>Notification </h1>
      <Button onClick={()=> navigate("/courses")}>Go to COURSES page</Button>
    </Container>
  );
};

const Container = styled.div`
  width: 80%;
  height: 620px;
  background-color: #d6d1afe3;
  padding-left: 20px;
  padding-top: 20px;
  margin: auto;
  border-radius: 10px;
`;
