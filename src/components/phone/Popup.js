import React from "react";
import styled from "styled-components";
import { animated, useSpring } from "react-spring";
import popupTopCircles from "./popup/popup-top-circles.png";
import songIcon from "./popup/song-icon.png";
import playMusicIcon from "./popup/play-music-icon.png";
import iconLeft from "./popup/popup-icon-left.png";
import iconRight from "./popup/popup-icon-right.png";

const googleColors = {
  red: "#DB4437",
  blue: "#4285F4",
  yellow: "#F4B400",
  green: "#0F9D58"
};

const GoogleDot = styled(animated.div)`
  border-radius: 50%;
  width: 5px;
  height: 5px;
`;

const GoogleDotRed = styled(GoogleDot)`
  background-color: ${googleColors.red};
`;
const GoogleDotBlue = styled(GoogleDot)`
  background-color: ${googleColors.blue};
`;
const GoogleDotYellow = styled(GoogleDot)`
  background-color: ${googleColors.yellow};
`;
const GoogleDotGreen = styled(GoogleDot)`
  background-color: ${googleColors.green};
`;

const Container = styled(animated.div)`
  width: calc(100% - 50px);
  height: calc(53% - 75px);
  padding-top: 20px;
  padding-bottom: 55px;
  padding-left: 25px;
  padding-right: 25px;
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
  transform: scale(0.8);
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

const GoogleDotsContainer = styled.div`
  position: relative;
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 33px;
`;

export default function Popup(props) {
  const [animationStyles, setAnimationStiles] = useSpring(() => ({
    from: { marginBottom: "-65%" },
    config: { tension: 1000, friction: 50, clamp: true }
  }));

  if (props.isOpen) {
    setAnimationStiles({ marginBottom: "0%" });
  } else {
    setAnimationStiles({ marginBottom: "-65%" });
  }

  const config = {
    duration: 850
  };

  // helper function
  const delay = ms => new Promise(res => setTimeout(res, ms));

  const [googleDotRedStyles, setGoogleDotRedStyles] = useSpring(() => ({
    from: { translateY: "-1px" },
    to: async (next, cancel) => {
      await delay(200)
      while (1) {
        await next({ translateY: "1px" });
        await next({ translateY: "-1px" });
      }
    },
    config: config
  }));
  const [googleDotBlueStyles, setGoogleDotBlueStyles] = useSpring(() => ({
    from: { translateY: "-1px" },
    to: async (next, cancel) => {
      await delay(200)
      while (1) {
        await next({ translateY: "1px" });
        await next({ translateY: "-1px" });
      }
    },
    config: config
  }));
  const [googleDotYellowStyles, setGoogleDotYellowStyles] = useSpring(() => ({
    from: { translateY: "-1px" },
    to: async (next, cancel) => {
      await delay(400)
      while (1) {
        await next({ translateY: "1px" });
        await next({ translateY: "-1px" });
      }
    },
    config: config
  }));
  const [googleDotGreenStyles, setGoogleDotGreenStyles] = useSpring(() => ({
    from: { translateY: "-1px" },
    to: async (next, cancel) => {
      await delay(600)
      while (1) {
        await next({ translateY: "1px" });
        await next({ translateY: "-1px" });
      }
    },
    config: config
  }));

  // setGoogleDotRedStyles({
    
  // });

  function getStylesWithTransform(styles) {
    return {
      ...styles,
      transform: styles.translateY.interpolate(y => `translateY(${y})`)
    };
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
          Play music
        </BubbleWithText>
      </ActionBubbleContainer>
      <BottomContainer>
        <img alt="strange thing" src={iconLeft} />
        <GoogleDotsContainer>
          <GoogleDotBlue style={getStylesWithTransform(googleDotBlueStyles)} />
          <GoogleDotRed style={getStylesWithTransform(googleDotRedStyles)} />
          <GoogleDotYellow
            style={getStylesWithTransform(googleDotYellowStyles)}
          />
          <GoogleDotGreen
            style={getStylesWithTransform(googleDotGreenStyles)}
          />
        </GoogleDotsContainer>
        <img alt="compass" src={iconRight} />
      </BottomContainer>
    </Container>
  );
}
