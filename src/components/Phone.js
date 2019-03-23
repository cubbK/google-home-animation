import React from "react";
import Bar from "./phone/Bar";
import Popup from "./phone/Popup";
import styled from "styled-components";
import phone from "./phone/phone.png";

const Image = styled.div`
  position: relative;
  width: 449px;
  height: 553px;
  background: url(${phone});
  background-size: contain;
  background-repeat: no-repeat;
  filter: drop-shadow(15px 15px 2px rgba(0, 0, 0, 0.75));
`;

const Screen = styled.div`
  position: absolute;
  width: calc(100% - 31px);
  bottom: 55px;
  left: -3px;
  right: 0;
  margin: auto;
  border-bottom-right-radius: 20px;
  border-bottom-left-radius: 20px;
  height: 90%;
  overflow: hidden;
`;

class Phone extends React.Component {
  static Bar = Bar;
  static Popup = Popup;

  render() {
    return (
      <Image {...this.props}>
        <Screen>{this.props.children}</Screen>
      </Image>
    );
  }
}

export default Phone;
