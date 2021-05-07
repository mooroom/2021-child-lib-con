import React, { useEffect, useState, useRef } from "react";
import styled, { css } from "styled-components";
import { Form, Button } from "semantic-ui-react";
import { db, storage, timestamp } from "../../firebase";

import ModalHead from "./ModalHead";
import ModalTemplate from "./ModalTemplate";
import ModalList from "./ModalList";
import ModalButton from "./ModalButton";
import StyledButton from "../Button";

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
  { key: "1", text: "유아", value: "유아" },
  { key: "2", text: "초등저", value: "초등저" },
  { key: "3", text: "초등고", value: "초등고" },
];

function ModalPhoto({ visible, setVisible }) {
  const [step, setStep] = useState(1);

  const [inputs, setInputs] = useState({
    name: "",
    birth: "",
    phone: "",
    title: "",
  });

  const { name, birth, phone, title } = inputs;

  const onChange = (e, data) => {
    const { value, name } = data;
    setInputs({
      ...inputs,
      [name]: value,
    });
  };

  const [file1, setFile1] = useState(null);
  const [file2, setFile2] = useState(null);

  const fileChange1 = (e) => {
    setFile1(e.target.files[0]);
  };
  const fileChange2 = (e) => {
    setFile2(e.target.files[0]);
  };

  const onReset = () => {
    setInputs({
      name: "",
      birth: "",
      phone: "",
      title: "",
    });
    setFile1(null);
    setFile2(null);
    setCheck1(false);
    setCheck2(false);
  };

  const [url1, setUrl1] = useState(null);
  const [url2, setUrl2] = useState(null);
  const [error1, setError1] = useState(null);
  const [error2, setError2] = useState(null);

  useEffect(() => {
    if (file1) {
      const storageRef1 = storage.ref(inputs.name + "_" + inputs.phone + "_1");
      storageRef1.put(file1).on(
        "state_changed",
        (snap) => {},
        (err) => {
          setError1(err);
          console.log(err);
        },
        async () => {
          const url = await storageRef1.getDownloadURL();
          setUrl1(url);
        }
      );
    }
  }, [file1, inputs]);

  const [check1, setCheck1] = useState(false);
  const [check2, setCheck2] = useState(false);
  const [proceed, setProceed] = useState(false);

  const onToggle1 = () => {
    setCheck1((check) => !check);
  };
  const onToggle2 = () => {
    setCheck2((check) => !check);
  };

  useEffect(() => {
    let num = phone.toString();
    let numdigit = num.length;
    let isLegalDigit = numdigit === 11 || numdigit === 10;

    let bir = birth.toString();
    let birdigit = bir.length;
    let isLegalBirDigit = birdigit === 8;

    if (
      check1 &&
      check2 &&
      name &&
      birth &&
      phone &&
      title &&
      isLegalDigit &&
      isLegalBirDigit &&
      file1
    ) {
      setProceed(true);
    } else {
      setProceed(false);
    }
  }, [check1, check2, name, birth, phone, title, file1]);

  useEffect(() => {
    if (file2) {
      const storageRef2 = storage.ref(inputs.name + "_" + inputs.phone + "_2");
      storageRef2.put(file2).on(
        "state_changed",
        (snap) => {},
        (err) => {
          setError2(err);
          console.log(err);
        },
        async () => {
          const url = await storageRef2.getDownloadURL();
          setUrl2(url);
        }
      );
    }
  }, [file2, inputs]);

  const onFin = () => {
    setVisible(0);
    onReset();
    setStep(1);
    setProceed(false);

    const createdAt = timestamp();

    db.collection("photo")
      .doc()
      .set({ ...inputs, url1, url2, createdAt })
      .then((docRef) => {})
      .catch((e) => {
        console.error("Error adding document: ", e);
      });
  };

  return (
    <>
      <DarkBackground visible={visible === 4}>
        <ModalTemplate>
          {step === 1 && (
            <>
              <ModalHead image={letter} text="집콕 책읽기 사진 공모전" />
              <ModalList>
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
                    label="생년월일"
                    placeholder="예: 20020101"
                    name="birth"
                    value={birth}
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
                    label="작품명"
                    placeholder="작품명을 입력해주세요"
                    name="title"
                    value={title}
                    onChange={onChange}
                  />
                  <Form.Input
                    fluid
                    label="파일첨부1"
                    type="file"
                    readOnly
                    onChange={fileChange1}
                  />
                  <Form.Input
                    fluid
                    label="파일첨부2"
                    type="file"
                    readOnly
                    onChange={fileChange2}
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
                        -항목 : 성명, 생년월일, 휴대폰 번호, 주소
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
                    <div className="agree">
                      <div className="agreeCheck">
                        <CheckCircle checked={check2} onClick={onToggle2} />
                        <div className="checktitle">서약서 동의</div>
                      </div>
                      <div className="agreeBox">
                        [서약서]
                        <br />
                        -위 작품에 대한 저작권은 국립어린이청소년도서관에
                        양도되며 초상권, 저작권 등의 법적 책임은 본인에게
                        있습니다.
                        <br />
                        -위 작품이 다른 공모전에서 입상된 경우이거나
                        합성사진으로 밝혀져 수상을 취소할 경우 상장과 상금
                        일체를 국립어린이청소년도서관에 즉시 반환합니다.
                      </div>
                    </div>
                  </Agreement>
                </Form>
              </ModalList>
              <ModalButton
                setVisible={setVisible}
                setStep={setStep}
                proceed={proceed}
              />
            </>
          )}
          {step === 2 && (
            <ModalSub type="warn">
              <img src={icon_warn} />
              <div className="txt">주의사항</div>
              <div className="info">
                <b>접수하시겠습니까?</b>
                <br />
                <br />
                제출된 후에는 수정이 불가합니다.
              </div>
              <StyledButton
                width="100%"
                color="#FE8181"
                onClick={() => setStep(3)}
              >
                주의사항을 확인하고 제출
              </StyledButton>
            </ModalSub>
          )}
          {step === 3 && (
            <ModalSub type="complete">
              <img src={icon_check} />
              <div className="txt">제출이 정상적으로 완료되었습니다.</div>
              <StyledButton width="100%" color="#5BED88" onClick={onFin}>
                확인
              </StyledButton>
            </ModalSub>
          )}
        </ModalTemplate>
      </DarkBackground>
    </>
  );
}

export default ModalPhoto;
