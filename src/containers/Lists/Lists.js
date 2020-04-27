// package imports
import React, { Component } from "react";
import styled from "styled-components";

// Component imports
import List from "../../components/List/List";
import NewList from "../../components/NewList/NewList";

const ListsContainer = styled.div`
  width: 100vw;
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
`;

const ListButton = styled.button`
  margin-left: -7rem;
  margin-top: 2rem;
  background-color: transparent;
  border: none;
  border-radius: 2rem;
  cursor: pointer;
  font-size: 4rem;
  color: lightgray;
  height: 4rem;
  width: 4rem;
  outline: none;

  &:hover {
    color: #00c9b2;
  }
`;

class Lists extends Component {
  state = {
    listCounter: 1,
    newList: "",
    lists: [
      {
        id: 1,
        title: "The first list",
        items: [],
        newItem: { text: "", time: "", complete: false },
      },
    ],
    // Required for drag preview as we cannot access getData()
    draggedList: "",
  };

  componentDidMount() {
    // Retrieve local storage data for lists and list counter
    if (window.localStorage.getItem("lists")) {
      const lists = JSON.parse(window.localStorage.getItem("lists"));
      this.setState({ lists: lists });
    }
    if (window.localStorage.getItem("listCounter")) {
      const listCounter = JSON.parse(
        window.localStorage.getItem("listCounter")
      );
      this.setState({ listCounter: listCounter });
    }
  }

  // Handles input value and state update on list items
  inputChangeHandler = (id, e) => {
    const lists = [...this.state.lists];
    const updateLists = lists.map((list) => {
      if (list.id === id) {
        list.newItem[e.target.name] = e.target.value;
      }
      return list;
    });
    this.setState({ lists: updateLists });
  };

  // Handles pushing new list items onto their list
  itemAddHandler = (e) => {
    // Prevent form submission
    e.preventDefault();
    // Copy state lists array
    const lists = [...this.state.lists];
    lists.forEach((list) => {
      // Check for matching list
      if (list.id == e.target.name) {
        list.items.push(list.newItem);
        // Reset blank new list item
        list.newItem = { text: "", time: "", complete: false };
        this.setState({ lists: lists });
        // Update local storafe
        window.localStorage.setItem("lists", JSON.stringify(this.state.lists));
      }
      // Set the blank text input to be focuses instead of time input
      document.querySelector(`#textInput${list.id}`).focus();
    });
  };

  // Sets complete status of items
  itemDoneHandler = (id, item) => {
    const lists = [...this.state.lists];
    const updatedLists = lists.map((list) => {
      //Check for matching list in lists
      if (list.id == id) {
        const updatedItems = list.items.map((itm) => {
          // Check for matching list item
          if (itm === item) {
            // Reverse it's complete status
            itm.complete = !itm.complete;
          }
          return itm;
        });
        list.items = updatedItems;
      }
      return list;
    });
    this.setState({ lists: updatedLists });
    window.localStorage.setItem("lists", JSON.stringify(this.state.lists));
  };

  // WIP
  itemDeleteHandler = (item) => {
    console.log(item);
  };

  // Populates newList state w/ blanknewList object w/ updated id
  newListHandler = () => {
    const newList = {
      id: this.state.listCounter + 1,
      title: "",
      items: [],
      newItem: { text: "", time: "", complete: false },
    };
    this.setState({ newList: newList });
  };

  // Handles updating of newList title in state and input value
  titleChangeHandler = (e) => {
    const newList = { ...this.state.newList };
    newList.title = e.target.value;
    this.setState({ newList: newList });
  };

  // Handles submission of the new list
  newListSubmit = (e) => {
    // Prevent form submission
    e.preventDefault();
    const lists = [...this.state.lists];
    // Push the newList object onto the lists state
    lists.push(this.state.newList);
    // Update list ID counter
    const newListCounter = this.state.listCounter + 1;
    // Reset newList state back to blank, update lists state and counter state
    this.setState({ newList: "", lists: lists, listCounter: newListCounter });
    // Update localStorage
    window.localStorage.setItem("lists", JSON.stringify(this.state.lists));
    window.localStorage.setItem("listCounter", JSON.stringify(newListCounter));
  };

  // Handles list deletion
  listDeleteHandler = (id) => {
    const lists = [...this.state.lists];
    // Filter for all lists that are not the deleted list
    const updatedLists = lists.filter((list) => list.id != id);
    // Set list state to this filtered list
    this.setState({ lists: updatedLists });
    // Update localStorage
    window.localStorage.setItem("lists", JSON.stringify(updatedLists));
  };

  // Initial drag operations
  dragStart = (e) => {
    // Save the text value for indexing
    this.setState({ draggedList: e.target.children[0].innerText });
  };

  dragOver = (e) => {
    e.preventDefault();
  };

  // Handlers drag preview sorting
  dragEnter = (id, e) => {
    // Gets hovered on object for indexing
    const droppedOnObject = e.target.innerText;
    // Copy of lists state
    const lists = [...this.state.lists];
    // Copy of list to be reordered
    const targetedList = { ...lists.filter((list) => list.id === id) };
    // Find index of dragged element and hovered on element
    const draggedIndex = targetedList[0].items.findIndex(
      (item) => item.text.trim() === this.state.draggedList.trim()
    );
    const droppedIndex = targetedList[0].items.findIndex(
      (item) => item.text.trim() === droppedOnObject.trim()
    );

    // Copy of list items
    const items = [...targetedList[0].items];
    // Remove and assign item to be moved
    const removedItem = items.splice(draggedIndex, 1);
    // Insert removed item into targeted position
    items.splice(droppedIndex, 0, removedItem[0]);

    // update lists array with reordered items
    const updatedLists = lists.map((list) => {
      if (list.id === targetedList[0].id) {
        list.items = [...items];
      }
      return list;
    });
    // Update state
    this.setState({ lists: updatedLists });
  };

  // Same behaviour as above but on drop update the localStorage
  onDrop = (id, e) => {
    e.preventDefault();
    this.dragEnter(id, e);
    window.localStorage.setItem("lists", JSON.stringify(this.state.lists));
  };

  render() {
    const lists = this.state.lists.map((list) => (
      <List
        key={list.id}
        info={list}
        submit={this.itemAddHandler}
        changed={this.inputChangeHandler}
        listDelete={this.listDeleteHandler}
        itemDelete={this.itemDeleteHandler}
        itemDone={this.itemDoneHandler}
        dragStart={this.dragStart}
        dragOver={this.dragOver}
        dragEnter={(e) => this.dragEnter(list.id, e)}
        onDrop={(e) => this.onDrop(list.id, e)}
      />
    ));

    let newList = null;
    if (this.state.newList) {
      newList = (
        <NewList
          newList={this.state.newList}
          changed={this.titleChangeHandler}
          submit={this.newListSubmit}
        />
      );
    }

    return (
      <ListsContainer>
        {lists}
        {newList}
        <ListButton onClick={this.newListHandler}>+</ListButton>
      </ListsContainer>
    );
  }
}

export default Lists;
