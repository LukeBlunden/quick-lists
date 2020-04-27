import React from "react";
import styled from "styled-components";

const ListItem = styled.li`
  display: grid;
  max-width: 100%;
  grid-template-columns: 4fr 1fr;
  justify-content: space-between;
  background-color: #f7f9fc;
  background-color: ${(props) => (props.show ? `#F7F9FC` : `#FFEFCA`)};
  border-radius: 1rem;
  margin: 1rem auto;
  cursor: pointer;
  text-decoration: ${(props) => (props.show ? `none` : `line-through`)};

  & label {
    font-size: 1.6rem;
    padding: 1rem;
    cursor: pointer;
    /* width: 100%; */
  }

  & .text {
    /* max-width: 80%; */
    word-wrap: break-word;
  }

  & .time {
    border-radius: 0 1rem 1rem 0;
    background-color: rgba(0, 0, 0, 0.01);
    border: none;
    /* width: 20%; */
    text-align: center;
  }

  &:hover {
    background-color: #f8d57e;
    text-decoration: line-through;
  }
`;

const listItem = (props) => {
  return (
    // <ListItem onClick={props.itemDelete} >
    <ListItem
      onClick={props.itemDone}
      show={props.show}
      draggable={"true"}
      onDragStart={props.dragStart}
      onDragEnter={props.dragEnter}
      onDragOver={props.dragOver}
      onDrop={props.onDrop}
    >
      <label className={"text"}>{props.item.text}</label>
      <label className={"time"}>{props.item.time}</label>
    </ListItem>
  );
};

export default listItem;
