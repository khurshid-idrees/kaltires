import React from 'react';
import {
  WWOCArd,
  WWOCardContent,
  WWOCCHeading,
  WWOCCParagraph,
  WWOCCButton,
} from './QuoteAtEndElements';
import { Link } from 'react-scroll'; 

const QuoteAtEnd = ({ isOpen, toggle }) => {
  return (
    <WWOCArd>
      <WWOCardContent>
        <WWOCCHeading>YOU DONT KNOW HOW TO MOVE YOUR TIRES?</WWOCCHeading>
        <WWOCCParagraph>
          We are always happy to hear from you, whether you have questions, want
          to share comments or need our help solving any problems related to
          Tires we have 24 Hour Support. So whenever you have a doubt or any
          question, we will make sure to direct your concerns and Provide an
          Effective solution. You can call, email or find us directly at our
          place.
        </WWOCCParagraph> 
        <WWOCCButton href="tel:800-808-0025">   
          24/7 COMMERCIAL ROADSIDE SERVICE - CALL NOW    
        </WWOCCButton>
      </WWOCardContent>   
    </WWOCArd>  
  );
};

export default QuoteAtEnd;   
