import React, { useEffect, useState } from "react";
import styled, { css } from "styled-components";

import ModalHead from "./ModalHead";
import ModalTemplate from "./ModalTemplate";
import ModalList from "./ModalList";
import ModalInput from "./ModalInput";
import ModalButton from "./ModalButton";
import Button from "../Button";

import letter from "../../img/letter.svg";
import icon_warn from "../../img/icon_warn.svg";
import icon_check from "../../img/icon_check.svg";

const DarkBackground = styled.div`
  position: fixed;
  z-index: 100;
  left: 0;
  top: 0;
  width: 100%;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  background: rgba(0, 0, 0, 0.8);
  display: none;
  ${(props) =>
    props.visible &&
    css`
      display: block;
    `}
`;

const ModalSub = styled.div`
  padding: 20px;
  display: flex;
  justify-content: space-around;
  align-items: center;
  flex-direction: column;

  text-align: center;
  img {
    height: 50px;
    margin-bottom: 1rem;
  }

  .txt {
    color: ${(props) => (props.type === "warn" ? "#FE8181" : "#5BED88")};
    margin-bottom: 1rem;
    font-weight: bold;
    font-size: 1.2rem;
  }

  .info {
    padding: 40px;
    border-radius: 10px;
    color: var(--grey600);
    background-color: #f0f0f0;
    margin-bottom: 1rem;
    width: 100%;
  }
`;

function Modal({ pagename, visible, setVisible }) {
  const [step, setStep] = useState(1);
  const onFin = () => {
    setVisible(false);
    setStep(1);
  };
  return (
    <>
      <DarkBackground visible={visible}>
        <ModalTemplate>
          {step === 1 && (
            <>
              <ModalHead image={letter} text="집콕 책읽기 사진 제출" />
              <ModalList>
                <ModalInput
                  id="1"
                  label="이름"
                  type="text"
                  placeholder="이름을 입력해주세요"
                />
                <ModalInput
                  id="2"
                  label="전화번호"
                  type="text"
                  placeholder="휴대폰 번호를 입력해주세요"
                />
                <ModalInput
                  id="3"
                  label="이메일"
                  type="text"
                  placeholder="이메일 주소를 입력해주세요"
                />
                <ModalInput
                  id="4"
                  label="파일첨부"
                  type="file"
                  accept="image/png, image/jpeg"
                  capture="gallery"
                />
              </ModalList>
              <ModalButton setVisible={setVisible} setStep={setStep} />
            </>
          )}
          {step === 2 && (
            <ModalSub type="warn">
              <img src={icon_warn} />
              <div className="txt">
                반드시 아래 주소로
                <br />
                실제 작품을 보내주세요!
              </div>
              <div className="info">
                서울시 영등포구 대림동 810-6
                <br />
                국립어린이 도서관 앞
              </div>
              <Button width="100%" color="#FE8181" onClick={() => setStep(3)}>
                주의사항을 확인하고 제출
              </Button>
            </ModalSub>
          )}
          {step === 3 && (
            <ModalSub type="complete">
              <img src={icon_check} />
              <div className="txt">
                제출 완료!
                <br />
                확인 메일을 보내드렸어요
              </div>
              <div className="info">
                [wjsghdyd4538@naver.com]을
                <br />
                확인해주세요.
              </div>
              <Button width="100%" color="#5BED88" onClick={onFin}>
                제출완료
              </Button>
            </ModalSub>
          )}
        </ModalTemplate>
      </DarkBackground>
    </>
  );
}

export default Modal;
