import React from "react";
import styled from "styled-components";

const ModalHeadBlock = styled.div`
  padding: 20px;
  text-align: center;
  border-bottom: 1px solid #e9ecef;
  h1 {
    margin: 0;
  }
`;

function ModalHead({ image, text }) {
  return (
    <ModalHeadBlock>
      {image && <img src={image} />}
      <h1>{text}</h1>
    </ModalHeadBlock>
  );
}

export default ModalHead;
