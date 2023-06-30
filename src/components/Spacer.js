import React from 'react';

// External Components
import { Box } from 'theme/components';

export const Spacer = ({ height = null, display = null }) => {
  return (
    <Box
      className="spacer"
      sx={{
        height,
        display
      }}
    />
  );
};
