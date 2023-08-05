import PropTypes from 'prop-types';
import { useDispatch } from 'react-redux';
// import { decrement } from 'redux/slise';
import { deleteUsers } from 'redux/phoneBook/operations';
import { ContactStyled, TelStyled } from 'contactList/ContactListStyled.styled';

export const Contact = ({ id, name, number }) => {
  const dispatch = useDispatch();
  const onClick = e => {
    dispatch(deleteUsers(e.target.dataset.id));
  };
  return (
    <ContactStyled>
      <p>
        {name}: <TelStyled>{number}</TelStyled>
      </p>
      <button type="button" onClick={onClick} data-id={id}>
        Delete
      </button>
    </ContactStyled>
  );
};

Contact.propTypes = {
  id: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  number: PropTypes.string.isRequired,
};
