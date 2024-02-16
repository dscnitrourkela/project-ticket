import styled from 'styled-components'
import { SubmitButton } from '../../components/shared/SubmitButton'
import { GlobalButton } from '../../components/shared/GlobalButton'

const TicketImgBg = styled.div`
  width: 660px;
  height: 390px;
  position: absolute;
  border: 4px solid hotpink;
  margin: 0px;
  border-radius: 5px;
`

export const ShareButton = styled(GlobalButton)`
  background-color: pink;
  margin: 10vw 2vw;
`
export const TicketPage = styled.div`
  border: 0px solid white;
  display: flex;
  flex-direction: column;
  align-items: center;
  margin: 10px 45px;
  padding: 0px 0px 10px 0px;

  @media (max-width: 800px) {
    padding: 1vw 0px;
  }
`

export const TicketContainer = styled.div`
  width: 98%;
  height: auto;
  border: 0px solid white;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  padding: 20px;
  @media (max-width: 980px) {
    flex-direction: column;
    align-items: center;
  }
`
export const FormBg = styled.div`
  height: auto;
  width: auto;
  margin: 0vw 2.5vw;
  align-items: center;
  border: 1.5px solid;
  border-image-source: linear-gradient(212.47deg, #bd00ff 0%, rgba(0, 0, 0, 0) 44.37%);
  border-image-slice: 1;
  border-radius: 10px;

  background: linear-gradient(212.47deg, rgba(189, 0, 255, 0.2) 0%, rgba(0, 0, 0, 0) 44.37%);
  box-shadow: 0px 18px 59.599998474121094px 0px #cc3cff1a inset;

  @media (max-width: 980px) {
    margin: 2vw 0vw;
  }
  @media (max-width: 680px) {
    margin: 6vw 0vw;
  }
`
export const FormSection = styled.div`
  opacity: 1;
  width: 458px;
  height: 278px;
  display: flex;
  flex-direction: column;
  justify-content: end;
  padding: 3vw 1.5vw 1vw 1.5vw;
  background: linear-gradient(
    180deg,
    rgba(156, 154, 255, 0.1) 0%,
    rgba(234, 173, 255, 0.084) 123.17%
  );

  border-radius: 10px;
  box-shadow: -1px 2px 9.800000190734863px 0px #ffffff40 inset;

  @media (min-width: 980px) and (max-width: 1200px) {
    width: 35vw;
  }
  @media (max-width: 680px) {
    width: 68vw;
    min-height: 35vw;
  }
  @media (max-width: 450px) {
    height: 64vw;
  }
`

export const FormText = styled.p`
  border: 0px solid pink;
  margin: 20px 0px 5px 0px;
  @media (max-width: 680px) {
    height: 10px;
    margin: 3vw 2vw;
  }
`

export const Input = styled.input`
  background: linear-gradient(0deg, rgba(225, 225, 225, 0.06), rgba(225, 225, 225, 0.06));
  height: 19px;
  padding: 10px;
  margin: 5px 0px 15px 0px;
  border-radius: 11px;
  border: 1.8px solid #e88eff33;

  &:focus {
    outline: none;
    background: linear-gradient(0deg, rgba(232, 142, 255, 0.2), rgba(232, 142, 255, 0.2));
    border-color: #e88eff;
  }

  @media (max-width: 680px) {
    margin: 1vw 2vw;
  }
  @media (max-width: 680px) {
    height: 10px;
  }
  @media (max-width: 460px) {
    height: 6px;
  }
`
export const UpdateButton = styled(SubmitButton)`
  margin-inline: auto;
`

