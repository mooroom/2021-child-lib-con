import React, { useEffect, useState } from "react";
import styled, { css } from "styled-components";
import { Form } from "semantic-ui-react";
import { db, storage, timestamp } from "../../firebase";

import ModalHead from "./ModalHead";
import ModalTemplate from "./ModalTemplate";
import ModalList from "./ModalList";
import Button from "../Button";

import letter from "../../img/letter.svg";
import icon_warn from "../../img/icon_warn.svg";
import icon_check from "../../img/icon_check.svg";

// button
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
// button

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

function ModalPhoto({ visible, setVisible }) {
  const [step, setStep] = useState(1);

  const [inputs, setInputs] = useState({
    name: "",
    birth: "",
    phone: "",
    title: "",
    url1: "",
    url2: "",
  });

  const [file1, setFile1] = useState(null);
  const [file2, setFile2] = useState(null);

  const [check1, setCheck1] = useState(false);
  const [check2, setCheck2] = useState(false);
  const [proceed, setProceed] = useState(false);

  const { name, birth, phone, title } = inputs;

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

  const onChange = (e, data) => {
    const { value, name } = data;
    setInputs({
      ...inputs,
      [name]: value,
    });
  };

  const onToggle1 = () => {
    setCheck1((check) => !check);
  };
  const onToggle2 = () => {
    setCheck2((check) => !check);
  };

  const fileChange1 = (e) => {
    setFile1(e.target.files[0]);
  };
  const fileChange2 = (e) => {
    setFile2(e.target.files[0]);
  };

  const onCancel = () => {
    setVisible(false);
    onReset();
  };

  const onProceed = () => {
    if (proceed) {
      setStep((step) => step + 1);
    } else {
      window.alert("?????? ????????? ?????? ??????????????????!");
    }
  };

  const onReset = () => {
    setInputs({
      name: "",
      birth: "",
      phone: "",
      title: "",
      url1: "",
      url2: "",
    });
    setFile1(null);
    setFile2(null);
    setCheck1(false);
    setCheck2(false);
  };

  const onFin = () => {
    setVisible(0);
    onReset();
    setStep(1);
    setProceed(false);

    const createdAt = timestamp();

    db.collection("photo")
      .add({ ...inputs, createdAt })
      .then((docRef) => {
        if (file1) {
          const storageRef1 = storage.ref(
            inputs.name + "_" + inputs.phone + "_1"
          );
          storageRef1.put(file1).on(
            "state_changed",
            (snap) => {},
            (err) => {
              console.log(err);
            },
            async () => {
              const url = await storageRef1.getDownloadURL();
              docRef.update({ url1: url });
            }
          );
        }
        if (file2) {
          const storageRef2 = storage.ref(
            inputs.name + "_" + inputs.phone + "_2"
          );
          storageRef2.put(file2).on(
            "state_changed",
            (snap) => {},
            (err) => {
              console.log(err);
            },
            async () => {
              const url = await storageRef2.getDownloadURL();
              docRef.update({ url2: url });
            }
          );
        }
      })
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
              <ModalHead image={letter} text="?????? ????????? ?????? ?????????" />
              <ModalList>
                <Form>
                  <Form.Input
                    fluid
                    type="text"
                    label="??????"
                    placeholder="??????"
                    name="name"
                    value={name}
                    onChange={onChange}
                  />
                  <Form.Input
                    fluid
                    type="number"
                    label="????????????"
                    placeholder="???: 20020101"
                    name="birth"
                    value={birth}
                    onChange={onChange}
                  />
                  <Form.Input
                    fluid
                    type="number"
                    label="?????????"
                    placeholder="????????? ??????????????????"
                    name="phone"
                    value={phone}
                    onChange={onChange}
                  />
                  <Form.Input
                    fluid
                    type="text"
                    label="?????????"
                    placeholder="???????????? ??????????????????"
                    name="title"
                    value={title}
                    onChange={onChange}
                  />
                  <Form.Input
                    fluid
                    label="????????????1"
                    type="file"
                    readOnly
                    onChange={fileChange1}
                  />
                  <Form.Input
                    fluid
                    label="????????????2"
                    type="file"
                    readOnly
                    onChange={fileChange2}
                  />
                  <Agreement>
                    <div className="maintxt">??????????????????</div>
                    <div className="description">
                      ????????? ????????? ????????? ??????, ?????? ??????, ?????? ?????? ???
                      ???????????? ???????????????.
                    </div>
                    <div className="agree">
                      <div className="agreeCheck">
                        <CheckCircle checked={check1} onClick={onToggle1} />
                        <div className="checktitle">
                          ???????????? ?????? ??? ?????? ??????
                        </div>
                      </div>
                      <div className="agreeBox">
                        [???????????? ?????? ??? ?????? ?????????]
                        <br />
                        <b>???????????? ??????????????? ????????? ??????</b>
                        <br />
                        -?????? : ??????, ????????????, ????????? ??????, ??????
                        <br />
                        -?????? : ?????? ?????? ??? ???????????? ??????
                        <br />
                        <b>???????????? ?????? ??????</b>
                        <br />
                        -???????????? ??????????????? ??????????????? ??????????????? ?????? ???
                        ??????????????? ???????????? ?????? ?????? ???????????????.
                        <br />
                        <b>???????????? ?????? ?????? ????????? ??????</b>
                        <br />
                        -???????????????????????????????????? ????????? ????????? ?????? ??????
                        ???????????? ?????????, ??? ?????? ????????? ?????? ??? ??? ????????????.
                      </div>
                    </div>
                    <div className="agree">
                      <div className="agreeCheck">
                        <CheckCircle checked={check2} onClick={onToggle2} />
                        <div className="checktitle">????????? ??????</div>
                      </div>
                      <div className="agreeBox">
                        [?????????]
                        <br />
                        -??? ????????? ?????? ???????????? ????????????????????????????????????
                        ???????????? ?????????, ????????? ?????? ?????? ????????? ????????????
                        ????????????.
                        <br />
                        -??? ????????? ?????? ??????????????? ????????? ???????????????
                        ?????????????????? ????????? ????????? ????????? ?????? ????????? ??????
                        ????????? ???????????????????????????????????? ?????? ???????????????.
                      </div>
                    </div>
                  </Agreement>
                </Form>
              </ModalList>
              <ModalButtonBlock>
                <CancelButton onClick={onCancel} color="#d1d6db" type="reset">
                  ??????
                </CancelButton>
                <SubmitButton onClick={onProceed} type="button">
                  ????????????
                </SubmitButton>
              </ModalButtonBlock>
            </>
          )}
          {step === 2 && (
            <ModalSub type="warn">
              <img src={icon_warn} alt="img" />
              <div className="txt">????????????</div>
              <div className="info">
                <b>?????????????????????????</b>
                <br />
                <br />
                ????????? ????????? ????????? ???????????????.
              </div>
              <Button width="100%" color="#FE8181" onClick={() => setStep(3)}>
                ??????????????? ???????????? ??????
              </Button>
            </ModalSub>
          )}
          {step === 3 && (
            <ModalSub type="complete">
              <img src={icon_check} alt="img" />
              <div className="txt">????????? ??????????????? ?????????????????????.</div>
              <Button width="100%" color="#5BED88" onClick={onFin}>
                ??????
              </Button>
            </ModalSub>
          )}
        </ModalTemplate>
      </DarkBackground>
    </>
  );
}

export default ModalPhoto;
