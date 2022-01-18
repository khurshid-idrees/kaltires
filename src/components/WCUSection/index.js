import React from "react";
import {
  WCUContainer,
  BluedotContainer,
  BlueDot,
  WCUHeding,
  WCUSubHeding,
  WCUContent,
  WCUCardContainer,
  WCUCard,
  WCUCardImage,
  WCUCardContent,
  WCUCHeading,
  WCUCParagraph,
  WCUCButton,
  GroupContent,
} from "./WCUSectionElement";
import TireFeaturing from "../../images/WCUTire.png";

const WCUSection = ({ isOpen, toggle }) => {
  return (
    <WCUContainer id="Advantages">
      <WCUContent>
        <WCUHeding>Advantages</WCUHeding>
        <WCUSubHeding>WHY CHOOSE US</WCUSubHeding>
      </WCUContent>
      <WCUCardContainer>
        <WCUCard>
          <WCUCardContent>
            {/* <BlueDot/> */}
            <GroupContent>
              <BluedotContainer>
                <BlueDot></BlueDot>
                <WCUCHeading>24/7 Nationalwide Road Services</WCUCHeading>
              </BluedotContainer>
              <BluedotContainer>
                <BlueDot></BlueDot>
                <WCUCHeading>On Site Services</WCUCHeading>
              </BluedotContainer>
            </GroupContent>
          </WCUCardContent>

          <WCUCardContent>
            {/* <BlueDot/> */}
            <GroupContent>
              <BluedotContainer>
                <BlueDot></BlueDot>
                <WCUCHeading>Scheduled Maintainence Program</WCUCHeading>
              </BluedotContainer>
              <BluedotContainer>
                <BlueDot></BlueDot>
                <WCUCHeading>Mounted Wheel Program</WCUCHeading>
              </BluedotContainer>
            </GroupContent>
          </WCUCardContent>
        </WCUCard>
        <WCUCard>
          <img
            src={TireFeaturing}
            alt="Standstill Tire For Faturing Why Choose Us"
          />
        </WCUCard>
        <WCUCard>
          <WCUCardContent>
            {/* <BlueDot/> */}
            <GroupContent>
              <BluedotContainer>
                <BlueDot></BlueDot>
                <WCUCHeading>Trucks And Trailers Alignments</WCUCHeading>
              </BluedotContainer>
              <BluedotContainer>
                <BlueDot></BlueDot>
                <WCUCHeading>Heavy Duty Front-End Work</WCUCHeading>
              </BluedotContainer>
            </GroupContent>
          </WCUCardContent>
          <WCUCardContent>
            {/* <BlueDot/> */}
            <GroupContent>
              <BluedotContainer>
                <BlueDot></BlueDot>
                <WCUCHeading>Tire Mounting and Balancing</WCUCHeading>
              </BluedotContainer>
              <BluedotContainer>
                <BlueDot></BlueDot>
                <WCUCHeading>Pick Up And Delivery Service</WCUCHeading>
              </BluedotContainer>
              <WCUCHeading></WCUCHeading>
            </GroupContent>
          </WCUCardContent>
        </WCUCard>
      </WCUCardContainer>
    </WCUContainer>
  );
};

export default WCUSection;
