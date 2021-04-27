import React from "react";
import styled from "styled-components";

const ModalListBlock = styled.div`
  flex: 1;
  padding: 20px 30px;
  overflow-y: auto;
  &::-webkit-scrollbar {
    display: none;
  }
`;

function ModalList({ children }) {
  return <ModalListBlock>{children}</ModalListBlock>;
}

export default ModalList;
