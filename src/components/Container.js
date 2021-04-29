import React from "react";

import styled, { css } from "styled-components";

const ContainerBlock = styled.div`
  width: 100%;
  max-width: 1140px;
  margin: auto;
  ${(props) =>
    props.flex &&
    css`
      height: 100%;
    `}
`;

const Inner = styled.div`
  width: 92%;
  max-width: calc(100% - var(--containerPadding));
  margin: auto;

  ${(props) =>
    props.flex &&
    css`
      display: flex;
      height: 100%;
      flex-direction: column;
      align-items: center;
      justify-content: center;
    `}
`;

function Container({ children, flex }) {
  return (
    <ContainerBlock flex={flex}>
      <Inner flex={flex}>{children}</Inner>
    </ContainerBlock>
  );
}

export default Container;