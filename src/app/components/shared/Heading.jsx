import styled from 'styled-components'

export const Headings = styled.div`
  border: 1px solid white;
  border-image-source: linear-gradient(
    270deg,
    rgba(221, 221, 221, 0) 0%,
    rgba(237, 194, 252, 0.38) 40.35%,
    rgba(239, 192, 255, 0.464552) 65.36%,
    rgba(221, 221, 221, 0) 96.88%
  );
  border-image-slice: 1;

  text-align: center;
  padding: 1.5vw 2vw;
  width: 156%;
  margin: 1.2vw -33% 0vw -33%;

  background: linear-gradient(180deg, #c464ff -13.76%, rgba(252, 252, 252, 0.33) 128.58%);
  background-clip: text;
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;

  font-size: 40px;
  font-style: normal;
  font-weight: 600;
  line-height: 36px;
  @media (max-width: 1000px) {
    font-size: 30px;
  }
  @media (max-width: 640px) {
    font-size: 20px;
  }
`
export const SubHead = styled(Headings)`
  margin: 0vw -34% 0vw -33%;
  font-size: 20px;
  border: none;
  padding: 0.2vw 2vw;
  @media (max-width: 1000px) {
    font-size: 15px;
  }
  @media (max-width: 640px) {
    font-size: 10px;
  }
`
export const HeadBox = styled.div`
  margin: 0 auto;
  width: 30%;
  display: flex;
  flex-direction: column;
  align-items: start;
  justify-content: space-around;

  border: 1px solid white;
  border-image-source: linear-gradient(
    180deg,
    rgba(221, 221, 221, 0) 0%,
    rgba(237, 194, 252, 0.24) 20.35%,
    rgba(239, 192, 255, 0.304552) 72.36%,
    rgba(221, 221, 221, 0) 96.88%
  );
  border-image-slice: 1;

  @media (max-width: 1000px) {
    width: 50%;
  }
`
export const TitleCont = styled.div`
  width: 140%;
  margin: 0 -20% 0 -20%;
  padding: 0.2vw 0vw;
  border: 1px solid white;
  border-image-source: linear-gradient(
    270deg,
    rgba(221, 221, 221, 0) 0%,
    rgba(237, 194, 252, 0.38) 40.35%,
    rgba(239, 192, 255, 0.464552) 65.36%,
    rgba(221, 221, 221, 0) 96.88%
  );
  border-image-slice: 1;
`

export const Title = styled.h1`
  text-align: center;
  width: 30%;
  margin: 1vw auto;
  border: 1px solid white;
  border: 1.85px solid;

  border-image-source: linear-gradient(
    97.1deg,
    rgba(247, 225, 255, 0.58) 11.37%,
    rgba(218, 115, 255, 0.58) 102.95%
  );

  background: linear-gradient(180deg, #ffffff 0%, rgba(255, 255, 255, 0) 100%);
  background-clip: text;
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
`
