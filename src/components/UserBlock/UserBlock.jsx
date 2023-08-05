import { useSelector, useDispatch } from 'react-redux';

import { logOut } from 'redux/auth/operations';

export const UserBlock = () => {
  const dispatch = useDispatch();
  const name = useSelector(state => state.contacts.user.name);

  const onClick = e => {
    dispatch(logOut());
  };
  return (
    <>
      <p>{name}</p>
      <button type="button" onClick={onClick}>
        Logout
      </button>
    </>
  );
};
