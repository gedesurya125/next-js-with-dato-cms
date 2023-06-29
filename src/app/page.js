import { Section, Box, Paragraph, Heading } from 'components';
import { Header } from 'section/landingPage';
import { request } from 'lib/datocms';
import { draftMode } from 'next/headers';

const LANDING_PAGE_QUERY = `#graphql
  query LandingPage {
    landingPage {
      description
      headline
      title
    }
  }

`;

export default async function Home() {
  const { isEnabled } = draftMode();
  console.log('draft is enabled', isEnabled);

  const { data } = await request({
    query: LANDING_PAGE_QUERY,
    includeDrafts: isEnabled
  });

  return (
    <>
      <Header data={data} />
      <main></main>
    </>
  );
}
