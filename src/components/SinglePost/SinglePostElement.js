import { FaBars } from "react-icons/fa";
import { Link as LinkR } from "react-router-dom";
import { Link as LinkS } from "react-scroll";
import styled from "styled-components";

export const AboutContainer = styled.div`
  background: #fff;
  display: flex;
  flex-direction: column;
  //   align-items: center;
  justify-content: space-around;
  width: auto;
  padding: 200px 0px 0px 100px;
  min-height: 100vh;
  height: auto;
`;
export const AboutContainerContent = styled.div`
  display: flex;
  flex-wrap: nowrap;
  flex-direction: row;

  justify-content: space-around;
  margin: 0px 90px 0px 90px;
  padding-right: -30px;
  width: 80%;
  @media screen and (max-width: 2068px) {
    width: 80%;
    margin: 0px;
  }
  @media screen and (max-width: 968px) {
    flex-direction: column;
    width: 100%;
    margin: 0px;
  }
`;
export const SpaceTruck = styled.div`
  display: flex;
  width: 300px;
`;
export const AboutContainerTextContent = styled.div`
  display: flex;
  padding: 55px 0px 10px 10px;
  width: 45%;
  flex-direction: column;
  align-items: flex-start;

  justify-content: space-between @media screen and (max-width: 768px) {
    width: 100%;
  }
`;
export const AboutTireHolder = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
`;
export const ATHSectionInfo = styled.div`
  display: flex;
  flex-direction: column;

  align-items: flex-start;
`;
export const AboutContainerImageContent = styled.div`
  background-size: cover;

  background-blend-mode: screen;
  margin-right: -80px;
  border-top-left-radius: 3px;
  border-top-right-radius: 3px;
  @media screen and (max-width: 769px) {
    width: 100%;
  }
  img {
    height: 420px;
    @media screen and (max-width: 769px) {
      width: 100%;
    }
  }
`;
export const AboutContainerImageContent2 = styled.div`
  position: absolute;

  display: block;

  width: 60%;

  /* padding-right: 200px;
position: absolute;
margin-left: 50%;
margin-top: -8%; */
  background-size: cover;
  height: 18rem;
  background-blend-mode: screen;
  margin-bottom: 20px;
  border-top-left-radius: 3px;
  border-top-right-radius: 3px;
  @media screen and (max-width: 768px) {
    display: none;
  }
`;
export const AboutContainerHeading = styled.div`
  font-family: Roboto;
  font-style: normal;
  font-weight: bold;
  font-size: 16px;
  line-height: 42px;

  color: #ed1c24;

  @media screen and (max-width: 768px) {
    font-size: 20px;
  }
  @media screen and (max-width: 480px) {
    font-size: 15px;
  }
`;
export const AboutContainerSubHeading = styled.h2`
  font-family: Roboto;
  font-style: normal;
  font-weight: bold;
  font-size: 36px;
  line-height: 42px;

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
export const AboutContainerButton = styled(LinkR)`
  display: block;
  border-radius: 50px;
  background: #0074c9;
  padding: 10px 22px;
  white-space: nowrap;
  padding: 10px 22px;
  font-size: 16px;
  color: #fff;
  outline: none;
  border: none;

  cursor: pointer;
  transition: all 0.2s ease-in-out;
  text-decoration: none;

  /* Second Nav */
  @media screen and (max-width: 768px) {
    display: none;
  }

  &:hover {
    transition: all 0.2s ease-in-out;
    background: #fff;
    color: #010606;
  }
`;
export const ContentTextContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
`;
export const MainContentContainer = styled.div`
  display: flex;
  margin: 150px 0px 0px 100px;
  flex-direction: row;
`;
export const TextContainer = styled.div`
  margin-top: 4px;
  Font family: Poppins
  Font style: Light
  Font size: 28px
  Line height: 42px
  Line height: 100%
  Align: Left
  text-align: justify;
  width: 90%;
  padding: 25px 25px 25px 0px;
  color: #000000;

  max-width: 60rem;
  @media screen and (max-width: 768px) {
    font-size: 20px;
  }
  @media screen and (max-width: 480px) {
    font-size: 18px;
  }
`;
export const ListBlogContainer = styled.div`
  display: flex;
  flex-direction: column;
`;
export const OneListBlogContainer = styled.div`
  display: flex;
  flex-direction: column;
`;
export const OLBCDateContainer = styled.div`
margin-top: 4px;
Font family: Poppins
Font style: Light
Font size: 28px
Line height: 42px
Line height: 100%
Align: Left
text-align: justify;
width: 90%;
padding: 25px 25px 25px 0px;
color: #000000;

max-width: 60rem;
@media screen and (max-width: 768px) {
  font-size: 20px;
}
@media screen and (max-width: 480px) {
  font-size: 18px;
}
`;
export const OLBCHeadingContainer = styled.div`
margin-top: 4px;
Font family: Poppins
Font style: Light
Font size: 28px
Line height: 42px
Line height: 100%
Align: Left
text-align: justify;
width: 90%;
padding: 25px 25px 25px 0px;
color: #000000;

max-width: 60rem;
@media screen and (max-width: 768px) {
  font-size: 20px;
}
@media screen and (max-width: 480px) {
  font-size: 18px;
}
`;
export const OneListBlogImageContent = styled.div`
  background-size: cover;

  background-blend-mode: screen;
  margin-right: -80px;
  border-top-left-radius: 3px;
  border-top-right-radius: 3px;
  @media screen and (max-width: 769px) {
    width: 100%;
  }
  img {
    height: 160px;
    @media screen and (max-width: 769px) {
      width: 100%;
    }
  }
`;
