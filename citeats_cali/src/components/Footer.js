import React from
 
"react";
import styled from
 
"styled-components";

const FooterContainer = styled.div`
  width: 100%;
  height: 100px;
  background-color: white;
  color: Black;
  display: flex;
  align-items: center;
  justify-content: center;
box-shadow: 0 2px 4px rgba(0.5, 0.5, 0.5, 0.5);

`;

const FooterImage = styled.img`
  height: 100px;
  width: 400px;
  margin-right: 10px;
`;

const FooterText = styled.p`
  font-size: 16px;
  margin-bottom: 0;
`;

const Footer = () => {
  return (
    <FooterContainer>
      <FooterImage src="logo.png" alt="CIT Logo" />
      <FooterText>Contact Us:   N. Bacalso Avenue, Cebu City , Philippines 6000   +63 32 411 2000  info@cit.edu</FooterText>
    </FooterContainer>
  );
};

export default Footer;