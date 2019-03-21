import React from "react";
import phone from "./phone/phone.png";
import backIcon from "./phone/back-icon.png";
import styled from "styled-components";

const Image = styled.div`
  width: 449px;
  height: 553px;
  background: url(${phone});
  background-size: contain;
  background-repeat: no-repeat;
  filter: drop-shadow(15px 15px 2px rgba(0,0,0,0.75));
`;

function Phone(props) {
  return <Image>{props.children}</Image>;
}

export default Phone;
