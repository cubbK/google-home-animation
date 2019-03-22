import React, { useState } from "react";
import styled from "styled-components";
import backIcon from "./bar/back-icon.png";
import homeIcon from "./bar/home-icon.png";
import menuIcon from "./bar/menu-icon.png";
import { useSpring, animated, config } from "react-spring";
import { easeExpOut, easeElasticIn } from "d3-ease";
import ClickNHold from "react-click-n-hold";

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

const ButtonDiv = styled.div`
  position: relative;
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

const ButtonOutline = styled(animated.div)`
  height: 100%;
  width: 100%;
  position: absolute;
  border-radius: 20px;
  background: rgba(255, 255, 255, 0.3);
`;

function Button(props) {
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
      time={999} // Time to keep pressing. Default is 2
      onStart={triggerAnimation} // Start callback
      onEnd={endAnimation}
    >
      <ButtonDiv>
        <img alt="" {...props} />
        <ButtonOutline style={outlineStyles} />
      </ButtonDiv>
    </ClickNHold>
  );
}

export default function Bar(props) {
  return (
    <Container>
      <Button src={backIcon} alt="back" />

      <Button src={homeIcon} alt="home" />

      <Button src={menuIcon} alt="menu" />
    </Container>
  );
}
