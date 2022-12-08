import { Box, Button } from '@mui/material';
import React from 'react';
import { Link } from 'react-router-dom';

export function Navigation() {
  return (
    <Box component={'nav'}>
      <Button aria-label="home" color="inherit" component={Link} to="/">
        Home
      </Button>
      <Button
        aria-label="contacts"
        color="inherit"
        component={Link}
        to="/contacts"
      >
        Contacts
      </Button>
    </Box>
  );
}
