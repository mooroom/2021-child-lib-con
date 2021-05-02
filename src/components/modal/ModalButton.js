import React from "react";
import styled from "styled-components";

import Button from "../Button";

const ModalButtonBlock = styled.div`
  padding: 20px;
  display: flex;
  justify-content: space-between;
`;

const SubmitButton = styled(Button)`
  flex: 2;
`;

const CancelButton = styled(Button)`
  flex: 1;
`;

function ModalButton({ setVisible, setStep }) {
  const onCancel = () => {
    setVisible(false);
  };
  return (
    <ModalButtonBlock>
      <CancelButton onClick={onCancel} color="#d1d6db">
        취소
      </CancelButton>
      <SubmitButton onClick={() => setStep((step) => step + 1)}>
        제출하기
      </SubmitButton>
    </ModalButtonBlock>
  );
}

export default ModalButton;
