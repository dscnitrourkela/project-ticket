import styled from 'styled-components'

export const AuthButton = styled.button`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  padding: 12px 22px;
  width: 100%;
  cursor: pointer;
  border-radius: 11px;
  margin: 1.6vw auto;
  border: 1.8px solid rgba(232, 142, 255, 0.6);
  background: linear-gradient(180deg, rgba(232, 142, 255, 0.2) 60%, rgba(232, 240, 255, 0.1));

  backdrop-filter: blur(25px);
  color: white;
  &:hover {
    background: rgba(220, 150, 225, 0.6);
    border: 1.8px solid rgba(255, 200, 255, 1);
  }

  @media (max-width: 540px) {
    border: 1.5px solid rgba(232, 142, 255, 0.9);
    padding: 1.5vw;
    margin: 5vw auto;
  }
`

export const AuthLogoImg = styled.img`
  margin: 0vw 0.5vw;
  height: 20px;
  width: auto;
`
export const CenterText = styled.p`
  text-align: center;
  color: rgb(255, 170, 255);
`
