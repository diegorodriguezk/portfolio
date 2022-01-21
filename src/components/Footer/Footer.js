import React from 'react';
import { AiFillGithub, AiFillInstagram, AiFillLinkedin } from 'react-icons/ai';

import { SocialIcons } from '../Header/HeaderStyles';
import { Section, SectionTitle, CompanyContainer, FooterWrapper, LinkColumn, LinkItem, LinkList, LinkTitle, Slogan, SocialContainer, SocialIconsContainer } from './FooterStyles';

const Footer = () => {
  return (
    
    <FooterWrapper> 
      {/* <Section> 
      <SectionTitle> </SectionTitle>
      </Section> */}
      <LinkList>
        <LinkColumn>
        <LinkTitle>Call</LinkTitle>
        <LinkItem href='tel:786-622-4587'>(786) 622-4587</LinkItem>
          </LinkColumn>
          
        <LinkColumn>
        <LinkTitle>Email</LinkTitle>
        <LinkItem href='mailto:info@diegorodriguez.me'>info@diegorodriguez.me</LinkItem>
          </LinkColumn>
      </LinkList>
    <SocialIconsContainer>
      <CompanyContainer>
        <Slogan>Innovating one project at a time</Slogan>
      </CompanyContainer>

      <SocialIcons href="https://github.com/diegorodriguezk">
          <AiFillGithub size="3rem" />
        </SocialIcons>
        <SocialIcons href="https://www.linkedin.com/in/diego-rodriguez-6ab01718b/">
          <AiFillLinkedin size="3rem" />
        </SocialIcons>
        <SocialIcons href="https://instagram.com/diegorodriguezk">
          <AiFillInstagram size="3rem"/>
        </SocialIcons>
      
    </SocialIconsContainer>
     
    </FooterWrapper>
  );
};

export default Footer;
