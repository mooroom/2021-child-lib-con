import React from "react";
import styled from "styled-components";

const InputGroup = styled.div`
  position: relative;
  margin-bottom: 30px;
`;

const InputLabel = styled.label`
  color: rgb(78, 89, 104);
  display: block;
  padding: 4px 0;
  font-size: 15px;
  font-weight: 500;
  line-height: 1.6;
  position: relative;
`;

const InputFieldBlock = styled.div`
  position: relative;
  display: flex;
  align-items: center;
  width: 100%;
  height: var(--input-height);
  margin: 1px auto 0;
  font-size: 15px;
  line-height: 20px;
  color: var(--grey700);
  background-color: var(--white);
  border: none;
  outline: none;
  box-shadow: inset 0 0 0 1px var(--greyOpacity200);
  appearance: none;
  overflow: hidden;
  border-radius: var(--radius-m);

  transition-property: background, color, box-shadow;
  transition-duration: 0.2s, 0.1s, 0.2s;
  transition-timing-function: ease, ease, ease;
  transition-delay: 0s, 0s, 0s;
`;

const InputField = styled.input`
  flex-grow: 1;
  outline: 0;
  border: 0;
  border-radius: var(--radius-m);
  background: none;
  line-height: var(--input-height);
  font-size: inherit;
  padding: 0 var(--input-h-padding);
  height: 100%;

  &:focus {
    box-shadow: inset 0 0 0 2px var(--orange200);
  }

  #file-upload-button {
    background: white !important;
  }
`;

function ModalInput({ id, label, ...rest }) {
  return (
    <InputGroup>
      <InputLabel htmlFor={id}>{label}</InputLabel>
      <InputFieldBlock>
        <InputField id={id} {...rest} />
      </InputFieldBlock>
    </InputGroup>
  );
}

export default ModalInput;
