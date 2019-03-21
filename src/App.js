import React, { Component } from 'react';
import Phone from "./components/Phone";
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
        <Phone />
      </Container>
    );
  }
}

export default App;
