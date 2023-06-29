import React from 'react';
import { Header } from './header/Header';

export const LandingPage = ({ data }) => {
  return (
    <>
      <Header data={data} />
      <main></main>
    </>
  );
};
