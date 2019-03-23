import React from "react";
import styled from "styled-components";
import { animated, useSpring } from "react-spring";

const Container = styled(animated.div)`
  width: calc(100% - 32px);
  height: 50%;
  background-color: #fff;
  border-top-left-radius: 20px;
  border-top-right-radius: 20px;
  border-bottom-right-radius: 20px;
  border-bottom-left-radius: 20px;
  position: absolute;
  bottom: 55px;
  left: -3px;
  right: 0;
  margin: auto;
`

export default function Popup (props) {
  const animationStyles = useSpring({ height: props.isOpen ? "50%" : "0%", config: { tension: 1000, friction: 50, clamp: true } })

  return <Container style={animationStyles}>123</Container>
}