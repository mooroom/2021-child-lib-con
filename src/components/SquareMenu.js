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
    font-size: 1.3rem;
  }

  .subtxt {
    display: none;
    opacity: 0;
    color: white;
    font-weight: bold;
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
`;

function SquareMenu({ option }) {
  return (
    <Link to={option.link}>
      <SquareBlock type={option.type}>
        <div className="content">
          <img src={option.img} />
          <div className="txt">{option.txt}</div>
        </div>
        <div className="subtxt">{option.subtxt}</div>
      </SquareBlock>
    </Link>
  );
}

export default SquareMenu;
