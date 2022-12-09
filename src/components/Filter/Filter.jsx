import { useDispatch, useSelector } from 'react-redux';

import { TextField, Typography, Box } from '@mui/material';
import { selectFilter } from 'redux/filter/filterSelectors';
import { setFilter } from 'redux/filter/filterSlice';

export function Filter() {
  const filter = useSelector(selectFilter);
  const dispatch = useDispatch();

  const handleChange = e => {
    dispatch(setFilter(e.target.value));
  };

  return (
    <Box
      sx={{
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        mb: '1rem',
      }}
    >
      <Typography
        variant="h5"
        color="text.secondary"
        sx={{ fontSize: '1.2rem', mr: '5px' }}
      >
        Find contact:
      </Typography>
      <TextField
        id="outlined-basic"
        label="Search…"
        variant="outlined"
        size="small"
        value={filter}
        onChange={handleChange}
      />
    </Box>
  );
}
