// Package imports
import React, { Component } from "react";
// import { hot } from "react-hot-loader";
import styled from "styled-components";

// css import
import "./App.css";

// Component imports
import Lists from "./containers/Lists/Lists";

const Container = styled.div`
  display: grid;
  height: 100vh;
  align-items: center;
  justify-items: center;
  background-color: #e6ebed;
  /* background-color: #3ADDC2; */
`;

class App extends Component {
  render() {
    return (
      <Container>
        <Lists />
      </Container>
    );
  }
}

// export default hot(module)(App);
export default App;
