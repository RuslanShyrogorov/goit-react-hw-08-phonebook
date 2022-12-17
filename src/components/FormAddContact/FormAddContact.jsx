import { Box, Button, TextField, Typography } from '@mui/material';

import { useDispatch, useSelector } from 'react-redux';
import {
  selectAllContacts,
  selectLoading,
} from 'redux/contacts/contactSelectors';
import { addContact } from 'redux/contacts/contactOperations';
import { Loader } from 'components/Loader/Loader';

export function FormAddContact() {
  const dispatch = useDispatch();
  const allContacts = useSelector(selectAllContacts);
  const isLoading = useSelector(selectLoading);

  const handlerAddContact = event => {
    event.preventDefault();
    const form = event.currentTarget;

    // const { name, number } = form
    const newContact = {
      name: form.name.value,
      number: form.number.value,
    };

    if (newContact.name.trim() === '' || newContact.number.trim() === '') {
      alert(`Value cannot be empty.`);
    }

    const dublicateContact = allContacts.find(
      contact =>
        contact.name === newContact.name || contact.number === newContact.number
    );

    if (dublicateContact) {
      alert(
        `${newContact.name} - ${newContact.number} is already in contacts.`
      );
      // form.reset();
      return;
    }
    dispatch(addContact(newContact));

    form.reset();
  };

  return (
    <Box
      component="form"
      // display={'flex'}
      onSubmit={handlerAddContact}
      // sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}
      sx={{
        display: {
          md: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
        },
      }}
    >
      <Typography
        variant="h5"
        color="text.secondary"
        sx={{ fontSize: '1.2rem', mr: '5px' }}
      >
        Add contact:
      </Typography>
      <TextField
        id="outlined-basic"
        label="Name"
        variant="outlined"
        size="small"
        name="name"
        sx={{ mr: '1rem' }}
        pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
        title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
      />
      <TextField
        id="outlined-basic"
        label="Number"
        variant="outlined"
        size="small"
        name="number"
        pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
        title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
      />
      <Button
        variant="contained"
        sx={{ maxWidth: '10rem', maxHeight: '2.5rem', ml: '1rem' }}
        type="submit"
        disabled={isLoading}
      >
        {isLoading && <Loader size="30" />}
        Add
      </Button>
    </Box>
  );
}
