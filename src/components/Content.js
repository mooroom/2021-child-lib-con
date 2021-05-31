import React, { useEffect, useState } from "react";
import styled, { css } from "styled-components";
import YoutubeEmbed from "./YoutubeEmbed";

import Button from "../components/Button";
import Container from "../components/Container";

import web_contest1 from "../img/web_contest1.jpg";
import web_contest2 from "../img/web_contest2.jpg";
import web_program from "../img/web_program.jpg";
import web_event from "../img/web_event.jpg";
import banana from "../img/banana.svg";
import banana2 from "../img/banana2.svg";
import curtainTop from "../img/curtain-top.svg";
import curtainLeft from "../img/curtain-left.svg";
import curtainRight from "../img/curtain-right.svg";
import thumbnail1 from "../img/thumbnail1";
import thumbnail2 from "../img/thumbnail2";

const ContentWrapper = styled.div`
  width: 100%;
  position: relative;
  ${(props) =>
    props.theater &&
    css`
      padding-top: 150px;
      background-color: rgba(0, 0, 0, 0.8);
      @media (max-width: 767.98px) {
        background-color: white;
        padding-top: 0;
      }
    `}
  .curtain {
    position: absolute;
    @media (max-width: 767.98px) {
      display: none;
    }
  }
  .curtain-top {
    width: 100%;
    top: 0;
    left: 0;
  }
  .curtain-left {
    width: 350px;
    top: 0;
    left: 0;
  }
  .curtain-right {
    width: 350px;
    top: 0;
    right: 0;
  }
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
  color: rgba(0, 0, 0, 0.5);
  padding: 10px 20px;
  border-radius: 50px;
  font-size: 1.3rem;
  border: 1px solid rgba(0, 0, 0, 0.5);
  ${(props) =>
    props.active &&
    css`
      color: white;
      background-color: var(--primary);
      font-weight: bold;
      border: none;
    `}

  & + & {
    margin-left: 20px;
  }

  @media (max-width: 767.98px) {
    font-size: 0.8rem;
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

const ThumbnailsBlock = styled.div`
  padding: 20px 0;
  display: flex;
  align-items: center;
  justify-content: flex-start;
  flex-direction: column;
  position: absolute;
  top: 0;
  left: 0;
  width: 100px;
  padding-top: 70px;
  @media (max-width: 767.98px) {
    padding: 20px 0;
    display: flex;
    justify-content: initial;
    flex-direction: row;
    position: relative;
    width: 100%;
    padding-top: 20px;
    overflow-x: auto;
  }
`;

const ThumbnailItem = styled.div`
  & + & {
    margin-left: 10px;
  }
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 10px;
  border-radius: 10px;
  img {
    width: 150px;
  }
  ${(props) =>
    props.active &&
    css`
      border: 2px solid var(--primary);
    `}
`;

function Content({ setModal, pagename }) {
  const contentData = {
    support: [
      {
        id: 1,
        active: true,
        title: "응원영상",
        video: "QMVL4HL_3Ac",
        button: false,
      },
    ],
    theater: [
      {
        id: 1,
        active: true,
        title: "색깔의 비밀",
        video: "D-7uGQPN6Yw",
        videoImg: thumbnail1,
        thumbnail: thumbnail1,
        button: true,
        buttontxt: "온라인극장 캡처 이벤트",
        onClick: () => setModal(1),
      },
      {
        id: 2,
        active: false,
        title: "채식하는 호랑이 바라",
        video: "eaWjKip7Rxo",
        videoImg: thumbnail2,
        thumbnail: thumbnail2,
        button: true,
        buttontxt: "온라인극장 캡처 이벤트",
        onClick: () => setModal(2),
      },
    ],
    contest: [
      {
        id: 1,
        active: true,
        title: "독서감상 그리기 대회",
        img: web_contest1,
        button: true,
        buttontxt: "그리기 대회 접수하기",
        onClick: () => setModal(3),
      },
      {
        id: 2,
        active: false,
        title: "집콕 책읽기 사진 공모전",
        img: web_contest2,
        button: true,
        buttontxt: "사진 공모전 접수하기",
        onClick: () => setModal(4),
      },
    ],
    program: [
      {
        id: 1,
        active: true,
        title: "미꿈소 뚝딱상자",
        img: web_program,
        button: false,
        buttontxt: "자세히 보기",
        onClick: () => {
          var win = window.open(
            "https://www.nlcy.go.kr/menu/10053/together/40000/togetherList.do",
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
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [pagename]);

  const onClickSubMenu = (id) => {
    setitems(
      items.map((item) =>
        item.id === id ? { ...item, active: true } : { ...item, active: false }
      )
    );
  };

  const bananaStyle = {
    position: "absolute",
    top: "-190px",
    height: "170px",
  };

  const bananaStyle2 = {
    position: "absolute",
    top: "-190px",
    height: "170px",
  };

  const eventClick = () => {
    window.location.href = "/sub/theater";
  };

  return (
    <ContentWrapper theater={pagename === "theater" ? true : false}>
      {pagename === "contest" && (
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
      {pagename === "theater" && (
        <>
          <div className="curtain curtain-left">
            <img src={curtainLeft} alt="img" />
          </div>
          <div className="curtain curtain-right">
            <img src={curtainRight} alt="img" />
          </div>
          <div className="curtain curtain-top">
            <img src={curtainTop} alt="img" />
          </div>
        </>
      )}

      <Container img content>
        {items.map((item) => (
          <ContentBlock id={item.id} active={item.active}>
            <div className="contentTxt">{item.txt}</div>
            {item.img && <img src={item.img} alt="img" />}
            {item.video && <YoutubeEmbed embedId={item.video} />}
            {/* {item.button && (
              <>
                {pagename === "event" && (
                  <Button onClick={eventClick} color="#F7B855" float2>
                    <img style={bananaStyle2} src={banana2} alt="img" />
                    온라인극장 캡처 이벤트
                  </Button>
                )}
                <Button onClick={item.onClick} color="#6AB32D" float>
                  {pagename === "theater" && (
                    <img style={bananaStyle} src={banana} alt="img" />
                  )}
                  {item.buttontxt}
                </Button>
              </>
            )} */}
          </ContentBlock>
        ))}

        {pagename === "theater" && (
          <ThumbnailsBlock>
            {items.map((item) => (
              <ThumbnailItem
                id={item.id}
                active={item.active}
                onClick={() => onClickSubMenu(item.id)}
              >
                <img src={item.thumbnail} alt="img" />
              </ThumbnailItem>
            ))}
          </ThumbnailsBlock>
        )}
      </Container>
    </ContentWrapper>
  );
}

export default Content;
