import React from "react";
import styled, { css } from "styled-components";
import { Link } from "react-router-dom";

const WallBlock = styled.div`
  width: 600px;
  background: white;
  padding: 0px 20px;
  border-radius: 15px;
`;

const WallHead = styled.div`
  width: 100%;
  padding: 20px 0px;
  color: "#2B2B2B";
  display: flex;
  align-items: center;
  justify-content: center;

  h1 {
    margin-left: 1rem;
    font-weight: bold;
  }

  img {
    width: 50px;
  }
`;

const WallImg = styled.div`
  width: 100%;
  img {
    border-radius: 10px;
    width: 100%;
  }
  padding-bottom: 20px;
`;

const WallLink = styled(Link)`
  color: inherit;

  &:hover {
    color: inherit;
  }

  & + & {
    margin-left: 30px;
  }
`;

function Wall({ content }) {
  return (
    <WallLink to={content.link}>
      <WallBlock>
        <WallHead>
          <img src={content.imgTitle} alt="imgTitle" />
          <h1>{content.title}</h1>
        </WallHead>
        <WallImg>
          <img src={content.imgMain} alt="imgMain" />
        </WallImg>
      </WallBlock>
    </WallLink>
  );
}

export default Wall;
