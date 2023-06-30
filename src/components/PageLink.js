'use client';
/** @jsxImportSource theme-ui */

import React from 'react';
import Link from 'next/link';

export const PageLink = ({ children, sx, ...props }) => {
  return (
    <Link sx={sx} {...props}>
      {children}
    </Link>
  );
};
