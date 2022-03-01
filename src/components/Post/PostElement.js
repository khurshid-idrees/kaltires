import { FaBars } from 'react-icons/fa';
import { Link as LinkR } from 'react-router-dom';
import { Link as LinkS } from 'react-scroll';
import styled from 'styled-components';

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
  flex-direction: column;


  cursor: pointer;
  justify-content: center;
  transition: all 0.2s ease-in-out;
  :hover {
    box-shadow: box-shadow: rgba(149, 157, 165, 0.2) 0px 8px 24px;
  }
  @media screen and (max-width: 2068px) {
  
  }
  @media screen and (max-width: 968px) {
    flex-direction: column;
    width: 100%;
    margin: 0px;
  }
`;
export const AboutContainerContentrow = styled.div`
  display: flex;
  flex-wrap: nowrap;
  flex-direction: row;

  justify-content: center;
  transition: all 0.2s ease-in-out;
  // :hover {
  //   box-shadow: box-shadow: rgba(149, 157, 165, 0.2) 0px 8px 24px;
  // }
  @media screen and (max-width: 2068px) {
    margin: 3rem;
  }
  @media screen and (max-width: 968px) {
    flex-direction: column;
    width: 100%;
    margin: 0px;
  }
`;
export const AboutContainerContentrow1 = styled.div`
  padding-left: 10rem;
  padding-top: 10rem;
  padding-bottom: 10rem;
  display: flex;
  flex-wrap: nowrap;
  flex-direction: row;

  transition: all 0.2s ease-in-out;
  // :hover {
  //   box-shadow: box-shadow: rgba(149, 157, 165, 0.2) 0px 8px 24px;
  // }
  // @media screen and (max-width: 2068px) {
  //   margin: 3rem;
  // }
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
  background-color: #fff;
  display: flex;
  padding: 5px 0px;
  width: 15rem;
  flex-direction: column;
  align-items: flex-start;

  justify-content: space-between @media screen and (max-width: 768px) {
    width: 100%;
  }
`;
export const AboutContainerTextContent1 = styled.div`
  background-color: #fff;
  display: flex;
  padding: 0px 0px 10px 5rem;
  width: 40rem;
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
  width: 15rem;
  color: grey;
  background-blend-mode: screen;

  @media screen and (max-width: 769px) {
    width: 100%;
  }
  img {
    height: 15rem;
    width: 20rem;

    @media screen and (max-width: 769px) {
      width: 100%;
    }
  }
`;
export const AboutContainerImageContent1 = styled.div`
  width: 40rem;
  color: grey;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  @media screen and (max-width: 769px) {
    width: 100%;
  }
  img {
    height: 25rem;
    width: 40rem;

    @media screen and (max-width: 769px) {
      width: 100%;
    }
  }
`;
export const AboutContainerImageContent3 = styled.div`
  width: 40rem;
  color: grey;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding-left: 15rem;
  @media screen and (max-width: 769px) {
    width: 100%;
  }
  img {
    height: 25rem;
    width: 40rem;

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
  font-family: sans-serif;
  font-style: bold;
  font-weight: bold;
  margin-top: 10rem;
  font-size: 2rem;
  line-height: 42px;

  color: #111;

  @media screen and (max-width: 768px) {
    font-size: 20px;
  }
  @media screen and (max-width: 480px) {
    font-size: 15px;
  }
`;
export const AboutContainerSubHeading = styled.h2`
  font-family: sans-serif;
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
export const AboutContainerSubHeading1 = styled.h2`
  font-family: sans-serif;
  font-style: normal;
  font-weight: bold;
  font-size: 20px;

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
  font-family: sans-serif;
  font-style: normal;
  font-weight: normal;
  font-size: 24px;

  text-align: justify;
  width: 100%;
  padding: 55px 25px 55px 0px;
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




  color: #fff;
  outline: none;
  border: none;
  display: flex;
  flex-wrap: nowrap;
  flex-direction: column;
  outline: none;
  border: none;

  cursor: pointer;
  justify-content: center;
  transition: all 0.2s ease-in-out;
  :hover {
    box-shadow: box-shadow: rgba(149, 157, 165, 0.2) 0px 8px 24px;
  }
  @media screen and (max-width: 2068px) {
    margin: 3rem;
  }
  @media screen and (max-width: 968px) {
    flex-direction: column;
    width: 100%;
    margin: 0px;
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
  justify-content: center;
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
