import React from 'react';
import Link from 'next/link';

import { Box, Heading, Section } from 'theme/components';
import { PageLink } from 'components';

export const PostList = ({ posts }) => {
  console.log('this is the posts', posts);

  return (
    <Section>
      <Heading
        sx={{
          gridColumn: '1/13'
        }}>
        Posts List
      </Heading>
      <PostLinksContainer posts={posts} />
    </Section>
  );
};

const PostLinksContainer = ({ posts }) => {
  return (
    <Box
      className="__post-link-container"
      sx={{
        gridColumn: ['1/13'],
        display: 'flex',
        flexDirection: 'column',
        mt: '2rem'
      }}>
      {posts.map((post, index) => {
        return (
          <PageLink
            key={index}
            href={`/post/${post.slugForPost}`}
            sx={{
              variant: 'buttons.tertiary'
            }}>
            {post.title}
          </PageLink>
        );
      })}
    </Box>
  );
};
