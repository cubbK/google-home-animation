import React from "react";
import styled from "styled-components";
import { animated, useSpring } from "react-spring";
import popupTopCircles from "./popup/popup-top-circles.png";
import songIcon from "./popup/song-icon.png";
import playMusicIcon from "./popup/play-music-icon.png";
import iconLeft from "./popup/popup-icon-left.png";
import iconRight from "./popup/popup-icon-right.png";

const Container = styled(animated.div)`
  width: calc(100% - 60px);
  height: calc(53% - 75px);
  padding-top: 20px;
  padding-bottom: 55px;
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
  display: flex;
  flex-direction: column;
  align-items: flex-start;
`;

const PopupTopCircles = styled.img`
  display: block;
  box-sizing: border-box;
  margin-bottom: 10px;
`;

const BubbleWithText = styled.div`
  border-radius: 20px;
  padding: 7px 13px;
  border: 1px solid rgba(211, 211, 211, 0.7);
  display: inline-block;
  font-family: "Roboto", sans-serif;
  display: flex;
  align-items: center;
  img {
    margin-right: 5px;
    transform: scale(0.8);
  }
`;

const ActionBubbleContainer = styled.div`
  margin-top: 40px;
  margin-bottom: 10px;
  display: flex;
  justify-content: space-evenly;
  & > div {
    margin-right: 10px;
  }
`;

const BottomContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  img {
    transform: scale(0.5);
  }
`;

export default function Popup(props) {
  const [animationStyles, setAnimationStiles] = useSpring(() => ({
    from: { marginBottom: "-63%" },
    config: { tension: 1000, friction: 50, clamp: true }
  }));

  if (props.isOpen) {
    setAnimationStiles({ marginBottom: "0%" });
  } else {
    setAnimationStiles({ marginBottom: "-63%" });
  }

  return (
    <Container style={animationStyles}>
      <PopupTopCircles alt="circles" src={popupTopCircles} />
      <BubbleWithText>Hi, how can I help?</BubbleWithText>
      <ActionBubbleContainer>
        <BubbleWithText>
          <img alt="song" src={songIcon} />
          What's this song?
        </BubbleWithText>
        <BubbleWithText>
          <img alt="play" src={playMusicIcon} />
          Play music А
        </BubbleWithText>
      </ActionBubbleContainer>
      <BottomContainer>
        <img alt="strange thing" src={iconLeft} />
        <img alt="compass" src={iconRight} />
      </BottomContainer>
    </Container>
  );
}
