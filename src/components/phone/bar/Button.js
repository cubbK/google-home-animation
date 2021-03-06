import React from "react";
import styled from "styled-components";
import { useSpring, animated } from "react-spring";
import { easeElasticIn } from "d3-ease";
import ClickNHold from "react-click-n-hold";

const ButtonDiv = styled.div`
  position: relative;
  height: 35px;
  width: 80px;
  border-radius: 20px;
  display: flex;
  justify-content: center;
  align-items: center;
  cursor: pointer;
  user-select: none;
  -webkit-tap-highlight-color: rgba(255, 255, 255, 0);
  transition: all 0.1s;
  filter: ${props =>
    props.theme === "dark"
      ? "brightness(0) saturate(100%) invert(37%) sepia(0%) saturate(65%) hue-rotate(163deg) brightness(105%) contrast(80%)"
      : ""};
  :hover {
    background: rgba(255, 255, 255, 0.15);
  }
  img {
    width: auto;
    height: 14px;
  }
`;

const ButtonOutline = styled(animated.div)`
  height: 100%;
  width: 100%;
  position: absolute;
  border-radius: 20px;
  background: rgba(255, 255, 255, 0.3);
`;

export default function Button(props) {
  const [outlineStyles, setOutlineStyles] = useSpring(() => ({
    from: { width: "40%", opacity: 0 },
    config: { easing: t => easeElasticIn(t), tension: 550 }
  }));

  function triggerAnimation() {
    setOutlineStyles({
      to: async next => {
        await next({ opacity: 1, width: "100%" });
        await next({ opacity: 0, width: "40%" });
      }
    });
  }

  function endAnimation() {
    setOutlineStyles({
      to: { width: "40%", opacity: 0 }
    });
  }

  return (
    <ClickNHold
      time={1} // Time to keep pressing. Default is 2
      onStart={triggerAnimation} // Start callback
      onEnd={endAnimation}
    >
      <ButtonDiv theme={props.theme} {...props}>
        {props.children}
        <ButtonOutline style={outlineStyles} />
      </ButtonDiv>
    </ClickNHold>
  );
}
