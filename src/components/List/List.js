// package import
import React from "react";
import styled from "styled-components";

// component imports
import ListItem from "./ListItem/ListItem";
import DeleteButton from "../UI/DeleteButton/DeleteButton";

const ListCard = styled.div`
  display: inline-block;
  width: 30rem;
  padding: 3rem;
  background-color: #ffffff;
  border-radius: 2rem;
  margin: 1rem;

  & h3 {
    font-size: 2.4rem;
    color: #f8d57e;
    margin-bottom: 2rem;
  }

  & ul {
    list-style: none;
  }
`;

const NewItem = styled.form`
  display: flex;
  justify-content: space-between;
  /* background-color: #f7f9fc; */
  border: 0.3rem solid #f7f9fc;
  border-radius: 1rem;
  margin: 1rem auto;

  & input {
    border: none;
    font-size: 1.6rem;
    padding: 1rem;
    background-color: transparent;
    outline: none;
    width: 75%;

    &.time {
      padding: 0;
      text-align: center;
      font-size: 1.4rem;
      width: 25%;
      /* background-color: rgba(0, 0, 0, 0.01); */
      border-left: 0.3rem solid #f7f9fc;
    }
  }
`;

const List = (props) => {
  let listItems = "";
  if (props.info.items != []) {
    listItems = props.info.items.map((item) => (
      <ListItem
        item={item}
        key={item.text}
        itemDelete={() => props.itemDelete(item)}
        itemDone={() => props.itemDone(props.info.id, item)}
        show={!item.complete}
      />
    ));
  }

  return (
    <ListCard>
      <h3>{props.info.title}</h3>
      <ul>{listItems}</ul>
      <NewItem onSubmit={props.submit} name={props.info.id}>
        <input
          type="text"
          onChange={(e) => props.changed(props.info.id, e)}
          name={"text"}
          value={props.info.newItem.text}
          id={`textInput${props.info.id}`}
          autoFocus
        />
        <input
          type="text"
          className={"time"}
          onChange={(e) => props.changed(props.info.id, e)}
          name={"time"}
          value={props.info.newItem.time}
        />
        <input type="submit" hidden />
      </NewItem>
      <DeleteButton clicked={() => props.listDelete(props.info.id)} />
    </ListCard>
  );
};

export default List;
