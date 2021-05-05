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

  ${(props) =>
    props.float &&
    css`
      box-shadow: 0px 0px 10px rgba(0, 0, 0, 0.2);
      width: 170px;
      height: 120px;
      border-radius: 20px;
      padding: 20px;
      font-size: 1.5rem;
      position: fixed;
      top: calc(50% + 120px);
      right: calc(50% - 600px);
      z-index: 100;
      @media only screen and (max-width: 768px) {
        top: initial;
        right: 30px;
        bottom: 30px;
      }
    `}

  ${(props) =>
    props.float2 &&
    css`
      box-shadow: 0px 0px 10px rgba(0, 0, 0, 0.2);
      width: 170px;
      height: 120px;
      border-radius: 20px;
      padding: 20px;
      font-size: 1.5rem;
      position: fixed;
      top: calc(50% - 20px);
      right: calc(50% - 600px);
      z-index: 100;
    `}
`;

function Button({ children, onClick, width, float, ...rest }) {
  return (
    <StyledButton {...rest} onClick={onClick} width={width} float={float}>
      {children}
    </StyledButton>
  );
}

Button.defaultProps = {
  color: "#ffdd00",
};

export default Button;
