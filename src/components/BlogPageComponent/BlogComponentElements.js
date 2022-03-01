import styled from 'styled-components';
import bgimage from '../../images/Bg.png';
export const AboutContainer = styled.div`
  background: #fff;
  display: flex;
  postion: relative;

  flex-direction: column;
  justify-content: space-around;
  width: auto;
  height: auto;
`;
export const AboutContainerSubHeading = styled.h2`
  font-family: sans-serif;
  font-style: normal;
  zindex: 1;
  font-weight: bold;
  
  font-size: 46px;
  display: block;
  postion: absolute;
 
  line-height: 42px;
  padding-top:4rem
  color: #010101;
  padding-right: 2rem;

  @media screen and (max-width: 768px) {
    font-size: 28px;
  }
  @media screen and (max-width: 480px) {
    font-size: 20px;
  }
`;
export const BlogContainer1Content = styled.div`
  display: flex;
  flex-direction: row;
`;
export const Containerorlist = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-around;
  width: 100%;
`;
export const BlogContainer1EContent = styled.div`
  display: flex;
  flex-direction: column;
`;
export const AboutContainerPara = styled.p`
  margin-top: 4px;
  font-family: sans-serif;
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
export const BlogHero = styled.div`
  background: transparent url(${bgimage}) no-repeat center center;
  position: relative;
  display: block;
  clip-path: ellipse(100% 90% at 49% 9%);
  top: 0;
  left: 0;
  bottom: 0;
  right: 0;
  width: 100%;
  height: 90vh;

  overflow: hidden;
  @media screen and (max-width: 768px) {
    height:100%
    width:100%  
  }
`;
