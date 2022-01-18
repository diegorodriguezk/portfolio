import React from 'react';

import { Section, SectionText, SectionTitle } from '../../styles/GlobalComponents';
import Button from '../../styles/GlobalComponents/Button';
import { LeftSection } from './HeroStyles';

const Hero = (props) => (
 <Section row nopadding>
   <LeftSection>
     <SectionTitle main center>
       Hey, I'm Diego. < br/>
       Digital Creator <br />
      

     </SectionTitle>
     <SectionText>
       My Goal is Save The World 
     </SectionText>
     <Button onClick={() => window.location = 'https://google.com'}> Contact Me </Button>
   </LeftSection>
 </Section>
);

export default Hero;