export const PreviewBg = styled.div`
  height: auto;
  width: auto;
  margin: 0vw 2.5vw;
  align-items: center;
  border: 1.5px solid;
  border-radius: 10px;
  border-image-source: linear-gradient(132.59deg, #bd00ff 1.4%, rgba(0, 0, 0, 0) 34.46%);
  border-image-slice: 1;

  background: linear-gradient(132.59deg, rgba(189, 0, 255, 0.2) 5.4%, rgba(0, 0, 0, 0) 34.46%);
  box-shadow: 0px 18px 59.599998474121094px 0px #cc3cff1a inset;

  @media (max-width: 980px) {
    margin: 2vw 0vw;
  }
`
export const PreviewCont = styled.div`
  opacity: 1;
  width: 513px;
  height: 338px;
  display: flex;
  flex-direction: column;
  justify-content: end;
  background: linear-gradient(
    180deg,
    rgba(156, 154, 255, 0.1) 0%,
    rgba(234, 173, 255, 0.084) 123.17%
  );

  border-radius: 10px;
  box-shadow: -1px 2px 9.800000190734863px 0px #ffffff40 inset;

  @media (min-width: 980px) and (max-width: 1200px) {
    width: 35vw;
  }
  @media (max-width: 680px) {
    width: 68vw;
    min-height: 40vw;
  }
  @media (max-width: 450px) {
    height: 64vw;
  }
`
export const GridCont = styled.div`
  position: relative;
  opacity: 1;
  width: 100%;
  height: 99%;
  margin: auto 0px;
  display: grid;
  grid-template-columns: repeat(16, 1fr);
  grid-template-rows: repeat(1, 1fr);
  gap: 1px;

  border: 0px solid red;
  border-radius: 10px;

  @media (min-width: 980px) and (max-width: 1200px) {
    width: 35vw;
  }
  @media (max-width: 680px) {
    width: 68vw;
    min-height: 40vw;
  }
  @media (max-width: 450px) {
    height: 64vw;
  }
`
export const GridLines = styled.div`
  width: 1.8vw;
  background-color: rgba(156, 154, 255, 0);
  border-right: 3px solid rgba(165, 148, 176, 0.3);
  height: 100%;

  @media (max-width: 680px) {
    min-height: 40vw;
  }
`
export const TicketCompontent = styled(TicketImgBg)`
  border: 0px solid pink;
  position: absolute;
  left: 2.1vw;
  top: 2.5vw;
  width: 439px;
  height: 250px;
  transform: rotate(-5.4deg);
  &:hover {
    transform: rotate(0deg);
    transition: 0.2s;
  }

  @media (min-width: 980px) and (max-width: 1200px) {
    width: 32vw;
    height: 20vw;
    top: 5vw;
    left: 1.5vw;
  }
  @media (max-width: 980px) {
    width: 50vw;
    height: 32vw;
    left: 4vw;
    top: 4vw;
  }
  @media (max-width: 680px) {
    width: 63vw;
    height: 42vw;
    top: 8vw;
    left: 2vw;
  }
`

export const ArrayHolder = styled.div`
  width: 100%;
  height: 40px;
  border: 0px solid white;
  display: flex;
  flex-direction: row;
  justify-content: end;
  align-items: center;
  @media (max-width: 980px) {
    justify-content: center;
  }
  @media (max-width: 680px) {
    flex-direction: column;
    justify-content: space-around;
  }
`
export const ColorText = styled.p`
  border: 0px solid pink;
`
export const ColorArray = styled.div`
  border: 0px solid pink;
  flex: 0.4;
  display: flex;
  flex-direction: row;
  justify-content: center;
`
export const ClrButton = styled.span`
  height: 25px;
  width: 25px;
  margin: 1.5vw 1vw;
  cursor: pointer;
  border-radius: 5px;
  @media (max-width: 450px) {
    height: 18px;
    width: 18px;
    margin: 2vw 2vw;
  }
`

export const ModalPage = styled.div`
  height: 100%;
  width: 100%;
  margin: 0px;
`
export const PreviewButton = styled.button`
  height: 52px;
  cursor: pointer;
  border: none;
  border-radius: 35px;
  margin: 1vw 2vw;
  padding: 0vw 2vw;
  background: linear-gradient(
    97.1deg,
    rgba(247, 225, 255, 0.38) 11.37%,
    rgba(218, 115, 255, 0.38) 102.95%
  );
  &:hover {
    background: rgba(247, 225, 255, 0.8);
    color: black;
  }

  @media (max-width: 680px) {
    padding: 1vw;
    height: 50px;
  }
  @media (max-width: 450px) {
    padding: 2vw;
    height: 32px;
  }
`
