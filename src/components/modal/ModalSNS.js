import React, { useEffect, useState } from "react";
import styled, { css } from "styled-components";
import { Form } from "semantic-ui-react";
import { db, timestamp } from "../../firebase";

import ModalHead from "./ModalHead";
import ModalTemplate from "./ModalTemplate";
import ModalList from "./ModalList";
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

const Agreement = styled.div`
  margin-bottom: 1rem;

  width: 100%;
  .maintxt {
    display: block;
    margin: 0 0 0.28571429rem 0;
    color: rgba(0, 0, 0, 0.87);
    font-size: 0.92857143em;
    font-weight: 700;
    text-transform: none;
  }
  .description {
    font-size: 12px;
    color: #666;
    margin-bottom: 10px;
  }
  .agreeCheck {
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: flex-start;
    margin-top: 10px;
    margin-bottom: 8px;
  }
  .agreeBox {
    width: 100%;
    padding: 10px 13px;
    font-size: 12px;
    background-color: #f4f4f4;
    color: #656565;
    border-radius: 7px;
  }
`;

const CheckCircle = styled.div`
  width: 23px;
  height: 23px;
  border: 1px solid var(--grey300);
  border-radius: 50%;
  margin-right: 5px;
  ${(props) =>
    props.checked &&
    css`
      background-color: var(--primary);
      border: none;
    `}
`;

const options = [
  { key: "1", text: "유아", value: "유야" },
  { key: "2", text: "초등저", value: "초등저" },
  { key: "3", text: "초등고", value: "초등고" },
];

function ModalSNS({ visible, setVisible }) {
  const [step, setStep] = useState(1);

  const [inputs, setInputs] = useState({
    name: "",
    phone: "",
    sns: "",
  });

  const { name, phone, sns } = inputs;

  const onChange = (e, data) => {
    const { value, name } = data;
    setInputs({
      ...inputs,
      [name]: value,
    });
  };

  const onReset = () => {
    setInputs({
      name: "",
      phone: "",
      sns: "",
    });
    setCheck1(false);
  };

  const onFin = () => {
    setVisible(0);
    setProceed(false);
    onReset();
    setStep(1);

    const createdAt = timestamp();

    db.collection("sns")
      .doc(inputs.phone)
      .set({ ...inputs, createdAt })
      .then((docRef) => {
        console.log(docRef.id);
      })
      .catch((e) => {
        console.error("Error adding document: ", e);
      });
  };

  const [check1, setCheck1] = useState(false);
  const [proceed, setProceed] = useState(false);

  const onToggle1 = () => {
    setCheck1((check) => !check);
  };

  useEffect(() => {
    let num = phone.toString();
    let numdigit = num.length;
    let isLegalDigit = numdigit === 11 || numdigit === 10;
    if (check1 && name && phone && sns && isLegalDigit) {
      setProceed(true);
    } else {
      setProceed(false);
    }
  }, [check1, name, phone, sns]);

  return (
    <>
      <DarkBackground visible={visible === 1 || visible === 2}>
        <ModalTemplate>
          {step === 1 && (
            <>
              <ModalHead image={letter} text="SNS 인증 이벤트" />
              <ModalList>
                <Agreement>
                  <div
                    className="maintxt"
                    style={{ color: "#6AB32D", fontSize: "1.1rem" }}
                  >
                    *SNS 인증 방법
                  </div>
                  <div className="description">
                    SNS인증 시, 아래 기재된 내용을 반드시 지켜주세요!
                  </div>
                  <div className="agree">
                    <div className="agreeBox">
                      1. 온라인 극장을 시청하고, 본인의 SNS에 올린 후 해시태그로
                      인증해주세요.
                      <br />
                      <b>
                        #국립어린이청소년도서관 #2021어린이날큰잔치 #온라인극장
                      </b>
                      <br />
                      <br />
                      2. 비공개 계정의 경우 심사대상에서 제외됩니다! 꼭 계정을
                      공개로 전환해주세요!
                    </div>
                  </div>
                </Agreement>
                <Form>
                  <Form.Input
                    fluid
                    type="text"
                    label="이름"
                    placeholder="이름"
                    name="name"
                    value={name}
                    onChange={onChange}
                  />
                  <Form.Input
                    fluid
                    type="number"
                    label="휴대폰"
                    placeholder="숫자만 입력해주세요"
                    name="phone"
                    value={phone}
                    onChange={onChange}
                  />
                  <Form.Input
                    fluid
                    type="text"
                    label="SNS 업로드 주소"
                    placeholder="공개 계정을 입력해주세요(비공개 시, 심사제외)"
                    name="sns"
                    value={sns}
                    onChange={onChange}
                  />

                  <Agreement>
                    <div className="maintxt">이용약관동의</div>
                    <div className="description">
                      제출한 작품을 도서관 전시, 행사 홍보, 책자 발간 등
                      활용함에 동의합니다.
                    </div>
                    <div className="agree">
                      <div className="agreeCheck">
                        <CheckCircle checked={check1} onClick={onToggle1} />
                        <div className="checktitle">
                          개인정보 수집 및 이용 동의
                        </div>
                      </div>
                      <div className="agreeBox">
                        [개인정보 수집 및 이용 동의서]
                        <br />
                        <b>수집하는 개인정보의 항목과 목적</b>
                        <br />
                        -항목 : 성명, 생년월일, 휴대폰 번호, SNS 주소
                        <br />
                        -목적 : 개인 식별 및 연락경로 확보
                        <br />
                        <b>개인정보 보유 기간</b>
                        <br />
                        -정보주체 개인정보는 원칙적으로 개인정보의 수집 및
                        이용목적이 달성되면 지체 없이 파기합니다.
                        <br />
                        <b>개인정보 수집 동의 거부의 권리</b>
                        <br />
                        -국립어린이청소년도서관은 제공을 원하지 않을 경우
                        수집하지 않으며, 이 경우 신청이 제한 될 수 있습니다.
                      </div>
                    </div>
                  </Agreement>
                </Form>
              </ModalList>
              <ModalButton
                setVisible={setVisible}
                setStep={setStep}
                proceed={proceed}
                sns
              />
            </>
          )}
          {step === 2 && (
            <ModalSub type="complete">
              <img src={icon_check} />
              <div className="txt">제출이 정상적으로 완료되었습니다.</div>
              <Button width="100%" color="#5BED88" onClick={onFin}>
                확인
              </Button>
            </ModalSub>
          )}
        </ModalTemplate>
      </DarkBackground>
    </>
  );
}

export default ModalSNS;
