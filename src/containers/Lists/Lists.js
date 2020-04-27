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
    draggedList: "",
  };

  componentDidMount() {
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

  itemAddHandler = (e) => {
    e.preventDefault();
    const lists = [...this.state.lists];
    lists.forEach((list) => {
      if (list.id == e.target.name) {
        list.items.push(list.newItem);
        list.newItem = { text: "", time: "", complete: false };
        this.setState({ lists: lists });
        window.localStorage.setItem("lists", JSON.stringify(this.state.lists));
      }
      document.querySelector(`#textInput${list.id}`).focus();
    });
  };

  itemDoneHandler = (id, item) => {
    const lists = [...this.state.lists];
    const updatedLists = lists.map((list) => {
      if (list.id == id) {
        const updatedItems = list.items.map((itm) => {
          if (itm === item) {
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

  itemDeleteHandler = (item) => {
    console.log(item);
  };

  newListHandler = () => {
    const newList = {
      id: this.state.listCounter + 1,
      title: "",
      items: [],
      newItem: { text: "", time: "", complete: false },
    };
    this.setState({ newList: newList });
  };

  titleChangeHandler = (e) => {
    const newList = { ...this.state.newList };
    newList.title = e.target.value;
    this.setState({ newList: newList });
  };

  newListSubmit = (e) => {
    e.preventDefault();
    const lists = this.state.lists;
    lists.push(this.state.newList);
    const newListCounter = this.state.listCounter + 1;
    this.setState({ newList: "", lists: lists, listCounter: newListCounter });
    window.localStorage.setItem("lists", JSON.stringify(this.state.lists));
    window.localStorage.setItem("listCounter", JSON.stringify(newListCounter));
  };
  
  listDeleteHandler = (id) => {
    const lists = [...this.state.lists];
    const updatedLists = lists.filter((list) => list.id != id);
    this.setState({ lists: updatedLists });
    window.localStorage.setItem("lists", JSON.stringify(updatedLists));
  };
  
  dragStart = (e) => {
    e.dataTransfer.setData("listItemText", e.target.children[0].innerText);
    this.setState({ draggedList: e.target.children[0].innerText });
  };
  
  dragOver = (e) => {
    e.preventDefault();
  };
  
  dragEnter = (id, e) => {
    // const draggedObject = e.dataTransfer.getData("listItemText");
    const droppedOnObject = e.target.innerText;
    e.target.style = {color: "red"};
    const lists = [...this.state.lists];
    const targetedList = { ...lists.filter((list) => list.id === id) };
    const draggedIndex = targetedList[0].items.findIndex(
      (item) => item.text.trim() === this.state.draggedList.trim()
      );
      const droppedIndex = targetedList[0].items.findIndex(
        (item) => item.text.trim() === droppedOnObject.trim()
        );
        
        const items = [...targetedList[0].items];
        const removedItem = items.splice(draggedIndex, 1);
        items.splice(droppedIndex, 0, removedItem[0]);
        
        const updatedLists = lists.map((list) => {
          if (list.id === targetedList[0].id) {
            list.items = [...items];
          }
          return list;
        });
        this.setState({ lists: updatedLists });
      };
      
      onDrop = (id, e) => {
        e.preventDefault();
        const draggedObject = e.dataTransfer.getData("listItemText");
        const droppedOnObject = e.target.innerText;
        const lists = [...this.state.lists];
        const targetedList = { ...lists.filter((list) => list.id === id) };
        const draggedIndex = targetedList[0].items.findIndex(
          (item) => item.text.trim() === draggedObject.trim()
          );
          const droppedIndex = targetedList[0].items.findIndex(
            (item) => item.text.trim() === droppedOnObject.trim()
            );
            
            const items = [...targetedList[0].items];
            const removedItem = items.splice(draggedIndex, 1);
            items.splice(droppedIndex, 0, removedItem[0]);
            
            const updatedLists = lists.map((list) => {
              if (list.id === targetedList[0].id) {
                list.items = [...items];
              }
              return list;
            });
            this.setState({ lists: updatedLists });
            window.localStorage.setItem("lists", JSON.stringify(updatedLists));
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
