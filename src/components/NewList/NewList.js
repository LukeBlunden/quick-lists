import React from "react";
import styled from "styled-components";

const NewList = styled.div`
  display: inline-block;
  width: 30rem;
  padding: 3rem;
  background-color: #ffffff;
  border-radius: 2rem;
  margin: 1rem;
`;

const TitleInput = styled.form`
  border: 0.3rem solid #f7f9fc;
  border-radius: 1rem;
  width: 75%;

  & input {
    border: none;
    font-size: 1.6rem;
    padding: 1rem;
    background-color: transparent;
    outline: none;
    width: 100%;
  }
`;

const newList = (props) => {
  return (
    <NewList>
      <TitleInput onSubmit={props.submit} >
        <input
          type="text"
          onChange={props.changed}
          name={"title"}
          value={props.newList.title}
          autoFocus
        />
        <input type="submit" hidden />
      </TitleInput>
    </NewList>
  );
};

export default newList;
