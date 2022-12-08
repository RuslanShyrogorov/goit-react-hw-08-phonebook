import { IconButton } from '@mui/material';
import { Link } from 'react-router-dom';

import Tooltip, { tooltipClasses } from '@mui/material/Tooltip';
import { styled } from '@mui/material/styles';

import AppRegistrationIcon from '@mui/icons-material/AppRegistration';
import LoginIcon from '@mui/icons-material/Login';

export function AuthNav() {
  const MyTooltip = styled(({ className, ...props }) => (
    <Tooltip {...props} classes={{ popper: className }} />
  ))(({ theme }) => ({
    [`& .${tooltipClasses.tooltip}`]: {
      backgroundColor: theme.palette.common.white,
      color: 'rgba(0, 0, 0, 0.87)',
      boxShadow: theme.shadows[1],
      fontSize: 14,
    },
  }));
  return (
    <>
      <MyTooltip title="Sign Up">
        <IconButton
          size="large"
          edge="end"
          aria-label="signup"
          color="inherit"
          component={Link}
          to="/register"
        >
          <AppRegistrationIcon />
        </IconButton>
      </MyTooltip>

      <MyTooltip title="LogIn">
        <IconButton
          size="large"
          aria-label="login"
          color="inherit"
          component={Link}
          to={'/login'}
        >
          <LoginIcon />
        </IconButton>
      </MyTooltip>
    </>
  );
}
