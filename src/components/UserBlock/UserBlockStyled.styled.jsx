import styled from '@emotion/styled';

export const UserBlockStyled = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-around;
  align-items: center;
  font-size: 24px;
  gap: 30px;
  p {
    margin: 0px;
  }
  button {
    border: 3px outset #3ae2ce;
    padding: 10px;
    font-size: 20px;
    border-radius: 10px;
    background-color: cadetblue;
    cursor: pointer;
    :hover {
      background-color: green;
      border: 3px inset #3ae2ce;
    }
    :active {
      background-color: red;
      border: 3px inset #3ae2ce;
    }
  }
`;
