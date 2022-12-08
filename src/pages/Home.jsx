import { Box, Typography } from '@mui/material';

export function Home() {
  return (
    <Box
      sx={{
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        // pt: 10,
        height: '100vh',
      }}
    >
      <Typography variant="h1" component="h2" color={'primary.main'}>
        PhoneBook
      </Typography>
    </Box>
  );
}
