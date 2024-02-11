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

export const Hero = styled.div`
  position: relative;
  margin: 0px;
`

export const FormBox = styled.div`
  width: 400px;
  height: 660px;
  position: relative;
  margin: 2vw auto;
  padding: 5px;
  overflow: hidden;
  backdrop-filter: blur(16px) saturate(180%);
  -webkit-backdrop-filter: blur(16px) saturate(180%);
  background-color: rgba(17, 25, 40, 0.75);
  border-radius: 12px;
  border: 1px solid rgba(255, 255, 255, 0.125);
  gap: 40px;

  @media screen and (max-width: 500px) {
    width: 70vw;
    padding: 2px;
    height: 125vw;
  }
`

export const ButtonBox = styled.div`
  width: 220px;
  height: 40px;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  margin: 35px auto;
  position: relative;
  border: solid rgba(232, 142, 255, 0.2);
  border-radius: 30px;

  @media screen and (max-width: 420px) {
    width: 100px;
    height: 8vw;
    margin: 15px auto;
  }
`

export const ToggleButton = styled.button`
  width: 50%;
  cursor: pointer;
  background: transparent;
  border: 0;
  outline: none;
  position: relative;
  color: white;
`

export const Btn = styled.div`
  top: 0vw;
  left: 0;
  position: absolute;
  width: 50%;
  height: 100%;
  background: rgba(225, 225, 225, 0.06);
  border: solid rgba(232, 142, 255, 0.2);
  border-radius: 30px;
  transition: 0.5s;
`

export const InputGroup = styled.div`
  border: 1px solid rgba(255, 255, 255, 0.125);
  top: 100px;
  position: absolute;
  width: 65%;
  height: auto;
  transition: 0.5s;
  color: white;

  @media screen and (max-width: 500px) {
    top: 18vw;
    width: 50vw;
  }
`

export const SubmitButton = styled.button`
  padding: 2px 20px;
  cursor: pointer;
  display: block;
  margin: auto;
  outline: none;
  width: 30%;
  border-radius: 2.25rem;
  border: 1.8px solid rgba(232, 142, 255, 0.2);
  background: #bc00fe;
  backdrop-filter: blur(25px);
  color: white;
`

export const SignupButton = styled.button`
  padding: 10px 20px;
  cursor: pointer;
  display: block;
  margin: auto;
  outline: none;
  width: 60%;
  border-radius: 2.25rem;
  border: 1.8px solid rgba(232, 142, 255, 0.2);
  background: #bc00fe;
  backdrop-filter: blur(25px);
  color: white;
`

export const Holder = styled.div`
  width: 100%;
  padding: 10px 0;
  margin: 5px 0;
  outline: none;
  border-radius: 0.6875rem;
  border: 1.8px solid rgba(232, 142, 255, 0.2);
  background: rgba(225, 225, 225, 0.06);
  backdrop-filter: blur(25px);
`

export const Login = styled(InputGroup)`
  left: ${({ loginFormLeft }) => loginFormLeft || '50px'};
`

export const Register = styled(InputGroup)`
  left: ${({ registerFormLeft }) => registerFormLeft || '450px'};
`

export const CardsA = styled.div`
  position: absolute;
  bottom: 6vw;
  left: 20vw;
  width: 30vw;
  transform: rotate(-18deg);

  @media screen and (max-width: 780px) {
    width: 65vw;
    left: 8vw;
    bottom: 10vw;
  }
`

export const CardsB = styled.div`
  position: absolute;
  bottom: 4vw;
  left: 50%;
  width: 30vw;
  transform: rotate(20deg);

  @media screen and (max-width: 650px) {
    left: 35%;
    width: 55vw;
    bottom: 8vw;
  }
`

export const CardImage = styled.img`
  width: 100%;
`
