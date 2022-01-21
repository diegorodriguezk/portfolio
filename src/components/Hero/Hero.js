import React from 'react';

import { Section, SectionText, SectionTitle } from '../../styles/GlobalComponents';
import Button from '../../styles/GlobalComponents/Button';
import { LeftSection } from './HeroStyles';

const Hero = (props) => (
 <Section row nopadding>
   <LeftSection>
     <SectionTitle main center>
       Hey! I'm Diego. < br/>
      Web Developer <br />
     </SectionTitle>
     <SectionText>
     I’m a multidisciplinary creative leader specializing in building and managing highly productive Web Projects 
     </SectionText>
     <Button onClick={() => window.location = 'mailto:info@diegorodriguez.me'}> Contact Me </Button>
   </LeftSection>
 </Section>
);

export default Hero;