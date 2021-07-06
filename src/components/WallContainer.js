import React from "react";
import styled from "styled-components";

const WallContainerBlock = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;

  @media (max-width: 767.98px) {
    flex-direction: column;
  }
`;

function WallContainer({ children }) {
  return <WallContainerBlock>{children}</WallContainerBlock>;
}

export default WallContainer;
