import React from "react";
import styled from "styled-components";
import { animated, useSpring } from "react-spring";
import popupTopCircles from "./popup/popup-top-circles.png";

const Container = styled(animated.div)`
  width: calc(100% - 60px);
  height: 50%;
  padding-left: 30px;
  padding-right: 30px;
  background-color: #fff;
  border-top-left-radius: 20px;
  border-top-right-radius: 20px;
  border-bottom-right-radius: 20px;
  border-bottom-left-radius: 20px;
  position: absolute;
  bottom: 0px;
  left: 0px;
  right: 0;
  margin: auto;
`;

const PopupTopCircles = styled.img`
  display: block;
  box-sizing: border-box;
`;

export default function Popup(props) {
  const animationStyles = useSpring({
    height: props.isOpen ? "50%" : "0%",
    config: { tension: 1000, friction: 50, clamp: true }
  });

  return (
    <Container
      style={{
        ...animationStyles,
        visibility: animationStyles.height.interpolate(height =>
          height === "0%" ? "hidden" : "visible"
        )
      }}
    >
      <PopupTopCircles alt="circles" src={popupTopCircles} />
    </Container>
  );
}
