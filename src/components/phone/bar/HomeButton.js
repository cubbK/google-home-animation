import React, { useState } from "react";
import styled from "styled-components";
import Button from "./Button";
import { useSpring, animated } from "react-spring";
import ClickNHold from "react-click-n-hold";

const googleColors = {
  red: "#DB4437",
  blue: "#4285F4",
  yellow: "#F4B400",
  green: "#0F9D58"
}

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
  z-index: 1;
`;

const GoogleDot = styled(animated.div)`
  position: absolute;
  border-radius: 50%;
  width: 7px;
  height: 7px;
`

const GoogleDotRed = styled(GoogleDot)`
  background-color: ${googleColors.red};
`
const GoogleDotBlue = styled(GoogleDot)`
  background-color: ${googleColors.blue};
`
const GoogleDotYellow = styled(GoogleDot)`
  background-color: ${googleColors.yellow};
`
const GoogleDotGreen = styled(GoogleDot)`
  background-color: ${googleColors.green};
`

export default function HomeButton() {
  const [outerCircleStyles, setOuterCircleStyles] = useSpring(() => ({
    from: { width: "14px", height: "14px" },
    config: { tension: 550 }
  }));

  const [innerCircleStyles, setInnerCircleStyles] = useSpring(() => ({
    from: { width: "11px", height: "11px" },
    config: { tension: 550 }
  }));

  function triggerAnimation() {
    setOuterCircleStyles({ to: { width: "0px", height: "0px" } });
    setInnerCircleStyles({
      to: async next => {
        await next({ width: "8px", height: "8px" });
      }
    });
  }

  function endAnimation() {
    setOuterCircleStyles({ to: { width: "14px", height: "14px" } });
    setInnerCircleStyles({ to: { width: "11px", height: "11px" } })
  }

  return (
    <ClickNHold
      time={999} // Time to keep pressing. Default is 2
      onStart={triggerAnimation} // Start callback
      onEnd={endAnimation}
    >
      <div>
        <Button>
          <CircleOuter style={outerCircleStyles} />
          <CircleInner style={innerCircleStyles} />
          <GoogleDotRed />
          <GoogleDotBlue />
          <GoogleDotYellow />
          <GoogleDotGreen />
        </Button>
      </div>
    </ClickNHold>
  );
}
