import { Section, Heading, Paragraph } from 'theme/components';
import React from 'react';

export const Header = ({ data }) => {
  return (
    <Section>
      <Headline headline={data?.landingPage.headline} />
      <Description text={data?.landingPage?.description} />
      <Title text={data?.landingPage?.title} />
    </Section>
  );
};

const Headline = ({ headline }) => {
  return (
    <Heading
      sx={{
        gridColumn: ['1/13', null],
        mt: ['10rem']
      }}>
      {headline}
    </Heading>
  );
};

const Description = ({ text }) => {
  return (
    <Paragraph
      sx={{
        gridColumn: ['1/13'],
        mt: '3rem'
      }}>
      {text}
    </Paragraph>
  );
};

const Title = ({ text }) => {
  return (
    <Paragraph
      sx={{
        gridColumn: ['1/13'],
        mt: '3rem'
      }}>
      {text}
    </Paragraph>
  );
};
