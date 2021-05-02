import React, { useEffect, useState } from "react";
import styled, { css } from "styled-components";

import Button from "../components/Button";
import Container from "../components/Container";

import web_contest1 from "../img/web_contest1.jpg";
import web_contest2 from "../img/web_contest2.jpg";
import web_program from "../img/web_program.jpg";
import web_event from "../img/web_event.jpg";
import video from "../img/video.svg";

const ContentWrapper = styled.div`
  width: 100%;
`;
const SubMenuBlock = styled.div`
  width: 100%;
  padding: 20px;
  display: flex;
  align-items: center;
  justify-content: center;
  border-bottom: 1px solid var(--grey200);
  cursor: pointer;
`;

const SubMenuItem = styled.div`
  color: var(--grey700);
  padding: 10px 20px;
  border-radius: 50px;
  font-size: 1.1rem;
  ${(props) =>
    props.active &&
    css`
      color: white;
      background-color: var(--grey500);
      font-weight: bold;
    `}

  & + & {
    margin-left: 20px;
  }
`;

const ContentBlock = styled.section`
  width: 100%;
  display: none;
  ${(props) =>
    props.active &&
    css`
      display: block;
    `}
  .contentTxt {
    width: 100%;
    padding: 30px 0;
    font-size: 1.2rem;
    font-weight: bold;
    color: var(--grey800);
    text-align: center;
  }
`;

const ButtonCon = styled.div`
  width: 100%;
  padding: 30px 0;
  display: flex;
  justify-content: center;
`;

function Content({ setModal, pagename }) {
  const contentData = {
    support: [
      {
        id: 1,
        active: true,
        title: "응원영상",
        txt: "어린이가 행복한 세상을 만들어요!",
        img: video,
        button: false,
      },
    ],
    theater: [
      {
        id: 1,
        active: true,
        title: "색깔의 비밀",
        txt: "그림책 작가와 떠나는 신나는 이야기 여행!",
        img: video,
        button: true,
        buttontxt: "SNS 인증 이벤트 참여",
        onClick: () => setModal(true),
      },
      {
        id: 2,
        active: false,
        title: "생각하는 호랑이 바라",
        txt: "그림책 작가와 떠나는 신나는 이야기 여행!",
        img: video,
        button: true,
        buttontxt: "SNS 인증 이벤트 참여",
        onClick: () => setModal(true),
      },
    ],
    contest: [
      {
        id: 1,
        active: true,
        title: "독서감상 그리기 대회",
        txt: "책을 읽은 후 여러분의 감상을 그림으로 표현해 봐요!",
        img: web_contest1,
        button: true,
        buttontxt: "접수하기",
        onClick: () => setModal(true),
      },
      {
        id: 2,
        active: false,
        title: "집콕 책읽기 사진 공모전",
        txt: "집에 콕 박혀서 하는 독서의 즐거움!",
        img: web_contest2,
        button: true,
        buttontxt: "접수하기",
        onClick: () => setModal(true),
      },
    ],
    program: [
      {
        id: 1,
        active: true,
        title: "미꿈소 뚝딱상자",
        txt: "미꿈소 뚝딱상자",
        img: web_program,
        button: true,
        buttontxt: "자세히 보기",
        onClick: () => {
          var win = window.open(
            "https://www.nlcy.go.kr/bbs/30010/bbsDetail.do?idx=1109263",
            "_blank"
          );
          win.focus();
        },
      },
    ],
    event: [
      {
        id: 1,
        active: true,
        title: "어린이날 방문자 이벤트",
        txt: "어린이날 방문자 이벤트",
        img: web_event,
        button: true,
        buttontxt: "사전 예약 신청",
        onClick: () => {
          var win = window.open(
            "https://www.nlcy.go.kr/menu/1070789/together/1070788/togetherList.do",
            "_blank"
          );
          win.focus();
        },
      },
    ],
  };

  const [items, setitems] = useState(contentData[pagename]);

  useEffect(() => {
    setitems(contentData[pagename]);
  }, [pagename]);

  const onClickSubMenu = (id) => {
    console.log("click");
    setitems(
      items.map((item) =>
        item.id === id ? { ...item, active: true } : { ...item, active: false }
      )
    );
    console.log(items);
  };

  const buttonClick = () => {
    console.log("modal open");
    setModal(true);
  };

  return (
    <ContentWrapper>
      {items.length !== 1 && (
        <SubMenuBlock>
          {items.map((item) => (
            <SubMenuItem
              key={item.id}
              active={item.active}
              onClick={() => onClickSubMenu(item.id)}
            >
              {item.title}
            </SubMenuItem>
          ))}
        </SubMenuBlock>
      )}

      <Container img>
        {items.map((item) => (
          <ContentBlock id={item.id} active={item.active}>
            <div className="contentTxt">{item.txt}</div>
            <img src={item.img} />

            <ButtonCon>
              {item.button && (
                <Button width="100" onClick={item.onClick}>
                  {item.buttontxt}
                </Button>
              )}
            </ButtonCon>
          </ContentBlock>
        ))}
      </Container>
    </ContentWrapper>
  );
}

export default Content;
