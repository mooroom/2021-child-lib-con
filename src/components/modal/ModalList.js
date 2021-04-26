import React from "react";
import styled from "styled-components";

const ModalListBlock = styled.div`
  flex: 1;
  padding: 20px 30px;
  overflow-y: auto;
`;

function ModalList({ children }) {
  return <ModalListBlock>{children}</ModalListBlock>;
}

export default ModalList;
