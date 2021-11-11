import React from 'react'
import {WWOContainer,WWOHeding,WWOSubHeding,WWOContent,WWOCardContainer,WWOCArd,WWOCArdImage,WWOCardContent,WWOCCHeading,WWOCCParagraph,WWOCCButton,WWOCardimage} from './WWOSectionElement'
import CommercialTire from '../../images/CommercialTire.png'
import IndustrialTire from '../../images/IndustrialTire.png'
import EarthMoverTire from '../../images/EarthMoverTire.png'
const WWOSection = ({isOpen,toggle}) => {
    return (
      <WWOContainer id="Products">
          <WWOContent>
              {/* <WWOHeding>PRODUCTS</WWOHeding> */}
              <WWOSubHeding>WHAT WE OFFER</WWOSubHeding>
          </WWOContent>
          <WWOCardContainer>
              <WWOCArd>
                  <WWOCardimage>
                  <img src={CommercialTire} alt="Fast Durabel and friendly Lots of Black Tire on Top of Each Other"  />
                  </WWOCardimage>
                  
                  <WWOCardContent>
                      <WWOCCHeading>Commercial Tires</WWOCCHeading>
                      <WWOCCParagraph>The Right Tires For Your Fleet. It’s easy to find the right total solution for your fleet. With a wide selection of innovative commercial truck tires and services to back them up, your fleet can start saving today.</WWOCCParagraph>
                      {/* <WWOCCButton>See More</WWOCCButton> */}
                  </WWOCardContent>
              </WWOCArd>
              <WWOCArd>
              <WWOCardimage><img src={IndustrialTire} alt="Industrial Tire Clean Black Solid for loading or excavating, lifting or material handling" /></WWOCardimage>
                  
                  <WWOCardContent>
                      <WWOCCHeading>Industrial Tires</WWOCCHeading>
                      <WWOCCParagraph> Whether it is loading or excavating, lifting or material handling – you are looking for reliable high-performance tires so that you can do your job in full safety. Browse for your tire based on your specific type of industrial machinery</WWOCCParagraph>
                      {/* <WWOCCButton>See More</WWOCCButton> */}
                  </WWOCardContent>
              </WWOCArd>
              <WWOCArd>
              <WWOCardimage><img src={EarthMoverTire} alt="" /></WWOCardimage>
                  
                  <WWOCardContent>
                      <WWOCCHeading>Earthmover Tires</WWOCCHeading>
                      <WWOCCParagraph> Mining and construction are the toughest sectors on Earth. So are the requirements for equipment – and tires, of course. Browse for your tire to see which performance features best suit your specific needs</WWOCCParagraph>
                      {/* <WWOCCButton>See More</WWOCCButton> */}
                  </WWOCardContent>
              </WWOCArd>
          </WWOCardContainer>
          
      </WWOContainer>
      
    )
}

export default WWOSection