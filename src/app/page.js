import { Section, Box, Paragraph, Heading } from 'components';
import { Header } from 'section/landingPage';
import { request } from 'lib/datocms';

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
  const { data } = await request({
    query: LANDING_PAGE_QUERY
  });

  return (
    <>
      <Header data={data} />
      <main></main>
    </>
  );
}
