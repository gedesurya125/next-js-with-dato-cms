import { NextResponse } from 'next/server';

/*
  This endpoint is for the Web Previews DatoCMS plugin:
  https://www.datocms.com/marketplace/plugins/i/datocms-plugin-web-previews

  After installing the plugin on the project, insert the following frontend settings:

  Name: Production Website
  URL: <YOUR_WEBSITE>/api/preview-links
*/

const corsInitOptions = {
  headers: {
    'Access-Control-Allow-Origin': '*',
    'Access-Control-Allow-Methods': 'POST, OPTIONS',
    'Access-Control-Allow-Headers': 'Content-Type, Authorization'
  }
};

const publishedBaseUrl = process.env.VERCEL_URL
  ? // Vercel auto-populates this environment variable
    `https://${process.env.VERCEL_URL}`
  : // Netlify auto-populates this environment variable
    process.env.URL;

const previewBaseUrl = process.env.VERCEL_BRANCH_URL
  ? // Vercel auto-populates this environment variable
    `https://${process.env.VERCEL_BRANCH_URL}`
  : // Netlify auto-populates this environment variable //TODO: if using netlify, take the different url for preview
    process.env.URL;

const findUrlForItem = ({ item, itemType }) => {
  switch (itemType.attributes.api_key) {
    case 'landing_page':
      return `/`;
    case 'post':
      return `/post/${item.attributes.slug_for_post}`;
    default:
      return null;
  }
};

export async function OPTIONS(request) {
  return NextResponse.json({ success: true }, corsInitOptions);
}

export async function POST(request) {
  const requestBody = await request.json();
  const url = findUrlForItem(requestBody);

  if (!url) {
    return NextResponse.json({ previewLinks: [] }, corsInitOptions);
  }

  const previewLinks = [
    // {
    //   label: 'Published version',
    //   url: `${publishedBaseUrl}/api/exit-draft?redirect=${url}&secret=${
    //     process.env.NEXT_DATOCMS_PREVIEW_SECRET || ''
    //   }`
    // },
    {
      label: 'Published version',
      url: `${publishedBaseUrl}${url}`
    },
    {
      label: 'Draft version',
      url: `${previewBaseUrl}/api/draft?redirect=${url}&secret=${
        process.env.NEXT_DATOCMS_PREVIEW_SECRET || ''
      }`
    }
  ];

  return NextResponse.json({ previewLinks }, corsInitOptions);
}
