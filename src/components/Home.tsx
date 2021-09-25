import * as React from 'react';

import { Introduction } from './Introduction'
import { NtaSection } from './NtaSection'

export const Home = (): JSX.Element => {
  return (
    <>
        <Introduction />
        <NtaSection />
    </>
  );
}
