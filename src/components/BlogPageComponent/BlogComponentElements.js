import styled from 'styled-components';
export const AboutContainer = styled.div`
  background: #fff;
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  width: auto;
  height: auto;
`;
export const AboutContainerSubHeading = styled.h2`
  font-family: Roboto;
  font-style: normal;
  font-weight: bold;
  font-size: 36px;
  text-align: center;
  line-height: 42px;
  padding-top:4rem
  color: #010101;

  @media screen and (max-width: 768px) {
    font-size: 28px;
  }
  @media screen and (max-width: 480px) {
    font-size: 20px;
  }
`;
export const AboutContainerPara = styled.p`
  margin-top: 4px;
  font-family: Roboto;
  font-style: normal;
  font-weight: normal;
  font-size: 18px;
  line-height: 21px;
  text-align: justify;
  width: 90%;
  padding: 25px 25px 25px 0px;
  color: #727272;

  max-width: 60rem;
  @media screen and (max-width: 768px) {
    font-size: 20px;
  }
  @media screen and (max-width: 480px) {
    font-size: 18px;
  }
`;
