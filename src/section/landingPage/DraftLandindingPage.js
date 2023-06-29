'use client';

import { useQuerySubscription } from 'react-datocms/use-query-subscription';
import { LandingPage } from './LandingPage';

export function DraftLandingPage({ subscription }) {
  const { data } = useQuerySubscription(subscription);

  return <LandingPage data={data} />;
}
