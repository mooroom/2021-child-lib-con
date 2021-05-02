import React from "react";
import styled, { css } from "styled-components";
import { darken, lighten } from "polished";

const StyledButton = styled.button`
  display: inline-flex;
  align-items: center;
  justify-content: center;
  outline: none;
  border: none;
  border-radius: 50px;
  color: white;
  cursor: pointer;
  padding: 1rem 3rem;
  transition: all 0.5s ease-in;
  font-size: 1rem;
  font-weight: bold;

  ${(props) => {
    const reactive = props.reactive;
    const activate = props.activate;

    if (reactive && !activate) {
      return css`
        opacity: 0.25;
      `;
    }

    if (activate) {
      return css`
        opacity: 1;
      `;
    }
  }}

  ${(props) => {
    const width = props.width;
    return css`
      width: ${width};
    `;
  }}

  ${(props) => {
    const color = props.color;
    return css`
      background: ${color};
      &:hover {
        background: ${lighten(0.1, color)};
      }
      &:active {
        background: ${darken(0.1, color)};
      }
    `;
  }}

  ${(props) =>
    props.width &&
    css`
      width: ${props.width}%;
    `}

  & + & {
    margin-left: 1rem;
  }
`;

function Button({ children, onClick, width, ...rest }) {
  return (
    <StyledButton {...rest} onClick={onClick} width={width}>
      {children}
    </StyledButton>
  );
}

Button.defaultProps = {
  color: "#ffdd00",
};

export default Button;
