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
  margin: 10px auto;

  @media (max-width: 680px) {
    height: 8vw;
    margin: 3vw auto;
    width: 30vw;
    padding: 0px 1vw;
  }

  @media (max-width: 450px) {
    margin: 5vw auto;
    font-size: small;
  }
`
