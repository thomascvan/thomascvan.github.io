import React from 'react';
import { DiFirebase, DiReact, DiZend, DiJsBadge, DiCss3, DiMysql } from 'react-icons/di';
import { SiTypescript, SiNextdotjs, SiNodedotjs, SiExpress, SiMongodb, SiPostgresql, SiDocker, SiVercel, SiK6, SiTestinglibrary, SiJest, SiPython, SiNginx, SiChai, SiMocha} from 'react-icons/si';
import { AiFillHtml5 } from 'react-icons/ai';
import { GrMysql } from 'react-icons/gr';
import { FaAws } from 'react-icons/fa';
import { Section, SectionDivider, SectionText, SectionTitle } from '../../styles/GlobalComponents';
import { List, ListContainer, ListItem, ListParagraph, ListTitle } from './TechnologiesStyles';

const Technologies = () =>  (
  <Section id="tech">
    <SectionDivider divider />
    <br/>
    <SectionTitle>Technical Skills</SectionTitle>

    <List>
    <ListItem>
        <picture style={{ display: 'flex', gap: '1rem', marginBottom: '3rem' }}>
          <DiJsBadge size="4rem" />
          <SiTypescript size="4rem" />
          <SiPython size="4rem" />
        </picture>
        <ListContainer>
          <ListTitle>Programming Langauges</ListTitle>
          <ListParagraph>
            JavaScript <br />
            TypeScript <br />
            Python3
          </ListParagraph>
        </ListContainer>
      </ListItem>

      <ListItem>
        <picture style={{ display: 'flex', gap: '1rem', marginBottom: '3rem' }}>
          <DiReact size="4.5rem" />
          <SiNextdotjs size="4rem" />
          <AiFillHtml5 size="4rem" />
          <DiCss3 size="4rem" />
        </picture>
        <ListContainer>
          <ListTitle>Front-End</ListTitle>
          <ListParagraph>
            React.js <br />
            Next.js <br />
            HTML5 <br />
            CSS3
          </ListParagraph>
        </ListContainer>
      </ListItem>

      <ListItem>
        <picture style={{ display: 'flex', gap: '1rem', marginBottom: '3rem' }}>
          <SiNodedotjs size="4rem" />
          <SiExpress size="4rem" />
          <SiMongodb size="4rem" />
          <SiPostgresql size="4rem" />
          <GrMysql size="4rem" />
        </picture>
        <ListContainer>
          <ListTitle>Back-End</ListTitle>
          <ListParagraph>
            Node.js <br />
            Express <br />
            MongoDB <br />
            PostgreSQL <br />
            MySQL
          </ListParagraph>
        </ListContainer>
      </ListItem>

      <ListItem>
        <picture style={{ display: 'flex', gap: '1rem', marginBottom: '3rem' }}>
          <FaAws size="4.5rem" />
          <SiJest size="4rem" />
          <SiTestinglibrary size="4rem" />
          <SiMocha size="4rem" />
          <SiChai size="4rem" />
          <SiK6 size="4rem" />
          <SiDocker size="4rem" />
          <SiNginx size="4rem" />
        </picture>
        <ListContainer>
          <ListTitle>Deployment & Testing</ListTitle>
          <ListParagraph>
            AWS - EC2 & S3 <br />
            Jest <br />
            React Testing Library <br />
            Mocha <br />
            Chai <br />
            K6 <br />
            Docker <br />
            NGINX
          </ListParagraph>
        </ListContainer>
      </ListItem>
    </List>
    <br/>
    <SectionDivider colorAlt />
  </Section>
);

export default Technologies;