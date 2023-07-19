import Link from 'next/link';
import React from 'react';
import { AiFillGithub, AiFillMail, AiFillLinkedin  } from 'react-icons/ai';
import { DiCssdeck } from 'react-icons/di';

import { Container, Div1, Div2, Div3, NavLink, SocialIcons } from './HeaderStyles';

const Header = () =>  (
  <Container>
    <Div1>
      <Link href="/">
        <a style={{ display: 'flex', alignItems: 'center', color:"white" }}>
          <DiCssdeck size="3rem" /> <span>Portfolio</span>
        </a>
      </Link>
    </Div1>
    <Div2>
      <li>
        <Link href="#timeline">
          <NavLink>Experience</NavLink>
        </Link>
      </li>
      <li>
        <Link href="#tech">
          <NavLink>Technical Skills</NavLink>
        </Link>
      </li>
      <li>
        <Link href="#projects">
          <NavLink>Projects</NavLink>
        </Link>
      </li>
      {/* <li>
        <a href="https://drive.google.com/u/0/uc?id=1SzdC6qj3iYQB23hTXB7l1AapJ1V3mVU1&export=download">
          <NavLink>Resume</NavLink>
        </a>
      </li> */}
    </Div2>
      <Div3>
      <SocialIcons href="https://github.com/thomascvan">
            <AiFillGithub size="3rem" />
          </SocialIcons>
          <SocialIcons href="https://www.linkedin.com/in/thomascvan/">
            <AiFillLinkedin size="3rem" />
          </SocialIcons>
          <SocialIcons href="mailto:thomascvan11@gmail.com">
          <AiFillMail size="3rem"/>
          </SocialIcons>
      </Div3>
    </Container>
);

export default Header;
