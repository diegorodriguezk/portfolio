import React from 'react';
import { DiFirebase, DiReact, DiZend } from 'react-icons/di';
import { FaShopify } from "react-icons/fa";
import { Section, SectionDivider, SectionText, SectionTitle } from '../../styles/GlobalComponents';
import { List, ListContainer, ListItem, ListParagraph, ListTitle } from './TechnologiesStyles';

const Technologies = () =>  (
 <Section id="tech">
   <SectionDivider/>
   <br/>
   <SectionTitle>Technologies</SectionTitle>
   <SectionText>
     I've worked with a range a technologies in the web development world.
     From Back-end to Design
   </SectionText>
   <List>
     <ListItem>
       <DiReact size="3rem" />
       <ListContainer>
         <ListTitle>Front-End</ListTitle>
         <ListParagraph>
           Experience with <br/>
           React.JS
         </ListParagraph>
       </ListContainer>
     </ListItem>
     <ListItem>
       <DiFirebase size="3rem" />
       <ListContainer>
         <ListTitle>Back-End</ListTitle>
         <ListParagraph>
           Experience with <br/>
           Node.JS and Databases
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
