import styled from 'styled-components'

export const LogoImg = styled.img`
  width: 77px;
  height: 77px;
  @media (max-width: 680px) {
    width: 50px;
    height: 50px;
  }
  @media (max-width: 360px) {
    width: 40px;
    height: 40px;
  }
`
export const StyledNavbar = styled.nav`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  margin: 2vw 0vw;
  padding: 0vw 4vw;
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
  border: 0px solid pink;
  list-style: none;
  color: white;
  text-align: center;
  text-decoration: none;
  margin: 0vw 2vw;

  &:hover {
    border-bottom: 2px solid rgba(218, 115, 255, 0.8);
  }

  a {
    color: inherit;
    text-decoration: none;
  }
`
