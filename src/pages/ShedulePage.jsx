import React from "react";
import { useNavigate } from "react-router-dom";
import Button from "../UI/Button";
import { styled } from "styled-components";

export const SchedulePage = () => {
  const navigate = useNavigate();
  const goToNotification = () => {
    navigate("/notification");
  };
  return (
    <Container>
      <h1>Schedule page </h1>
      <Button onClick={goToNotification}>Go to NOTIFICATION page</Button>
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
