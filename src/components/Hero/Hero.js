import React from 'react';

import { Section, SectionText, SectionTitle } from '../../styles/GlobalComponents';
import Button from '../../styles/GlobalComponents/Button';
import { LeftSection } from './HeroStyles';

const Hero = (props) => {

  const handleDownloadResume = () => {
    const resumeDownloadLink = 'https://drive.google.com/u/0/uc?id=1SzdC6qj3iYQB23hTXB7l1AapJ1V3mVU1&export=download';

    const downloadLink = document.createElement('a');
    downloadLink.href = resumeDownloadLink;
    downloadLink.download = 'resume.pdf';
    downloadLink.target = '_blank';
    downloadLink.rel = 'noopener noreferrer';

    downloadLink.click();
  };

  return (
    <>
      <Section row nopadding>
        <LeftSection>
          <SectionTitle main center>
            Welcome To <br />
            My Personal Portfolio
          </SectionTitle>
          <SectionText>
          The purpose of JavaScript Mastery is to help aspiring and established developers to take their development skills to the next level and build awesome apps.
          </SectionText>
          <Button onClick={handleDownloadResume}>Download Resume</Button>
        </LeftSection>
      </Section>
    </>
  );
}

export default Hero;