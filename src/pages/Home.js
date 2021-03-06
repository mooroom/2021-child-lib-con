import React, { useState } from "react";

import styled, { css } from "styled-components";
import Particles from "react-tsparticles";

import Container from "../components/Container";
import SquareContainer from "../components/SquareContainer";
import SquareMenu from "../components/SquareMenu";
import Button from "../components/Button";
import WallContainer from "../components/WallContainer";
import Wall from "../components/Wall";

// import title from "../img/title3.svg";
import title from "../img/logo_main.svg";
import mon1 from "../img/mon_1.svg";
import mon2 from "../img/mon_2.svg";
import mon3 from "../img/mon_3.svg";
import mon4 from "../img/mon_4.svg";
import mon5 from "../img/mon_5.svg";
import logo from "../img/logo_lib.svg";
import { ReactComponent as CloseIcon } from "../img/icon_close.svg";
import wall1 from "../img/wall1.jpg";
import wall2 from "../img/wall2.jpg";
import title1 from "../img/illust_paint.png";
import title2 from "../img/illust_photo.png";

const options = {
  background: {
    color: "#FFEB6F",
  },
  fpsLimit: 60,
  interactivity: {
    detectsOn: "canvas",
    events: {
      onClick: {
        enable: true,
        mode: "push",
      },
      onHover: {
        enable: true,
        mode: "repulse",
      },
      resize: true,
    },
    modes: {
      bubble: {
        distance: 400,
        duration: 2,
        opacity: 0.8,
        size: 40,
      },
      push: {
        quantity: 4,
      },
      repulse: {
        distance: 200,
        duration: 0.4,
      },
    },
  },
  particles: {
    color: {
      value: ["#4FB2AB", "#EC898E", "#905B9E", "#E64C29", "#69A71B"],
    },
    links: {
      enable: false,
    },
    collisions: {
      enable: true,
    },
    move: {
      direction: "none",
      enable: true,
      outMode: "bounce",
      random: false,
      speed: 3,
      straight: false,
    },
    number: {
      density: {
        enable: true,
        value_area: 800,
      },
      value: 40,
    },
    opacity: {
      value: 0.7,
    },
    shape: {
      type: "circle",
    },
    size: {
      random: true,
      value: 20,
    },
  },
  detectRetina: true,
  fullScreen: {
    enable: true,
    zIndex: -1,
  },
};

const menus = [
  {
    id: 1,
    img: mon1,
    txt: "응원영상",
    link: "/sub/support",
    type: "mon1",
    subtxt: "어린이가 행복한 세상을 만들어요",
  },
  {
    id: 2,
    img: mon2,
    txt: "온라인 극장",
    link: "/sub/theater",
    type: "mon2",
    subtxt: "그림책 작가와 떠나는 신나는 이야기 여행",
  },
  {
    id: 3,
    img: mon3,
    txt: "공모전",
    link: "/sub/contest",
    type: "mon3",
    subtxt: "독서감상 그리기 대회, 집콕 책읽기 사진 공모전",
  },
  {
    id: 4,
    img: mon4,
    txt: "프로그램",
    link: "/sub/program",
    type: "mon4",
    subtxt: "미꿈소 뚝딱상자, 나만의 움직이는 자동차 만들기",
  },
  {
    id: 5,
    img: mon5,
    txt: "이벤트",
    link: "/sub/event",
    type: "mon5",
    subtxt: "어린이 100명에게 선물 증정 (선착순)",
  },
];

const TitleCon = styled.div`
  width: 100%;
  text-align: center;
  img {
    width: 50%;
  }
  margin-top: -2rem;
  margin-bottom: 4rem;

  @media (max-width: 768px) {
    img {
      width: 70%;
    }
    margin-bottom: 1.5rem;
  }
`;

const SubTitleCon = styled.div`
  width: 100%;
  text-align: center;
  font-size: 1.5rem;
  font-weight: bold;
  color: var(--grey800);
  margin-bottom: 2rem;
  @media (max-width: 767.98px) {
    font-size: 1rem;
  }
`;

const LogoCon = styled.div`
  width: 100%;
  text-align: center;
  img {
    height: 50px;
  }
  margin-top: 3rem;
  @media (max-width: 767.98px) {
    img {
      height: 30px;
    }
    padding-bottom: 50px;
  }
`;

const BrowserAlert = styled.div`
  width: 100%;
  padding: 10px 15px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  background-color: #e88f00;
  .txt {
    font-size: 1.1rem;
    font-weight: bold;
    color: white;
  }
  .close {
    fill: white;
    width: 20px;
  }

  ${(props) =>
    !props.visible &&
    css`
      display: none;
    `}
`;

const DarkBackground = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  position: absolute;
  top: 0;
  left: 0;
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

const wallContents = [
  {
    id: 1,
    title: "독서 감상 그리기 대회 수상작",
    imgTitle: title1,
    imgMain: wall1,
    link: "/awards/award1",
  },
  {
    id: 2,
    title: "집콕 책읽기 사진 공모전 수상작",
    imgTitle: title2,
    imgMain: wall2,
    link: "/awards/award2",
  },
];

function Home(props) {
  const [alert, setAlert] = useState(true);
  // const [popUp, setPopup] = useState(true);
  return (
    <>
      {/* <DarkBackground visible={popUp}>
        <PopupBlock>
          <PopupContent>
            <PopupHead>
              <CloseIcon fill="#6b7684" onClick={() => setPopup(false)} />
            </PopupHead>
            <h3>수상자 발표 안내</h3>
            <br />
            <h5>
              &lt;<b>집 콕 책 읽기 사진 공모전</b>&gt;
              <br />
              &lt;<b>독서 감상 그리기 대회</b>&gt;
              <br />
              <br />
              수상자가 발표되었습니다. 자세한 내용은 국립어린이청소년도서관
              홈페이지 내 공지사항에서 확인해주세요.
            </h5>
            <a href="https://www.nlcy.go.kr" target="_blank">
              <Button width="100%" color="#6AB32D">
                수상자 확인하러가기
              </Button>
            </a>
          </PopupContent>
        </PopupBlock>
      </DarkBackground> */}
      <Particles id="tsparticles" options={options} />
      <BrowserAlert visible={alert}>
        <div className="txt">
          본 홈페이지는 IE(인터넷 익스플로러)를 제외한 크롬 등 기타 브라우저에
          최적화되어 있습니다.
        </div>
        <CloseIcon fill="white" onClick={() => setAlert(false)} />
      </BrowserAlert>
      <Container flex home>
        <TitleCon>
          <img src={title} alt="img" />
        </TitleCon>
        {/* <SubTitleCon>
          "어린이가 꿈꾸는 세상, 국립어린이청소년도서관이 응원합니다!"
        </SubTitleCon>
        <SquareContainer>
          {menus.map((menu) => (
            <SquareMenu option={menu} key={menu.id} />
          ))}
        </SquareContainer> */}
        <WallContainer>
          {wallContents.map((content) => (
            <Wall key={content.id} content={content} />
          ))}
        </WallContainer>
        <LogoCon>
          <img src={logo} alt="img" />
        </LogoCon>
      </Container>
    </>
  );
}

export default Home;
