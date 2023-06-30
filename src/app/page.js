import { performRequest } from 'lib/datocms';
import { draftMode } from 'next/headers';
import { LandingPage } from 'section';

const LANDING_PAGE_QUERY = `
  query LandingPage {
    landingPage {
      description
      headline
      title
    }
  }

`;

export default async function Home() {
  function getPageRequest() {
    const { isEnabled } = draftMode();
    return { query: LANDING_PAGE_QUERY, includeDrafts: isEnabled };
  }

  const pageRequest = getPageRequest();

  const data = await performRequest(pageRequest);

  return <LandingPage data={data} />;
}
