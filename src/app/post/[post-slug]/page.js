import React from 'react';
import { performRequest } from 'lib/datocms';
import { draftMode } from 'next/headers';
import { Header } from 'section/postPage';

export default async function Page({ params }) {
  const getPageRequest = (slug) => {
    const { isEnabled } = draftMode();
    return {
      query: `#graphql
          query getPostBySlug($slug: String) {
            post(filter: {slugForPost: {eq: $slug}}) {
              title
              headline
              description
              id
            }
          }
        `,
      includeDrafts: isEnabled,
      variables: {
        slug
      }
    };
  };

  const data = await performRequest(getPageRequest(params['post-slug'])); // must be a function

  console.log('this is the post data', data);

  return (
    <>
      <Header postData={data.post} />
    </>
  );
}

export async function generateStaticParams() {
  const data = await performRequest({
    query: `#graphql
      query postSlugs {
        allPosts {
          slugForPost
        }
      }
    `
  });
  if (data?.allPosts)
    return data.allPosts.map((post) => ({ 'post-slug': post.slugForPost }));
  return [
    {
      slug: 'oke'
    }
  ];
}
