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

function ModalButton({ setVisible, setStep, proceed, onReset, sns }) {
  const onCancel = () => {
    setVisible(false);
    onReset();
  };

  const onProceed = () => {
    if (proceed) {
      setStep((step) => step + 1);
    } else {
      window.alert("제출 양식을 다시 확인해주세요!");
    }
  };
  return (
    <ModalButtonBlock>
      <CancelButton onClick={onCancel} color="#d1d6db" type="button">
        취소
      </CancelButton>
      {sns ? (
        <SubmitButton onClick={onProceed} type="button">
          참여하기
        </SubmitButton>
      ) : (
        <SubmitButton onClick={onProceed} type="button">
          제출하기
        </SubmitButton>
      )}
    </ModalButtonBlock>
  );
}

export default ModalButton;
