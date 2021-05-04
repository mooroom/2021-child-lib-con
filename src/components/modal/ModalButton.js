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

function ModalButton({ setVisible, setStep, proceed, sns }) {
  const onCancel = () => {
    setVisible(false);
  };

  const onProceed = () => {
    if (proceed) {
      setStep((step) => step + 1);
    }
  };
  return (
    <ModalButtonBlock>
      <CancelButton onClick={onCancel} color="#d1d6db">
        취소
      </CancelButton>
      {sns ? (
        <SubmitButton onClick={onProceed}>참여하기</SubmitButton>
      ) : (
        <SubmitButton onClick={onProceed}>제출하기</SubmitButton>
      )}
    </ModalButtonBlock>
  );
}

export default ModalButton;
