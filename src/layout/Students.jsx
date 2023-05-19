import React from "react";
import Button from "../UI/Button";
import { useNavigate } from "react-router-dom";
import { styled } from "styled-components";

const Students = ({ students }) => {
  const navigate = useNavigate();
  return (
    <>
      <Container>
        {students.map((el) => {
          return (
            <MiniContainer key={el.id}>
              <h2>{el.title}</h2>
              <Button onClick={() => navigate(`${el.id}/details`)}>
                details
              </Button>
            </MiniContainer>
          );
        })}
      </Container>
    </>
  );
};

const Container = styled.div`
  width: 90%;
  margin-left: 40px;
  margin-top: 50px;
  display: flex;
  gap: 30px;
`;

const MiniContainer = styled.div`
  background-color: #5a5c5d;
  border-radius: 10px;
  padding: 15px;
  text-align: center;
  display: flex;
  height: 50px;
  align-items: center;
  gap: 10px;
  h2 {
    color: #0a3d31;
  }
`;
export default Students;
