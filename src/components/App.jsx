// import { lazy } from 'react';
import { Routes, Route } from 'react-router-dom';

import { Layout } from 'Layout';

import Home from 'pages/Home';
import Registration from 'pages/Register';
import LoginForm from 'pages/Login';
import Contacts from 'components/Contacts/Contacts';

import { RestrictedRoute } from 'components/RestrictedRoute';
import { PrivateRoute } from 'components/PrivateRoute';

export const App = () => {
  return (
    <>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route
            path="registration"
            element={
              <RestrictedRoute element={Registration} redirecrTo="/contacts" />
            }
          />
          <Route
            path="login"
            element={
              <RestrictedRoute element={LoginForm} redirecrTo="/contacts" />
            }
          />
          <Route
            path="contacts"
            element={<PrivateRoute element={Contacts} redirecrTo="/" />}
          />
        </Route>
      </Routes>
    </>
  );
};
