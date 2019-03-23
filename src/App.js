import React, { Component } from 'react';
import PhoneContainer from "./containers/PhoneContainer";
import "normalize.css";
import styled from "styled-components";

const Container = styled.div`
  background-color: #fdfdfd;
  display: flex;
  align-items: center;
  justify-content: center;
  min-height: 100vh;
`

class App extends Component {
  render() {
    return (
      <Container>
        <PhoneContainer />
      </Container>
    );
  }
}

export default App;
