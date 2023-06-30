import { performRequest } from 'lib/datocms';
import { draftMode } from 'next/headers';
import { LandingPage } from 'section';
import { DraftLandingPage } from 'section/landingPage/DraftLandindingPage';

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
  // const { isEnabled } = draftMode();

  function getPageRequest() {
    const { isEnabled } = draftMode();
    return { query: LANDING_PAGE_QUERY, includeDrafts: isEnabled };
  }

  const pageRequest = getPageRequest();

  const data = await performRequest(pageRequest);

  // if (isEnabled) {
  //   return (
  //     <DraftLandingPage
  //       subscription={{
  //         ...pageRequest,
  //         initialData: data,
  //         token: process.env.NEXT_DATOCMS_API_TOKEN,
  //         environment: process.env.NEXT_DATOCMS_ENVIRONMENT || null
  //       }}
  //     />
  //   );
  // }

  return <LandingPage data={data} />;
}
