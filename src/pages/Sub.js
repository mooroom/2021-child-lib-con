import React, { useEffect, useState } from "react";
import styled, { css } from "styled-components";

import Navbar from "../components/Navbar";
import Banner from "../components/Banner";
import Content from "../components/Content";
import Footer from "../components/Footer";

import ModalPaint from "../components/modal/ModalPaint";
import ModalPhoto from "../components/modal/ModalPhoto";
import ModalSNS from "../components/modal/ModalSNS";

import { ReactComponent as CloseIcon } from "../img/icon_close.svg";

const DarkBackground = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  position: fixed;
  top: 0;
  left: 0;
  bottom: 0;
  right: 0;
  background-color: rgba(0, 0, 0, 0.5);
  z-index: 999;

  ${(props) =>
    !props.visible &&
    css`
      display: none;
    `}
`;

const PopupBlock = styled.div`
  background-color: white;
  max-width: 400px;
  padding: 0px 20px 30px 20px;
  border-radius: 20px;
  position: relative;
`;

const PopupHead = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: flex-end;
  padding: 20px 0px 10px 0px;
`;

const PopupContent = styled.div`
  color: var(--grey600);
  text-align: center;

  h3 {
    text-align: center;
    font-weight: bold;
  }
  h5 {
    line-height: 1.6;
    margin-bottom: 2rem;
  }
`;

function Sub({ match }) {
  const { pagename } = match.params;

  const [modal, setModal] = useState(0);
  const [popUp, setPopup] = useState(false);

  useEffect(() => {
    console.log(pagename);
    if (pagename === "theater" || pagename === "contest") {
      setPopup(true);
    } else {
      setPopup(false);
    }
  }, [pagename]);

  const popupMsg = {
    theater: {
      title: "온라인극장 캡처 이벤트 종료!",
      msg: "여러분의 성원에 힘입어 온라인극장 캡처 이벤트가 종료되었습니다. 참여해주신 분들께 다시 한번 감사의 말씀드리며 당첨자들께는 문자메시지로 차주중 기프티콘 발송해드리도록 하겠습니다!",
    },
    contest: {
      title: "공모전 종료!",
      msg: "그리기 대회와 사진 공모전의 사전 접수가 종료되었습니다. 다양한 작품으로 참여해주신 여러분들께 감사의 말씀 드리며, 심사 후 수상자들께는 개별 연락드리도록 하겠습니다.",
    },
  };
  return (
    <>
      <DarkBackground visible={popUp}>
        <PopupBlock>
          <PopupContent>
            <PopupHead>
              <CloseIcon fill="#6b7684" onClick={() => setPopup(false)} />
            </PopupHead>
            <h3>
              {pagename === "theater"
                ? popupMsg.theater.title
                : popupMsg.contest.title}
            </h3>
            <br />
            <h5>
              <b style={{ color: "red" }}>[접수마감]</b>
              <br />
              {pagename === "theater"
                ? popupMsg.theater.msg
                : popupMsg.contest.msg}
            </h5>
          </PopupContent>
        </PopupBlock>
      </DarkBackground>
      <Navbar current={pagename} />
      <Banner pagename={pagename} />
      <Content pagename={pagename} setModal={setModal} />
      <Footer />
      <ModalPaint pagename={pagename} visible={modal} setVisible={setModal} />
      <ModalPhoto pagename={pagename} visible={modal} setVisible={setModal} />
      <ModalSNS pagename={pagename} visible={modal} setVisible={setModal} />
    </>
  );
}

export default Sub;
