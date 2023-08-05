import { useDispatch } from 'react-redux';
import { logIn } from 'redux/auth/operations';

import { FormStyled } from 'components/RegisterForm/FormStyled.styled';

export const LoginForm = () => {
  const dispatch = useDispatch();

  const formSubmit = e => {
    e.preventDefault();
    const form = e.currentTarget;

    dispatch(
      logIn({
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
          Email
          <input type="email" name="email" />
        </label>
        <label>
          Password
          <input type="password" name="password" />
        </label>
        <button type="submit">Log In</button>
      </form>
    </FormStyled>
  );
};
