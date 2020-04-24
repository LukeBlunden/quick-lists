import React from "react";
import styled from "styled-components";

const ListCard = styled.div`
  display: inline-block;
  width: 30rem;
  padding: 3rem;
  background-color: #ffffff;
  border-radius: 2rem;

  & h3 {
    font-size: 2.4rem;
    color: #f8d57e;
  }

  & ul {
    list-style: none;
  }
`;

const ListItem = styled.div`
  display: flex;
  justify-content: space-between;
  background-color: #f7f9fc;
  border-radius: 1rem;
  margin: 1rem auto;

  & li {
    font-size: 1.6rem;
    padding: 1rem;
  }

  & button {
    border-radius: 0 1rem 1rem 0;
    background-color: rgba(0, 0, 0, 0.01);
    border: none;
    width: 25%;
    font-size: 1.4rem;
  }

  &:hover {
    background-color: #f8d57e;

    & > li {
      text-decoration: line-through;
    }
  }
`;

const NewItem = styled.form`
  display: flex;
  justify-content: space-between;
  /* background-color: #f7f9fc; */
  border: 2px solid #f7f9fc;
  border-radius: 1rem;
  margin: 1rem auto;

  & input {
    border: none;
    font-size: 1.6rem;
    padding: 1rem;
    background-color: transparent;

    &.time {
      padding: 0;
      text-align: center;
      font-size: 1.4rem;
      width: 25%;
      background-color: rgba(0, 0, 0, 0.01);
    }
  }
`;

const List = (props) => {
  const listItems = props.info.items.map((item) => (
    <ListItem>
      <li>{item.text}</li>
      <button>{item.time}</button>
    </ListItem>
  ));

  return (
    <ListCard>
      <h3>{props.info.title}</h3>
      <ul>
        {listItems}
        <NewItem onSubmit={() => props.submit()}>
          <input type="text" />
          <input type="text" className="time" />
          <input type="submit" hidden />
        </NewItem>
      </ul>
    </ListCard>
  );
};

export default List;
