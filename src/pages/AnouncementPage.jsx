import React from "react";
import Button from "../UI/Button";
import { useNavigate } from "react-router-dom";
import { styled } from "styled-components";

export const AnouncementPage = () => {
  const navigate = useNavigate();
  const goToStudent = () => {
    navigate("/courses/students");
  };
  return (
    <Container>
      <h1>Anouncement </h1>
      <Button onClick={goToStudent}>Go to STUDENTS page</Button>
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
