// import { lazy } from 'react';
import { Routes, Route } from 'react-router-dom';

import { Layout } from 'Layout';

import Home from 'pages/Home';
import Registration from 'pages/Register';
import LoginForm from 'pages/Login';
import Contacts from 'components/Contacts/Contacts';

export const App = () => {
  return (
    <>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="registration" element={<Registration />} />
          <Route path="login" element={<LoginForm />} />
          <Route path="contacts" element={<Contacts />} />
        </Route>
      </Routes>
    </>
  );
};
