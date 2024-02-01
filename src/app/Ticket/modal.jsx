'use client'
/*eslint-disable max-len */

import React from 'react'
import styled from 'styled-components'

const StyledModal = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: linear-gradient(
    90deg,
    rgba(230, 230, 230, 0.4) 30%,
    rgba(240, 240, 255, 0.6) 43%,
    rgba(230, 230, 230, 0.4) 100%
  );
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 2;
`

const ModalContent = styled.div`
  width: 50%;
  height: auto;
  border: 0px solid red;
  position: relative;
  @media (max-width: 680px) {
    width: 80%;
  }
`

const CloseButton = styled.button`
  position: absolute;
  top: 4vw;
  right: 5vw;
  cursor: pointer;
  border-radius: 50%;
  border: 1px solid rgba(200, 200, 200, 0.2);
  height: 60px;
  width: 60px;
  font-size: 20px;
  background: linear-gradient(
    97.1deg,
    rgba(247, 225, 255, 0.88) 11.37%,
    rgba(218, 115, 255, 0.58) 102.95%
  );

  &:hover {
    background: linear-gradient(
      97.1deg,
      rgba(247, 225, 255, 2) 11.37%,
      rgba(218, 115, 255, 1) 102.95%
    );
  }

  @media (max-width: 550px) {
    top: 20vw;
    width: 40px;
    height: 40px;
  }
`
const CloseImg = styled.img`
  width: 100%;
  height: 100%;
`

const Modal = ({ show, onClose, children }) => {
  if (!show) {
    return null
  }

  return (
    <StyledModal>
      <CloseButton onClick={onClose}>
        <CloseImg
          src="https://res.cloudinary.com/djl2ulktr/image/upload/v1706404927/Close_round_duotone_rryxiz.png"
          width={100}
          height={100}
          alt="close"
        />
      </CloseButton>
      <ModalContent>{children}</ModalContent>
    </StyledModal>
  )
}

export default Modal
