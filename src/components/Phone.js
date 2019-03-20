import React from "react";
import phone from "./phone/nokia.jpg";
import styled from "styled-components";

const Container = styled.div`
  max-height: 1000px;
  max-width: 1000px;
  background-image: ${phone};
  height: 40px;
  width: 40px;
`;

function Phone(props) {
  return (
    <Container />
  );
}

export default Phone;
