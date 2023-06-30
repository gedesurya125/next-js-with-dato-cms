import { PageLink } from 'components';
import React from 'react';

// External Components
import { Section, Heading, Paragraph } from 'theme/components';

export const Header = ({ postData: { title, headline, description } }) => {
  console.log('this is the headline', headline);

  return (
    <Section id="post__header">
      <PageLink
        href="/"
        sx={{
          variant: 'buttons.tertiary',
          gridColumn: '1/13',
          width: 'min-content',
          whiteSpace: 'nowrap',
          mt: '3rem'
        }}>
        Back to Home
      </PageLink>
      <Heading
        sx={{
          gridColumn: ['1/13'],
          mt: '5rem',
          fontSize: '3rem'
        }}>
        {headline}
      </Heading>
      <Paragraph
        sx={{
          gridColumn: '1/13',
          mt: '3rem',
          fontSize: '2rem'
        }}>
        {description}
      </Paragraph>
    </Section>
  );
};
