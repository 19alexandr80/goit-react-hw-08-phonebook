import { useSelector } from 'react-redux';

import { FormAddUser } from 'formPhoneBook/FormAddUser';
import { Filter } from 'contactList/Filter';
import { ContactList } from 'contactList/ContactList';
import { AppStyled } from 'AppStyled.styled';

export default function Home() {
  const isLoggedIn = useSelector(state => state.contacts.isLoggedIn);

  // const isLoggedIn = true;

  return (
    <div>
      {!isLoggedIn ? (
        <h1>
          Please log in{' '}
          <span role="img" aria-label="Greeting icon">
            💁‍♀️
          </span>
        </h1>
      ) : (
        <div>
          <AppStyled>
            <h1>Phonebook</h1>
            <FormAddUser />
            <h2>Contacts</h2>
            <Filter />
            <ContactList />
          </AppStyled>
        </div>
      )}
    </div>
  );
}
