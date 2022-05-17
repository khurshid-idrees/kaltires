import React from "react";
import {
  AboutContainer,
  AboutContainerImageContent2,
  SpaceTruck,
  AboutContainerContent,
  AboutContainerTextContent,
  AboutContainerHeading,
  AboutContainerSubHeading,
  AboutContainerPara,
  AboutContainerButton,
  AboutContainerImageContent,
  AboutContainerImage,
} from "./DAboutSectionElement";
import TiresWareHouse from "../../images/TireWarehouse.jpeg";
import { useLocation } from "react-router-dom/cjs/react-router-dom.min";
const DAboutSection = ({ isOpen, toggle }) => {
  const location = useLocation();
  return (
    <AboutContainer id="About">
      <AboutContainerContent>
        <AboutContainerTextContent>
          <AboutContainerHeading>KAL TIRES</AboutContainerHeading>
          <AboutContainerSubHeading>Who we are</AboutContainerSubHeading>
          <AboutContainerPara>
            Kal Tires has 9 distribution centers, 4 service centers and
            nationwide 24/7 emergency road service. Exclusive with major tire
            manufactures such as Goodyear, Cooper, BKT, Michelin, Yokohama,
            Double Coin, Pirelli and Hankook. We offer national account billing
            for Goodyear, Cooper, Michelin, Yokohama and Hankook products.
          </AboutContainerPara>
          {/* <AboutContainerButton>See more</AboutContainerButton> */}
        </AboutContainerTextContent>
        <AboutContainerImageContent>
          <img src={TiresWareHouse} alt="" />
        </AboutContainerImageContent>
      </AboutContainerContent>
      {/* <AboutContainerImageContent2>
          <img src={bgimage} alt="" height="460px"/>
            </AboutContainerImageContent2> */}
    </AboutContainer>
  );
};

export default DAboutSection;
