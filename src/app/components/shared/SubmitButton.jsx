import styled from 'styled-components'

export const SubmitButton = styled.button`
  height: 42px;
  width: 165px;
  background-color: #bc00fe;
  color: white;
  border: none;
  border-radius: 28px;
  padding: 0px 32px;
  text-align: center;
  text-decoration: none;
  font-size: 16px;
  cursor: pointer;
  margin: 10px 20%;

  @media (max-width: 680px) {
    height: 7vw;
    margin: 3vw 20%;
    width: 30vw;
    padding: 0px 1vw;
  }

  @media (max-width: 450px) {
    margin: 4vw 20%;
    font-size: small;
  }
`
