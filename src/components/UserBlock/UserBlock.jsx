import { useSelector, useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';

import { logOut } from 'redux/auth/operations';

import { UserBlockStyled } from 'components/UserBlock/UserBlockStyled.styled';

export const UserBlock = () => {
  const dispatch = useDispatch();
  const name = useSelector(state => state.contacts.user.name);
  const nav = useNavigate();

  const onClick = e => {
    dispatch(logOut());
    nav('/');
  };
  return (
    <UserBlockStyled>
      <p>{name}</p>
      <button type="button" onClick={onClick}>
        Logout
      </button>
    </UserBlockStyled>
  );
};
