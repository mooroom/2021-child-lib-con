import React from "react";
import { Link } from "react-router-dom";

import styled, { css } from "styled-components";

const SquareBlock = styled.div`
  width: 180px;
  height: 180px;
  border-radius: 20px;
  background-color: white;
  padding: 30px;
  text-align: center;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  .content {
    height: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: space-between;
  }

  img {
    height: 70px;
  }

  .txt {
    color: var(--grey900);
    font-weight: bold;
    font-size: 1.5rem;
  }

  .subtxt {
    display: none;
    opacity: 0;
    color: white;
    font-weight: bold;
    font-size: 1.3rem;
    line-height: 1.5;
  }

  transition: 0.25s ease-in;

  &:hover {
    .content {
      display: none;
    }
    .subtxt {
      display: block;
      opacity: 1;
      transform: translateY(0px);
    }
    ${(props) => {
      switch (props.type) {
        case "mon1":
          return css`
            background-color: var(--mon1);
          `;
        case "mon2":
          return css`
            background-color: var(--mon2);
          `;
        case "mon3":
          return css`
            background-color: var(--mon3);
          `;
        case "mon4":
          return css`
            background-color: var(--mon4);
          `;
        case "mon5":
          return css`
            background-color: var(--mon5);
          `;
      }
    }}
  }

  @media (max-width: 767.98px) {
    width: 100%;
    height: initial;
    margin-top: 20px;
    padding: 20px;

    .content {
      flex-direction: row;
      img {
        height: 30px;
        margin-right: 20px;
      }
    }
  }
`;

const SquareLink = styled(Link)`
  @media (max-width: 767.98px) {
    width: 100%;
  }
`;

function SquareMenu({ option }) {
  return (
    <SquareLink to={option.link}>
      <SquareBlock type={option.type}>
        <div className="content">
          <img src={option.img} />
          <div className="txt">{option.txt}</div>
        </div>
        <div className="subtxt">{option.subtxt}</div>
      </SquareBlock>
    </SquareLink>
  );
}

export default SquareMenu;
