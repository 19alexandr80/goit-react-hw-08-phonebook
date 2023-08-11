import { useDispatch } from 'react-redux';

import { register } from 'redux/auth/operations';

import { FormStyled } from 'components/RegisterForm/FormStyled.styled';

export const RegisterForm = () => {
  const dispatch = useDispatch();
  const formSubmit = e => {
    e.preventDefault();
    const form = e.currentTarget;

    dispatch(
      register({
        name: form.elements.name.value,
        email: form.elements.email.value,
        password: form.elements.password.value,
      })
    );
    form.reset();
  };
  return (
    <FormStyled>
      <form onSubmit={formSubmit}>
        <label>
          Username
          <input type="text" name="name" />
        </label>
        <label>
          Email
          <input type="email" name="email" />
        </label>
        <label>
          Password
          <input type="password" name="password" />
        </label>
        <button type="submit">Register</button>
      </form>
    </FormStyled>
  );
};
