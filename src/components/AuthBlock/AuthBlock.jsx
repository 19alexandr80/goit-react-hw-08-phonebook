import { AuthStyled, LiStyled } from 'components/AuthBlock/AuthStyled.styled';
import { NavLinkStyled } from 'components/Navigation/NavStyled.styled';

export const AuthBlock = () => {
  return (
    <AuthStyled>
      <LiStyled>
        <NavLinkStyled to="/registration">Registration</NavLinkStyled>
      </LiStyled>
      <LiStyled>
        <NavLinkStyled to="/login">Login</NavLinkStyled>
      </LiStyled>
    </AuthStyled>
  );
};
