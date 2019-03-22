import React from "react";
import styled from "styled-components";
import backIcon from "./bar/back-icon.png";
import menuIcon from "./bar/menu-icon.png";
import Button from "./bar/Button";
import HomeButton from "./bar/HomeButton";

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

export default function Bar(props) {
  return (
    <Container>
      <Button>
        <img src={backIcon} alt="back" />
      </Button>

      <HomeButton />

      <Button>
        <img src={menuIcon} alt="menu" />
      </Button>
    </Container>
  );
}
