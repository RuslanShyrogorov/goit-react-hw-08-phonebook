import { Card, CardContent, Typography, IconButton } from '@mui/material';
import Grid from '@mui/material/Unstable_Grid2';
import Item from '@mui/material/Unstable_Grid2';
import Tooltip, { tooltipClasses } from '@mui/material/Tooltip';
import { styled } from '@mui/material/styles';
import DeleteOutlineIcon from '@mui/icons-material/DeleteOutline';

import { useDispatch } from 'react-redux';
import { deleteContact } from 'redux/contacts/contactOperations';
// import { selectLoading } from 'redux/contacts/contactSelectors';
// import Loader from 'components/Loader/Loader';

export default function ContactItem({ name, number, id }) {
  const dispatch = useDispatch();
  // const isLoading = useSelector(selectLoading);

  const handleDeleteContact = id => {
    dispatch(deleteContact(id));
  };

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
    <Grid>
      <Item
        key={id}
        sx={{
          '&:hover': {
            boxShadow: 4,
            cursor: 'pointer',
          },
        }}
      >
        <Card variant="outlined" sx={{ minWidth: '320px' }}>
          <CardContent sx={{ position: 'relative' }}>
            <MyTooltip title="Delete">
              <IconButton
                aria-label="delete"
                sx={{
                  position: 'absolute',
                  right: '0px',
                  top: '0px',
                }}
                onClick={() => handleDeleteContact(id)}
                // disabled={isLoading}
              >
                <DeleteOutlineIcon
                  color="error"
                  sx={{ width: '1rem', height: '1rem' }}
                />
              </IconButton>
            </MyTooltip>
            <Typography variant="h5" gutterBottom sx={{ fontSize: '1.2rem' }}>
              Name: {name}
            </Typography>
            <Typography
              variant="h5"
              color="text.secondary"
              sx={{ fontSize: '1.2rem' }}
            >
              Number: {number}
            </Typography>
          </CardContent>
        </Card>
      </Item>
    </Grid>
  );
}
