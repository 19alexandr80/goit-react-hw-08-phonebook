import { useMemo, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';

import { Contact } from 'contactList/Contact';

import { getUsers } from 'redux/phoneBook/operations';
import { refreshUser } from 'redux/auth/operations';

import { ContactsLitsStyled } from 'contactList/ContactListStyled.styled';

export const ContactList = () => {
  const dispatch = useDispatch();

  const contacts = useSelector(state => state.contacts.value);
  const filter = useSelector(state => state.filter);

  useEffect(() => {
    dispatch(refreshUser());
    dispatch(getUsers());
  }, [dispatch]);

  const ren = useMemo(() => {
    if (!filter) {
      return contacts;
    }
    return contacts.filter(({ name }) => {
      return name.toLowerCase().includes(filter.payload.toLowerCase());
    });
  }, [filter, contacts]);
  return (
    <ContactsLitsStyled>
      {ren.map(({ id, name, number }) => {
        return <Contact key={id} id={id} name={name} number={number} />;
      })}
    </ContactsLitsStyled>
  );
};
