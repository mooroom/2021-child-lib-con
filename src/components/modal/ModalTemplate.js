import React from "react";

import styled from "styled-components";

const ModalTemplateBlock = styled.div`
  position: fixed;
  background: white;
  border-radius: 16px;
  left: 20px;
  right: 20px;
  top: 50%;
  margin: 0 auto;
  max-width: 450px;
  max-height: 90%;
  transform: translate(0, -50%);
  display: flex;
  flex-direction: column;
`;

function ModalTemplate({ children }) {
  return <ModalTemplateBlock>{children}</ModalTemplateBlock>;
}

export default ModalTemplate;
