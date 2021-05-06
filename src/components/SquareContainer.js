import React from "react";
import styled from "styled-components";

const Container = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;

  @media (max-width: 767.98px) {
    flex-direction: column;
  }
`;

function SquareContainer({ children }) {
  return <Container>{children}</Container>;
}

export default SquareContainer;
