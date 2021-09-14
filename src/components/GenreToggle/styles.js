import styled from 'styled-components';
import { colors } from '../../constants/colors';

export const Container = styled.div`
  margin-top: 50px;
  padding: 0 150px;
  display: flex;
  flex-direction: column;
  justify-content: center;
`;

export const GenresWrapper = styled.div`
  display: flex;
`;

export const Genre = styled.div`
  color: ${colors.white};
  text-transform: uppercase;
  font-size: 16px;
  font-family: 'Montserrat';
  margin-right: 30px;
  cursor: pointer;
  &:active {
    color: rgba(255, 255, 255, 0.5);
  }
`;

export const ActiveDivider = styled.div`
  border: 1px solid ${colors.red};
  position: relative;
  top: 22px;
`;

export const Divider = styled.div`
  margin-top: 20px;
  border: 1px solid ${colors.grayLight};
  box-shadow: 0 1px 0 ${colors.black};
`;
