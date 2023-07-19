import styled from 'styled-components';

export const LeftSection = styled.div`
  width: 100%;
  @media ${(props) => props.theme.breakpoints.sm} {
    width: 80%;
    display: flex;
    flex-direction: column;

    margin: 0 auto;
  }
  @media ${(props) => props.theme.breakpoints.md} {
    width: 100%;
    display: flex;
    flex-direction: column;

    margin: 0 auto;
  }
`;

export const ExternalLinks = styled.a`
/* Remove position: absolute; and set display: block; */
display: block;
border: none;
border-radius: 15px;
color: #fff;
width: fit-content; /* Set width to fit the content */
max-width: 100%; /* Ensure the button doesn't overflow */
margin-top: 1rem; /* Add some margin to separate it from the SectionText */
padding: 0.75rem 1.5rem; /* Adjust the padding to make it smaller */
background: ${({ alt }) =>
  alt
    ? 'linear-gradient(270deg, #F46737 0%, #945DD6 100%)'
    : 'linear-gradient(270deg, #13ADC7 0%, #945DD6 100%)'};
opacity: ${({ disabled }) => (disabled ? '.5' : '1')};
transition: 0.4s ease;
font-size: ${({ alt }) => (alt ? '18px' : '20px')}; /* Reduce the font size */
font-weight: 600;
align-items: center;
justify-content: center;
cursor: pointer;
box-shadow: ${({ disabled }) =>
  disabled
    ? 'inset 0px 2px 1px rgba(46, 49, 55, 0.15), inset 0px 0px 4px rgba(20, 20, 55, 0.3)'
    : 'none'};

&:hover {
  opacity: 0.8; /* Reduce opacity on hover */
}
&:focus {
  outline: none;
}
&:active {
  opacity: 1;
  box-shadow: inset 0px 2px 1px rgba(46, 49, 55, 0.15), inset 0px 0px 4px rgba(20, 20, 55, 0.3);
}

&:disabled {
  background: linear-gradient(270deg, #00DBD8 0%, #B133FF 100%);
  opacity: 0.5;
  box-shadow: inset 0px 2px 1px rgba(46, 49, 55, 0.15), inset 0px 0px 4px rgba(20, 20, 55, 0.3);
}
`;
