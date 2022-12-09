import { useDispatch } from 'react-redux';
import { Link as RouterLink } from 'react-router-dom';
import { logIn } from 'redux/auth/authOperations';

import { styled } from '@mui/material/styles';
import { Button, Box, TextField, Typography, Link } from '@mui/material';

const ValidationTextField = styled(TextField)({
  '& input:valid + fieldset': {
    borderColor: 'green',
    borderWidth: 1,
  },
  '& input:invalid + fieldset': {
    borderColor: 'red',
    borderWidth: 1,
  },
  '& input:valid:focus + fieldset': {
    borderLeftWidth: 4,
    padding: '4px !important', // override inline-style
  },
});

export function FormLogin() {
  const dispatch = useDispatch();

  const handleSubmit = e => {
    e.preventDefault();
    const form = e.currentTarget;
    dispatch(
      logIn({
        email: form.elements.email.value,
        password: form.elements.password.value,
      })
    );
    form.reset();
  };

  return (
    <Box
      component="form"
      // noValidate
      sx={{
        maxWidth: 'sm',
        display: 'grid',
        gridTemplateColumns: { sm: '1fr' },
        gap: 2,
        m: 'auto',
        pt: 12,
      }}
      onSubmit={handleSubmit}
    >
      <Typography
        variant="h3"
        component="h4"
        m={'auto'}
        color={'text.secondary'}
      >
        LOGIN
      </Typography>
      <Typography
        variant="subtitle2"
        component="p"
        sx={{ fontWeight: 500, color: 'text.primary' }}
      >
        If you don't have an account
        <Link
          component={RouterLink}
          to="/register"
          // underline="none"
          sx={{ fontWeight: 700, px: 1 }}
        >
          Click here
        </Link>
      </Typography>
      <ValidationTextField
        label="Email"
        name="email"
        required
        variant="outlined"
        placeholder="Email"
        id="validation-outlined-email"
      />
      <ValidationTextField
        label="Password"
        name="password"
        required
        variant="outlined"
        placeholder="Password"
        id="validation-outlined-password"
      />
      <Button
        variant="contained"
        sx={{ maxWidth: '8rem', ml: 'auto', mr: 'auto' }}
        type="submit"
      >
        LogIn
      </Button>
    </Box>
  );
}
