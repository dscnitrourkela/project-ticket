import styled from 'styled-components'

export const FooterContainer = styled.div`
  border-top: 2.8px solid;

  border-image-source: linear-gradient(
    270deg,
    rgba(221, 221, 221, 0) -4.84%,
    rgba(237, 194, 252, 0.48) 51.01%,
    rgba(221, 221, 221, 0) 104.96%
  );
  border-image-slice: 1;

  padding: 1.5vw 2vw;
  display: flex;
  flex-direction: row;
  justify-content: space-between;

  @media (max-width: 500px) {
    flex-direction: column;
  }
`
export const FooterItems = styled.span`
  border: 0px solid red;
  font-size: small;
  margin: 0vw 2vw;
  padding: 0vw 2vw;
  &:hover {
    border-bottom: 2px solid;

    border-image-source: linear-gradient(
      270deg,
      rgba(221, 221, 221, 0) -4.84%,
      rgba(237, 194, 252, 0.48) 51.01%,
      rgba(221, 221, 221, 0) 104.96%
    );
    border-image-slice: 1;
  }

  @media (max-width: 500px) {
    flex-direction: column;
    margin: 1vw auto;
  }

  @media (max-width: 400px) {
    font-size: 8px;
  }
`

export const HNlink = styled.a`
  text-decoration: none;
  color: rgb(218, 115, 255);

  &:hover {
    color: rgb(248, 175, 255);
  }
`
