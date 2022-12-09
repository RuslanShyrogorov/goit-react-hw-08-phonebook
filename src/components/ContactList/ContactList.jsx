import Grid from '@mui/material/Unstable_Grid2';
import { Container } from '@mui/material';
import ContactItem from 'components/ContactItem/ContactItem';
import { Filter } from 'components/Filter/Filter';

// import { getContacts } from 'redux/contacts/contactsOperations';
import { useSelector } from 'react-redux';
import { selectFilter } from 'redux/filter/filterSelectors';
import {
  selectAllContacts,
  selectLoading,
} from 'redux/contacts/contactSelectors';
// import Loader from 'components/Loader/Loader';
import { FormAddContact } from 'components/FormAddContact/FormAddContact';

export default function ContactsList() {
  const items = useSelector(selectAllContacts);

  const filter = useSelector(selectFilter);
  const isLoading = useSelector(selectLoading);

  if (isLoading) {
    return <p>Loading...</p>;
  }

  const filteredContacts = () => {
    if (!filter) {
      return items;
    }

    const normalizeFilter = filter.toLowerCase();

    return items.filter(contact =>
      contact.name.toLowerCase().includes(normalizeFilter)
    );
  };

  const visibleContacts = filteredContacts();

  // const contactItems = visibleContacts.map(contact => (
  //   <ContactItem {...contact} />
  // ));
  const contactItems = visibleContacts.map(contact => (
    <ContactItem
      id={contact.id}
      name={contact.name}
      number={contact.number}
      key={contact.id}
    />
  ));

  return (
    <Container sx={{ pt: '4.5rem' }}>
      <Filter />
      <FormAddContact />
      <Grid container spacing={2} sx={{ mt: '10px' }}>
        {contactItems}
      </Grid>
    </Container>
  );
}
