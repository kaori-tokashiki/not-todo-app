import * as React from 'react';
import { Box } from '@mui/material' 
import { Introduction } from './Introduction'
import { NtaSection } from './NtaSection'

export const Home = (): JSX.Element => {
  return (
    <Box sx={{ px: {md: 20} }}　justifyContent="center">
        <Introduction />
        <NtaSection />
    </Box>
  );
}
