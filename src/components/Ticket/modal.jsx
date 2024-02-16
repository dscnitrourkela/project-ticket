'use client'
/*eslint-disable max-len */
import React from 'react'
import { StyledModal, CloseButton, CloseImg, ModalContent } from './ticket.styles'

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
