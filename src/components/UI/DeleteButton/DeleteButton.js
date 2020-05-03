import React from "react";
import styled from "styled-components";

const DeleteButton = styled.button`
  background-color: transparent;
  width: 2rem;
  height: 2rem;
  border: none;
  /* box-shadow: 0 2px 2px rgba(0, 0, 0, 0.1); */
  border-radius: 5rem;
  padding: 0.5rem;
  cursor: pointer;
  margin-top: 1rem;
  outline: none;

  & svg {
    fill: lightgray;
  }

  &:hover > svg {
    fill: #00C9B2;
  }

  /* &:active {
    box-shadow: 0 1px 2px rgba(0, 0, 0, 0.1);
  } */
`;

const deleteButton = (props) => {
  return (
    <DeleteButton onClick={props.clicked}>
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
        {/* <style type="text/css">{`.bin{fill:#1E232D;}`}</style> */}
        <path
          className="bin"
          d="M18 22H6V8H4v13.7C4 22.8 4.9 24 6 24h12c1.1 0 2-1.2 2-2.3V8h-2V22zM15 4V2H9v2H2v2h20V4H15zM9 10v10h2V10H9zM13 10v10h2V10H13z"
        />
      </svg>
    </DeleteButton>
  );
};

export default deleteButton;
