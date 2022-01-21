import React from 'react';
import { DiFirebase, DiReact, DiZend } from 'react-icons/di';
import { FaShopify } from "react-icons/fa";
import { FiFigma } from "react-icons/fi";
import { Section, SectionDivider, SectionText, SectionTitle } from '../../styles/GlobalComponents';
import { List, ListContainer, ListItem, ListParagraph, ListTitle } from './TechnologiesStyles';

const Technologies = () =>  (
 <Section id="tech">
   <SectionDivider/>
   <br/>
   <SectionTitle>Technologies</SectionTitle>
   <SectionText>
     I've worked with a range of project in the Digital world.
     From Full-Stack Web Applications to Escale Multichannel eCommerce business
   </SectionText>
   <List>
     <ListItem>
       <DiReact size="3rem" />
       <ListContainer>
         <ListTitle>Full-Stack</ListTitle>
         <ListParagraph>
           Experience with <br/>
           HTML / CSS / JavaScript (React)<br/>
           NodeJS and Python (Flask)

         </ListParagraph>
       </ListContainer>
     </ListItem>
     <ListItem>
       <FiFigma size="3rem" />
       <ListContainer>
         <ListTitle>UI / UX</ListTitle>
         <ListParagraph>
           Experience with <br/>
           Figma, Photoshop and Webflow
         </ListParagraph>
       </ListContainer>
     </ListItem>
     <ListItem>
       <FaShopify size="3rem" />
       <ListContainer>
         <ListTitle>eCommerce</ListTitle>
         <ListParagraph>
           Experience with <br/>
          Shopify, Amazon, eBay and Walmart
         </ListParagraph>
       </ListContainer>
     </ListItem>
  </List>
 </Section>
);

export default Technologies;
