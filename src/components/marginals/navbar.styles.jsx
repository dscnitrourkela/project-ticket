import styled from 'styled-components'

export const LogoContainer = styled.a`
  padding: 0px;
`
export const LogoImg = styled.img`
  padding: 0px;
  box-shadow: 0px 0px 14px 6px rgba(196, 100, 255, 0.25);
  border-radius: 50%;
  width: 70px;
  height: 70px;
  @media (max-width: 680px) {
    width: 50px;
    height: 50px;
  }
  @media (max-width: 360px) {
    width: 40px;
    height: 40px;
  }
  &:hover {
    box-shadow: 0px 0px 14px 8px rgba(196, 100, 255, 0.28);
  }
`
export const StyledNavbar = styled.nav`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  margin: 0vw;
  padding: 0vw 1vw 0vw 1vw;
  overflow: hidden;
  border: 2px solid;
  border-image-source: linear-gradient(
    270deg,
    rgba(221, 221, 221, 0) 0%,
    rgba(237, 194, 252, 0.38) 51.35%,
    rgba(239, 192, 255, 0.464552) 56.36%,
    rgba(221, 221, 221, 0) 96.88%
  );
  border-image-slice: 1;
`

export const NavItem = styled.li`
  padding: 1.2vw 4vw;
  border: 0px solid pink;
  list-style: none;
  color: white;
  text-align: center;
  text-decoration: none;
  margin: 0vw 0vw 0vw 5vw;
  padding: 0vw 0vw 0vw 2vw;

  &:hover {
    border: 1.85px solid;
    border-image-source: linear-gradient(
      270deg,
      rgba(221, 221, 221, 0) 0%,
      rgba(237, 194, 252, 0.38) 40.35%,
      rgba(239, 192, 255, 0.464552) 60.36%,
      rgba(221, 221, 221, 0) 96.88%
    );
    border-image-slice: 1;
  }

  a {
    color: inherit;
    text-decoration: none;
  }
`
