import { useSelector } from 'react-redux';

import { AuthBlock } from 'components/AuthBlock/AuthBlock';
import { UserBlock } from 'components/UserBlock/UserBlock';

import {
  NavStyled,
  NavLinkStyled,
} from 'components/Navigation/NavStyled.styled';

export const Navigation = () => {
  const isLoggedIn = useSelector(state => state.contacts.isLoggedIn);

  return (
    <>
      <NavStyled>
        <NavLinkStyled to="/">Home</NavLinkStyled>
        {!isLoggedIn ? <AuthBlock /> : <UserBlock />}
      </NavStyled>
      <hr></hr>
    </>
  );
};
