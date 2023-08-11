import { useSelector, useDispatch } from 'react-redux';

import { logOut } from 'redux/auth/operations';

import { UserBlockStyled } from 'components/UserBlock/UserBlockStyled.styled';

export const UserBlock = () => {
  const dispatch = useDispatch();
  const name = useSelector(state => state.contacts.user.name);

  const onClick = e => {
    dispatch(logOut());
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
