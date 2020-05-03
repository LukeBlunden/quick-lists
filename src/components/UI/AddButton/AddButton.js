import React from "react";
// import styled from "styled-components";

// const AddButton = styled.button`
//   margin-left: -7rem;
//   margin-top: 2rem;
//   background-color: transparent;
//   border: none;
//   border-radius: 2rem;
//   cursor: pointer;
//   font-size: 4rem;
//   color: lightgray;
//   height: 4rem;
//   width: 4rem;
//   outline: none;

//   &:hover {
//     color: #00c9b2;
//   }
// `;

const addButton = (props) => {
  return <button onClick={props.clicked}>+</button>;
};

export default addButton;
