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
  margin-inline: 20%;
  margin-block: 10px;

  @media (max-width: 680px) {
    height: 7vw;
    margin-block: 3vw;
    width: 30vw;
    padding: 0px 1vw;
  }

  @media (max-width: 450px) {
    margin-block: 4vw;
    font-size: small;
  }
`
