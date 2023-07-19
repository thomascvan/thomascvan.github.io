import React from 'react';

    import { Section, SectionText, SectionTitle,  SectionDivider} from '../../styles/GlobalComponents';
import Button from '../../styles/GlobalComponents/Button';
import { LeftSection, ExternalLinks } from './HeroStyles';

const Hero = (props) => {

  const handleDownloadResume = () => {
    // // const resumeDownloadLink = 'https://drive.google.com/file/d/1SzdC6qj3iYQB23hTXB7l1AapJ1V3mVU1/view?usp=sharing';
    // const resumeDownloadLink = 'https://drive.google.com/u/0/uc?id=1SzdC6qj3iYQB23hTXB7l1AapJ1V3mVU1&export=download';

    // const downloadLink = document.createElement('a');
    // downloadLink.href = resumeDownloadLink;
    // downloadLink.download = 'resume.pdf';
    // downloadLink.target = '_blank';
    // downloadLink.rel = 'noopener noreferrer';

    // downloadLink.click();

    var linkUrl = 'https://drive.google.com/file/d/1SzdC6qj3iYQB23hTXB7l1AapJ1V3mVU1/view?usp=sharing';

    window.open(linkUrl, '_blank');
  };

  return (
    <>
      <Section row nopadding>
        <LeftSection>
          <SectionTitle main center>
            Hi, I'm Thomas 👋
          </SectionTitle>
          <SectionText>
          <em>A highly personable, analytical, results-driven full stack engineer with 10 years of experience solving complex problems both as a support specialist and as a team lead.
          <br/>
          <br/>
          I work in multi-disciplinary teams at all levels.
          <br/>
          <br/>
          I help projects succeed.
          </em>
          </SectionText>
          <ExternalLinks href={'https://drive.google.com/u/0/uc?id=1SzdC6qj3iYQB23hTXB7l1AapJ1V3mVU1&export=download'}>
            {/* <Button onClick={handleDownloadResume}>Download Resume</Button> */}
            Download Resume
            {/* <Button>Download Resume</Button> */}
          </ExternalLinks>
        </LeftSection>
      </Section>
    </>
  );
}

export default Hero;