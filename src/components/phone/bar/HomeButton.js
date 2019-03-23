import React from "react";
import styled from "styled-components";
import Button from "./Button";
import { useSpring, animated } from "react-spring";
import ClickNHold from "react-click-n-hold";
import {
  easeElasticIn
} from "d3-ease";

const googleColors = {
  red: "#DB4437",
  blue: "#4285F4",
  yellow: "#F4B400",
  green: "#0F9D58"
};

const CircleOuter = styled(animated.div)`
  position: absolute;
  width: 14px;
  height: 14px;
  border-radius: 50%;
  border-width: 1px;
  border-style: solid;
  border-color: ${props => (props.theme === "dark" ? "#696969" : "#fff")};
`;

const CircleInner = styled(animated.div)`
  position: absolute;
  width: 11px;
  height: 11px;
  border-radius: 50%;
  background-color: ${props => (props.theme === "dark" ? "#696969" : "#fff")};
  z-index: 1;
`;

const GoogleDot = styled(animated.div)`
  position: absolute;
  border-radius: 50%;
  width: 7px;
  height: 7px;
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

export default function HomeButton(props) {

  const config = {
    tension: 2600,
    friction: 100,
    easing: t => easeElasticIn(t)
  };

  const [outerCircleStyles, setOuterCircleStyles] = useSpring(() => ({
    from: { width: "14px", height: "14px", opacity: 1 },
    config: config
  }));

  const [innerCircleStyles, setInnerCircleStyles] = useSpring(() => ({
    from: { width: "11px", height: "11px", opacity: 1 },
    config: config
  }));

  const [googleDotRedStyles, setGoogleDotRedStyles] = useSpring(() => ({
    from: { marginTop: "0px", marginLeft: "0px" },
    config: config
  }));
  const [googleDotBlueStyles, setGoogleDotBlueStyles] = useSpring(() => ({
    from: { marginLeft: "0px" },
    config: config
  }));
  const [googleDotYellowStyles, setGoogleDotYellowStyles] = useSpring(() => ({
    from: { marginTop: "0px", marginLeft: "0px" },
    config: config
  }));
  const [googleDotGreenStyles, setGoogleDotGreenStyles] = useSpring(() => ({
    from: { marginLeft: "0px" },
    config: config
  }));

  async function triggerAnimation() {
    // helper function
    const delay = ms => new Promise(res => setTimeout(res, ms));

    setOuterCircleStyles({
      to: async (next, cancel) => {
        await next({ width: "0px", height: "0px", opacity: 0 });
        await delay(250);
        await next({ width: "14px", height: "14px", opacity: 1 });
      }
    });
    setInnerCircleStyles({
      to: async (next, cancel) => {
        await next({ width: "8px", height: "8px" });
        await next({ width: "0px", height: "0px", opacity: 0 });
        await next({ width: "11px", height: "11px", opacity: 1 });
      }
    });

    setGoogleDotRedStyles({
      to: async (next, cancel) => {
        await next({ marginTop: "-10px" });
        // await delay(300);
        await next({ marginTop: "0px", marginLeft: "-9px" });
        // await delay(150);
        await next({ marginLeft: "0px" });
      }
    });

    setGoogleDotBlueStyles({
      to: async (next, cancel) => {
        await next({ marginLeft: "-10px" });
        // await delay(300);
        await next({ marginLeft: "-26px" });
        // await delay(150);
        await next({ marginLeft: "0px" });
      }
    });

    setGoogleDotYellowStyles({
      to: async (next, cancel) => {
        await next({ marginTop: "10px" });
        // await delay(300);
        await next({ marginTop: "0px", marginLeft: "9px" });
        // await delay(150);
        await next({ marginLeft: "0px" });
      }
    });
    setGoogleDotGreenStyles({
      to: async (next, cancel) => {
        await next({ marginLeft: "10px" });
        // await delay(300);
        await next({ marginLeft: "26px" });
        // await delay(150);
        await next({ marginLeft: "0px" });
      }
    });
  }

  function endAnimation(e, enough) {
    setOuterCircleStyles({ to: { width: "14px", height: "14px", opacity: 1 } });
    setInnerCircleStyles({
      to: { width: "11px", height: "11px", opacity: 1 }
    });
    setGoogleDotRedStyles({ to: { marginTop: "0px", marginLeft: "0px" } });
    setGoogleDotYellowStyles({ to: { marginTop: "0px", marginLeft: "0px" } });
    setGoogleDotBlueStyles({ to: { marginLeft: "0px" } });
    setGoogleDotGreenStyles({ to: { marginLeft: "0px" } });

    if (enough) {
      if (!props.isPopupOpen) {
        props.togglePopup();
      } else {
        console.log("implement wobbling dots animation");
      }
    } else {
      if (props.isPopupOpen) {
        props.togglePopup();
      }
    }
  }

  return (
    <ClickNHold
      time={0.4} // Time to keep pressing. Default is 2
      onStart={triggerAnimation} // Start callback
      onEnd={endAnimation}
    >
      <div>
        <Button>
          <CircleOuter
            theme={props.theme}
            style={{
              ...outerCircleStyles,
              visibility: outerCircleStyles.opacity.interpolate(o =>
                o === 0 ? "hidden" : "visible"
              )
            }}
          />
          <CircleInner
            theme={props.theme}
            style={{
              ...innerCircleStyles,
              visibility: innerCircleStyles.opacity.interpolate(o =>
                o === 0 ? "hidden" : "visible"
              )
            }}
          />
          <GoogleDotRed style={googleDotRedStyles} />
          <GoogleDotBlue style={googleDotBlueStyles} />
          <GoogleDotYellow style={googleDotYellowStyles} />
          <GoogleDotGreen style={googleDotGreenStyles} />
        </Button>
      </div>
    </ClickNHold>
  );
}
