import React, { useState } from 'react';
import {
  HeroContainer,
  HeroH1,
  HeroP,
  HeroContent,
  HeroBg,
  HeroPromoContainer,
  HeroPromo,
} from './HeroElements';
import Coopetire from '../../images/Promo1.png';
import Michelin from '../../images/Promo2.png';
import GoodYear from '../../images/Promo3.png';
import GKTYre from '../../images/promo4.png';
import BKTGrowingTogether from '../../images/Promo5.png';
import Continental from '../../images/promo8.png';
const HeroSection = () => {
  const [hover, setHover] = useState(false);
  const onHover = () => {
    setHover(!hover);
  };
  return (
    <HeroContainer id="Home">
      <HeroBg></HeroBg>
      <HeroContent>
        <HeroH1>KAL TIRES</HeroH1>
        <HeroP>BECAUSE SO MUCH IS RIDING ON YOUR TIRES</HeroP> 
      </HeroContent>
      <HeroPromoContainer>
        <HeroPromo>
          <img src={Michelin} alt="Partner Company" />
        </HeroPromo>
        <HeroPromo>
          <img src={GoodYear} alt="Partner Company" />
        </HeroPromo>

        <HeroPromo>
          <img src={BKTGrowingTogether} alt="Partner Company" />
        </HeroPromo>
        <HeroPromo>
          <img src={Continental} alt="Partner Company" width={'225rem'} />
        </HeroPromo>
      </HeroPromoContainer>
    </HeroContainer>
  );
};

export default HeroSection;
