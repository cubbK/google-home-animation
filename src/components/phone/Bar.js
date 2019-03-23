import React from "react";
import styled from "styled-components";
import backIcon from "./bar/back-icon.png";
import menuIcon from "./bar/menu-icon.png";
import Button from "./bar/Button";
import HomeButton from "./bar/HomeButton";
import { animated, useSpring } from "react-spring";

const Container = styled(animated.div)`
  width: calc(100% - 80px);
  padding-left: 40px;
  padding-right: 40px;
  height: 35px;
  position: absolute;
  bottom: 0px;
  left: 0px;
  right: 0;
  margin: auto;
  display: flex;
  justify-content: space-between;
  z-index: 1;
  border-bottom-left-radius: 20px;
  border-bottom-right-radius: 20px;
`;

export default function Bar(props) {
  const barStyles = useSpring({
    backgroundColor:
      props.theme === "dark" ? "rgba(250,250,250,1)" : "rgba(250,250,250,0)",
      config: { tension: 1000, friction: 50, clamp: true }
  });
  return (
    <Container style={barStyles}>
      <Button theme={props.theme} {...props.backButtonProps}>
        <img src={backIcon} alt="back" />
      </Button>

      <HomeButton theme={props.theme} {...props.homeButtonProps} />

      <Button theme={props.theme} {...props.menuButtonProps}>
        <img src={menuIcon} alt="menu" />
      </Button>
    </Container>
  );
}
