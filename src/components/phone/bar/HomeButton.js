import React, { useState } from "react";
import styled from "styled-components";
import Button from "./Button";
import { useSpring, animated } from "react-spring";
import ClickNHold from "react-click-n-hold";

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
  const [outerCircleStyles, setOuterCircleStyles] = useSpring(() => ({
    from: { width: "14px", height: "14px" },
    config: { tension: 550 }
  }));

  function triggerAnimation() {
    setOuterCircleStyles({ to: { width: "0px", height: "0px" } });
  }

  function endAnimation() {
    setOuterCircleStyles({ to: { width: "14px", height: "14px" } });
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
          <CircleInner />
        </Button>
      </div>
    </ClickNHold>
  );
}
