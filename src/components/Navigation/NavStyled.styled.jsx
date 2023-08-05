import styled from '@emotion/styled';
import { NavLink } from 'react-router-dom';

export const NavStyled = styled.nav`
  padding: 15px;
  display: flex;
  flex-direction: row;
  justify-content: space-around;
  align-items: center;
  font-size: 24px;
`;
export const NavLinkStyled = styled(NavLink)`
  text-decoration: none;
  color: black;
  :hover {
    color: red;
  }
  :active {
    color: green;
  }
`;
