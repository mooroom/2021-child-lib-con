import React from "react";

import ModalHead from "../components/modal/ModalHead";
import ModalTemplate from "../components/modal/ModalTemplate";

import letter from "../img/letter.svg";
import ModalList from "../components/modal/ModalList";
import ModalInput from "../components/modal/ModalInput";

function Sub1(props) {
  return (
    <div>
      <ModalTemplate>
        <ModalHead image={letter} text="집콕 책읽기 사진 제출" />
        <ModalList>
          <ModalInput
            id="1"
            label="이름"
            type="file"
            accept="image/png, image/jpeg"
            capture="gallery"
            placeholder="이름을 입력해주세요"
          />
        </ModalList>
      </ModalTemplate>
    </div>
  );
}

export default Sub1;
