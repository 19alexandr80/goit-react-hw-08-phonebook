import { useSelector } from 'react-redux';

import { FormAddUser } from 'formPhoneBook/FormAddUser';
import { Filter } from 'contactList/Filter';
import { ContactList } from 'contactList/ContactList';
import { AppStyled } from 'AppStyled.styled';

export default function Contacts() {
  const isLoggedIn = useSelector(state => state.contacts.isLoggedIn);

  return (
    <div>
      {isLoggedIn ? (
        <AppStyled>
          <h1>Phonebook</h1>
          <FormAddUser />
          <h2>Contacts</h2>
          <Filter />
          <ContactList />
        </AppStyled>
      ) : (
        <div>Please log in</div>
      )}
    </div>
  );
}
