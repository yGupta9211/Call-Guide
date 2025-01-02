import React from 'react';
import { Box, Typography, useTheme } from '@mui/material';

const AgentScript = ({ guide }) => {
  const theme = useTheme();

  if (!guide) {
    return <Typography>No content available for this section.</Typography>;
  }

  return (
    <Box
      sx={{
        padding: 2,
        borderRadius: '0.25rem',
        backgroundColor: theme.palette.mode === 'dark' ? '#2e2e2e' : '#ffffff',
        color: theme.palette.mode === 'dark' ? '#ffffff' : '#000000',
        border: '1px solid',
        borderColor: theme.palette.divider,
        overflow: 'auto',
      }}
    >
      <Typography variant='h4' sx={{ marginBottom: 2 }}>
        {guide.heading}
      </Typography>
      <Box
        dangerouslySetInnerHTML={{ __html: guide.script }}
        sx={{
          '& h5': {
            color: theme.palette.mode === 'dark' ? '#ffffff' : '#000000',
            marginBottom: '0.5rem',
          },
          '& p': {
            color: theme.palette.text.primary,
            marginBottom: '0.5rem',
          },
          '& div': {
            color: theme.palette.text.primary,
          },
          padding: 2,
          borderRadius: '0.25rem',
          overflow: 'auto',
        }}
      />
    </Box>
  );
};

export default AgentScript;
