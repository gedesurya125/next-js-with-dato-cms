import { Spacer } from 'components';
import React from 'react';
import { Header, PostList } from 'section/landingPage';

export const LandingPage = ({ data }) => {
  return (
    <>
      <Header data={data} />
      <Spacer height={'10rem'} />
      <main>
        <PostList posts={data.allPosts} />
      </main>
    </>
  );
};
