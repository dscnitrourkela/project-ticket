import React from 'react'
import styled from 'styled-components'

const ButtonCont = styled.button`
  height: 52px;
  cursor: pointer;
  border: none;
  border-radius: 35px;
  padding: 2.7px;
  margin: 2vw 0vw;

  background: linear-gradient(
    97.1deg,
    rgba(247, 225, 255, 0.38) 11.37%,
    rgba(218, 115, 255, 0.38) 102.95%
  );

  &:hover {
    background: linear-gradient(
      97.1deg,
      rgba(247, 225, 255, 0.88) 11.37%,
      rgba(218, 115, 255, 0.58) 102.95%
    );
  }
`
const InsideButton = styled.button`
  opacity: 1;
  height: 100%;
  width: 100%;
  background: rgba(25, 25, 33, 0.8);
  color: white;
  cursor: pointer;
  border: none;
  border-radius: 35px;
  padding: 12px 60px;

  &:hover {
    background: rgba(25, 25, 33, 0);
    color: black;
  }
`
export const GlobalButton = ({ children }) => {
  return (
    <ButtonCont>
      <InsideButton>{children}</InsideButton>
    </ButtonCont>
  )
}
