import React, { useEffect, useState } from "react";
import styled, { css } from "styled-components";
import YouTube from "react-youtube";

import Button from "../components/Button";
import Container from "../components/Container";

import web_contest1 from "../img/web_contest1.jpg";
import web_contest2 from "../img/web_contest2.jpg";
import web_program from "../img/web_program.jpg";
import web_event from "../img/web_event.jpg";
import video from "../img/video.svg";
import banana from "../img/banana.svg";
import banana2 from "../img/banana2.svg";
import curtain from "../img/curtain.svg";
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
    `}
  .curtain {
    position: absolute;
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

const VideoImg = styled.div`
  position: relative;
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  img {
    width: 100%;
  }
  .playbtn {
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    padding: 20px;
    background-color: rgba(0, 0, 0, 0.8);
    color: white;
    display: flex;
    align-items: center;
    justify-content: center;
    font-weight: bold;
    font-size: 1.5rem;
    border-radius: 10px;
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

const Theater = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  z-index: 101;
  background: rgba(0, 0, 0, 0.8);
  visibility: hidden;
  opacity: 0;
  transition: all 0.25s ease-in;

  display: flex;
  justify-content: space-between;
  align-items: center;

  img {
    width: initial;
    height: 100%;
    transition: 0.5s ease-in;
    transition-delay: 0.25s;
  }

  ${(props) =>
    props.play &&
    css`
      visibility: visible;
      opacity: 1;
      .curtain1 {
        transform: translateX(-150px);
      }
      .curtain2 {
        transform: translateX(150px);
      }
    `}
`;

function Content({ setModal, pagename }) {
  const contentData = {
    support: [
      {
        id: 1,
        active: true,
        title: "응원영상",
        // txt: "어린이가 행복한 세상을 만들어요!",
        // img: video,
        video: "QMVL4HL_3Ac",
        button: false,
      },
    ],
    theater: [
      {
        id: 1,
        active: true,
        title: "색깔의 비밀",
        // txt: "<색깔의 비밀> 차재혁, 최은영 작가",
        // img: video,
        video: "D-7uGQPN6Yw",
        videoImg: thumbnail1,
        thumbnail: thumbnail1,
        button: true,
        buttontxt: "SNS 인증 이벤트 참여",
        onClick: () => setModal(1),
      },
      {
        id: 2,
        active: false,
        title: "채식하는 호랑이 바라",
        // txt: "<채식하는 호랑이 바라> 김국희 작가 참여",
        // img: video,
        video: "eaWjKip7Rxo",
        videoImg: thumbnail2,
        thumbnail: thumbnail2,
        button: true,
        buttontxt: "SNS 인증 이벤트 참여",
        onClick: () => setModal(2),
      },
    ],
    contest: [
      {
        id: 1,
        active: true,
        title: "독서감상 그리기 대회",
        // txt: "책을 읽은 후 여러분의 감상을 그림으로 표현해 봐요!",
        img: web_contest1,
        button: true,
        buttontxt: "그리기 대회 접수하기",
        onClick: () => setModal(3),
      },
      {
        id: 2,
        active: false,
        title: "집콕 책읽기 사진 공모전",
        // txt: "집에 콕 박혀서 하는 독서의 즐거움!",
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
        // txt: "미꿈소 뚝딱상자",
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
        // txt: "어린이날 방문자 이벤트",
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

  const opts = {
    height: "500",
    width: "800",
    playerVars: {
      autoplay: false,
    },
  };

  // const [position, setPosition] = useState(0);
  // const [scrolled, setScrolled] = useState(false);
  // const onScroll = () => {
  //   console.log(window.scrollY);
  //   if (window.scrollY !== 0) {
  //     setScrolled(true);
  //   } else {
  //     setScrolled(false);
  //   }
  //   setPosition(window.scrollY);
  // };

  // useEffect(() => {
  //   window.addEventListener("scroll", onScroll);
  //   return () => {
  //     window.removeEventListener("scroll", onScroll);
  //   };
  // }, []);
  const [play, setPlay] = useState(false);
  const onPlay = () => {
    setPlay(true);
  };
  const onClose = () => {
    setPlay(false);
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
            <img src={curtainLeft} />
          </div>
          <div className="curtain curtain-right">
            <img src={curtainRight} />
          </div>
          <div className="curtain curtain-top">
            <img src={curtainTop} />
          </div>
        </>
      )}

      <Container img content>
        {items.map((item) => (
          <ContentBlock id={item.id} active={item.active}>
            <div className="contentTxt">{item.txt}</div>
            <img src={item.img} />
            {item.video && pagename === "theater" && (
              <div
                style={{
                  width: "100%",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  overflow: "hidden",
                }}
              >
                <YouTube videoId={item.video} opts={opts} onEnd={onClose} />
              </div>
            )}
            {item.video && pagename === "support" && (
              <div
                style={{
                  width: "100%",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                }}
              >
                <YouTube videoId={item.video} opts={opts} />
              </div>
            )}
            {item.button && (
              <>
                {pagename === "event" && (
                  <Button onClick={eventClick} color="#F7B855" float2>
                    <img style={bananaStyle2} src={banana2} />
                    SNS 인증 이벤트 참여
                  </Button>
                )}
                <Button onClick={item.onClick} color="#6AB32D" float>
                  {pagename === "theater" && (
                    <img style={bananaStyle} src={banana} />
                  )}
                  {item.buttontxt}
                </Button>
              </>
            )}
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
                <img src={item.thumbnail} />
              </ThumbnailItem>
            ))}
          </ThumbnailsBlock>
        )}
      </Container>
    </ContentWrapper>
  );
}

export default Content;
