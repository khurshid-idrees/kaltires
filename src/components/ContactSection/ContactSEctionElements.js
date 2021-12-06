import { FaBars } from 'react-icons/fa';
import {  Link as LinkR } from 'react-router-dom';
import {Link as LinkS} from 'react-scroll';
import styled from 'styled-components';
import bgimage from '../../images/ContactTire.png';
export const ContactContainer = styled.div`
 background: #fff;
display:flex;
flex-direction: row;
align-items: center;
padding: 50px;
width: 100%;
height: auto;
&:active{
    
}
`
export const WWOHeding = styled.h1`
z-index: 0;
font-family: Roboto;
font-style: normal;
font-weight: bold;
font-size: 16px;

text-align: center;

color: #ED1C24;

@media screen and (max-width: 768px) {
    font-size: 20px;
}
@media screen and (max-width: 480px) {
    font-size: 18px;
}
`
export const ContactForm = styled.div`
/* display: flex;
flex-direction: column;
align-items: flex-start; */

width: 50%;
@media screen and (max-width: 768px) {
    width: 100%;
  
}
`
export const ContactImage = styled.div`
display: block;
width: 20%;
@media screen and (max-width: 768px) {
  
  display: none;
}
`
export const AboutContainerHeading = styled.div`

font-family: Roboto;
font-style: normal;
font-weight: bold;
font-size: 16px;
line-height: 42px;

color: #ED1C24;

@media screen and (max-width: 768px) {
    font-size: 20px;
}
@media screen and (max-width: 480px) {
    font-size: 15px;
}
`
export const AboutContainerSubHeading = styled.h2`

font-family: Roboto;
font-style: normal;
font-weight: bold;
font-size: 36px;
line-height: 42px;

color: #010101;

@media screen and (max-width: 768px) {
    font-size: 20px;
}
@media screen and (max-width: 480px) {
    font-size: 15px;
}
`