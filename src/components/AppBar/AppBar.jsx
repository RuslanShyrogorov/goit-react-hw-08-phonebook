import { useState } from 'react';
// import { Link } from 'react-router-dom';

import {
  AppBar,
  Box,
  Toolbar,
  IconButton,
  Typography,
  MenuItem,
  Menu,
} from '@mui/material';

import MoreIcon from '@mui/icons-material/MoreVert';
import PersonAddIcon from '@mui/icons-material/PersonAdd';
import LoginIcon from '@mui/icons-material/Login';
import LogoutIcon from '@mui/icons-material/Logout';
import AppRegistrationIcon from '@mui/icons-material/AppRegistration';

import { AuthNav } from 'components/AuthNav/AuthNav';
import { UserMenu } from 'components/UserMenu/UserMenu';
import { Navigation } from 'components/Navigation/Navigation';

import { useAuth } from 'hooks';

export function Header() {
  const { isLoggedIn } = useAuth();

  const [mobileMoreAnchorEl, setMobileMoreAnchorEl] = useState(null);

  const isMobileMenuOpen = Boolean(mobileMoreAnchorEl);

  const handleMobileMenuClose = () => {
    setMobileMoreAnchorEl(null);
  };

  const handleMobileMenuOpen = event => {
    setMobileMoreAnchorEl(event.currentTarget);
  };

  const mobileMenuId = 'primary-search-account-menu-mobile';
  const renderMobileMenu = (
    <Menu
      anchorEl={mobileMoreAnchorEl}
      anchorOrigin={{
        vertical: 'top',
        horizontal: 'right',
      }}
      id={mobileMenuId}
      keepMounted
      transformOrigin={{
        vertical: 'top',
        horizontal: 'right',
      }}
      open={isMobileMenuOpen}
      onClose={handleMobileMenuClose}
    >
      <MenuItem>
        <IconButton size="large" aria-label="add contact" color="inherit">
          <PersonAddIcon />
        </IconButton>
        <p>Add contact</p>
      </MenuItem>
      <MenuItem>
        <IconButton size="large" aria-label="login" color="inherit">
          <LoginIcon />
        </IconButton>
        <p>LogIn</p>
      </MenuItem>

      <MenuItem>
        <IconButton size="large" aria-label="logout" color="inherit">
          <LogoutIcon />
        </IconButton>
        <p>LogOut</p>
      </MenuItem>

      <MenuItem>
        <IconButton
          size="large"
          aria-label="signup"
          aria-haspopup="true"
          color="inherit"
        >
          <AppRegistrationIcon />
        </IconButton>
        <p>Registration</p>
      </MenuItem>
    </Menu>
  );

  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="fixed">
        <Toolbar>
          <Typography
            sx={{ display: { xs: 'none', sm: 'block' } }}
            variant="h6"
            noWrap
            fontWeight={700}
          >
            PhoneBook
          </Typography>

          <Box sx={{ flexGrow: 1 }} />

          {isLoggedIn ? (
            <>
              <Box sx={{ display: { xs: 'none', md: 'flex' } }}>
                <Navigation />
              </Box>

              <Box sx={{ flexGrow: 1 }} />
              <Box sx={{ display: { xs: 'none', md: 'flex' } }}>
                <UserMenu />
              </Box>
            </>
          ) : (
            <Box sx={{ display: { xs: 'none', md: 'flex' } }}>
              <AuthNav />
            </Box>
          )}

          <Box sx={{ display: { xs: 'flex', md: 'none' } }}>
            <IconButton
              size="large"
              aria-label="show more"
              aria-controls={mobileMenuId}
              aria-haspopup="true"
              onClick={handleMobileMenuOpen}
              color="inherit"
            >
              <MoreIcon />
            </IconButton>
          </Box>
        </Toolbar>
      </AppBar>
      {renderMobileMenu}
      {/* {renderMenu} */}
    </Box>
  );
}
