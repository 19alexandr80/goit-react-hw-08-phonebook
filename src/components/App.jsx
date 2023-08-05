// import { lazy } from 'react';
import { Routes, Route } from 'react-router-dom';

import { Layout } from 'Layout';

import Home from 'pages/Home';
import Registration from 'pages/Register';
import LoginForm from 'pages/Login';

// import { PhoneBook } from 'api/api';
// const api = new PhoneBook();
// api.login();

// import { FormAddUser } from 'formPhoneBook/FormAddUser';
// import { Filter } from 'contactList/Filter';
// import { ContactList } from 'contactList/ContactList';
// import { AppStyled } from 'AppStyled.styled';

// const HomePage = () => {
//   return (
//     <AppStyled>
//       <h1>Phonebook</h1>
//       <FormAddUser />
//       <h2>Contacts</h2>
//       <Filter />
//       <ContactList />
//     </AppStyled>
//   );
// };

export const App = () => {
  return (
    <>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="registration" element={<Registration />} />
          <Route path="login" element={<LoginForm />} />
        </Route>
      </Routes>
    </>
  );
};
