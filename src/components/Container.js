import React from "react";

import styled, { css } from "styled-components";

const ContainerBlock = styled.div`
  position: relative;
  width: 100%;
  max-width: 1140px;
  margin: auto;
  ${(props) =>
    props.flex &&
    css`
      height: 100%;
    `}

  ${(props) =>
    props.content &&
    css`
      padding-bottom: 100px;
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

  ${(props) =>
    props.img &&
    css`
      display: flex;
      flex-direction: column;
      align-items: center;
      justify-content: center;
      max-width: 800px;
      img {
        width: 100%;
      }
    `}
`;

function Container({ children, flex, img, content }) {
  return (
    <ContainerBlock flex={flex} content={content}>
      <Inner flex={flex} img={img}>
        {children}
      </Inner>
    </ContainerBlock>
  );
}

export default Container;
