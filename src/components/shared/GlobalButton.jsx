import React from 'react'
import styled from 'styled-components'

const ButtonCont = styled.span`
  height: 52px;
  cursor: pointer;
  border: none;
  border-radius: 35px;
  padding: 2.7px;
  margin: 0vw;

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

  @media (max-width: 680px) {
    padding: 2px;
    height: 8vw;
    min-width: 25vw;
    margin: 3vw 2vw;
  }

  @media (max-width: 450px) {
    font-size: small;
    min-height: 10vw;
  }
`

const InsideButton = styled.button`
  opacity: 1;
  height: 100%;
  width: 100%;
  text-align: center;
  background: rgba(25, 25, 33, 0.8);
  cursor: pointer;
  border: none;
  border-radius: 35px;
  padding: 12px 60px;

  &:hover {
    background: rgba(25, 25, 33, 0);
    color: black;
  }

  @media (max-width: 680px) {
    padding: 1vw;
  }
  @media (max-width: 450px) {
    padding: 2vw;
  }
`

export const GlobalButton = ({ onClick, children }) => {
  return (
    <ButtonCont onClick={onClick}>
      <InsideButton>{children}</InsideButton>
    </ButtonCont>
  )
}
