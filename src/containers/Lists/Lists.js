// package imports
import React, { Component } from "react";
import styled from "styled-components";

// Component imports
import List from "../../components/List/List";

const ListsContainer = styled.div`
  display: flex;
`;

class Lists extends Component {
  state = {
    listCounter: 1,
    lists: [{
      id: 1,
      title: "The first list",
      items: [{text: "Hello", time: "10:00am"}] 
    }]
  }

  itemAddHandler = (e) => {
    e.preventDefault();
    console.log(e.target.value);
  }

  render() {
    return (
      <ListsContainer>
        <List info={this.state.lists[0]} submit={this.itemAddHandler} />
      </ListsContainer>
    );
  }
}

export default Lists;
