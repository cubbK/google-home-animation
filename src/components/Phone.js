import React from "react";
import Bar from "./phone/Bar";
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

class Phone extends React.Component {
  static Bar = Bar;

  render() {
    return <Image {...this.props}>{this.props.children}</Image>;
  }
}

export default Phone;
