'use client';
import { usePathname, useRouter } from 'next/navigation';
import React from 'react';

import { Link } from 'theme/components';

export const DevToggleDraftButton = ({ isDraftModeEnabled }) => {
  const pathname = usePathname();

  if (process.env.NODE_ENV !== 'development') return null;

  const text = isDraftModeEnabled
    ? 'back to published version'
    : 'go to preview version';

  const getDraftVersionUrl = () => {
    return `/api/draft?redirect=${pathname}&secret=${
      process.env.NEXT_DATOCMS_PREVIEW_SECRET || ''
    }`;
  };

  const getPublishedVersionUrl = () => {
    return `/api/exit-draft?redirect=${pathname}&secret=${
      process.env.NEXT_DATOCMS_PREVIEW_SECRET || ''
    }`;
  };

  return (
    <Link
      href={`http://localhost:3000/${
        isDraftModeEnabled ? getPublishedVersionUrl() : getDraftVersionUrl()
      }`}
      sx={{
        variant: 'buttons.tertiary',
        position: 'fixed',
        top: '4rem',
        right: '4rem'
      }}>
      {text}
    </Link>
  );
};
