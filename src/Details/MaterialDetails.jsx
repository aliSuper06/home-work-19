import React from "react";
import { NavLink, Outlet, useNavigate, useParams } from "react-router-dom";
import Button from "../UI/Button";
import { styled } from "styled-components";

export const MaterialDetails = ({ material }) => {
  const params = useParams();
  const navigate = useNavigate();

  const findedMaterial = material.find((el) => el.id === +params.id);

  return (
    <>
      <Container>
        <DetailDiv>
          <h1>Material DETAIL page</h1>
          <h3>
            {findedMaterial.id}: {findedMaterial.title}
          </h3>
          <Button onClick={() => navigate("/courses/materials")}>
            Go to MATERIAL page
          </Button>
        </DetailDiv>

        <NavLinkDiv>
          <StyledNavLink
            to="wate"
            style={({ isActive }) => ({
              color: isActive ? "#983232" : "black",
              borderBottom: isActive ? "5px solid blue" : "0",
            })}
          >
            Wate
          </StyledNavLink>
          <StyledNavLink
            to="late"
            style={({ isActive }) => ({
              color: isActive ? "#983232" : "black",
              borderBottom: isActive ? "5px solid blue" : "0",
            })}
          >
            Late
          </StyledNavLink>
          <StyledNavLink
            to="submite"
            style={({ isActive }) => ({
              color: isActive ? "#983232" : "black",
              borderBottom: isActive ? "5px solid blue" : "0",
            })}
          >
            Submite
          </StyledNavLink>
        </NavLinkDiv>
      </Container>

      <Outlet />
    </>
  );
};

const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  height: 300px;
`;

const DetailDiv = styled.div`
  padding-left: 40px;
  padding-top: 30px;
  h3 {
    color: aliceblue;
  }
  h1 {
    color: aliceblue;
  }
`;

const NavLinkDiv = styled.div`
  display: flex;
  justify-content: space-around;
  padding: 15px;
  background-color: #7ed8d8;
`;

const StyledNavLink = styled(NavLink)`
  font-size: 25px;
  font-weight: 700;
  margin-left: 60px;
  text-decoration: none;
`;
