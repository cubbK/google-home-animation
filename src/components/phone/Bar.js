import React from "react";
import styled from "styled-components";
import backIcon from "./bar/back-icon.png";
import homeIcon from "./bar/home-icon.png";
import menuIcon from "./bar/menu-icon.png";

const Container = styled.div`
  width: calc(100% - 140px);
  height: 35px;
  position: absolute;
  bottom: 57px;
  left: 0;
  right: 0;
  margin: auto;
  display: flex;
  justify-content: space-between;
`;

const Button = styled.div`
  height: 100%;
  width: 80px;
  border-radius: 20px;
  display: flex;
  justify-content: center;
  align-items: center;
  cursor: pointer;
  transition: all 0.1s;
  :hover {
    background: rgba(255, 255, 255, 0.15);
  }
  img {
    width: auto;
    height: 14px;
  }
`;

export default function Bar(props) {
  return (
    <Container>
      <Button>
        <img src={backIcon} alt="back" />
      </Button>
      <Button>
        <img src={homeIcon} alt="home" />
      </Button>
      <Button>
        <img src={menuIcon} alt="menu" />
      </Button>
    </Container>
  );
}
