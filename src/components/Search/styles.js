import styled from 'styled-components';
import { colors } from '../../constants/colors';

export const Container = styled.div`
  margin-top: 50px;
  padding: 0 150px;
  display: flex;
`;

export const Input = styled.input`
  flex: 1;
  background-color: ${colors.grayLight};
  border: 0;
  padding: 10px 20px;
  font-family: 'Montserrat';
  font-size: 20px;
  color: ${colors.white};
  border-radius: 4px;
  margin-right: 15px;
  &:focus {
    outline-width: 0;
  }
`;
