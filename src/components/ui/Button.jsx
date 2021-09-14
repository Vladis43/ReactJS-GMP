import React from 'react';
import styled, { css } from 'styled-components';
import { colors } from '../../constants/colors';

const StyledButton = styled.button`
  display: flex;
  justify-content: center;
  align-items: center;
  border: 0;
  border-radius: 4px;
  background-color: ${colors.red};
  text-transform: uppercase;
  color: ${colors.white};
  font-size: 20px;
  font-family: "Montserrat";

  ${props => props.primary && css`
    padding: 0.25em 1em;
  `}
  &:active {
    opacity: 0.5;
  }
`;

class Button extends React.PureComponent {
  render() {
    const { children, primary, text, onClick } = this.props;

    return <StyledButton onClick={onClick} primary={primary}>{text || children}</StyledButton>;
  }
}

export default Button;