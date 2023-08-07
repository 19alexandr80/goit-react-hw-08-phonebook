import { useSelector } from 'react-redux';

import { AuthBlock } from 'components/AuthBlock/AuthBlock';
import { UserBlock } from 'components/UserBlock/UserBlock';

import {
  NavStyled,
  NavLinkStyled,
  LinkStyled,
} from 'components/Navigation/NavStyled.styled';

export const Navigation = () => {
  const isLoggedIn = useSelector(state => state.contacts.isLoggedIn);

  return (
    <>
      <NavStyled>
        <NavLinkStyled to="/">Home</NavLinkStyled>
        {isLoggedIn && <LinkStyled to="/contacts">Contacts</LinkStyled>}
        {!isLoggedIn ? <AuthBlock /> : <UserBlock />}
      </NavStyled>
      <hr></hr>
    </>
  );
};
