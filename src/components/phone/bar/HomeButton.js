import React, { useState } from "react";
import styled from "styled-components";
import Button from "./Button";
import { useSpring, animated } from "react-spring";

const CircleOuter = styled(animated.div)`
  position: absolute;
  width: 14px;
  height: 14px;
  border-radius: 50%;
  border-width: 1px;
  border-style: solid;
  border-color: #fff;
`;

const CircleInner = styled(animated.div)`
  position: absolute;
  width: 11px;
  height: 11px;
  border-radius: 50%;
  background-color: #fff;
`;

export default function HomeButton() {
  return (
    <Button>
      <CircleOuter />
      <CircleInner />
    </Button>
  );
}
