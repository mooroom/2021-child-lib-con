import React from "react";
import styled from "styled-components";

import banner1 from "../img/banner1.svg";
import banner2 from "../img/banner2.svg";
import banner3 from "../img/banner3.svg";
import banner4 from "../img/banner4.svg";
import banner5 from "../img/banner5.svg";
import banner6 from "../img/banner6.svg";

const BannerBlock = styled.section`
  width: 100%;
  position: relative;
  overflow: hidden;
  height: 250px;
`;

const BannerBackground = styled.div`
  background-color: ${(props) => props.bg};
  background-image: url(${(props) => props.img});
  background-position: 50% 50%;
  background-size: cover;
  position: absolute;
  left: 0;
  top: 0;
  right: 0;
  bottom: 0;
  margin-top: 60px;

  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  font-size: 2.6rem;
  line-height: 1.7;
  font-weight: bolder;
  color: white;

  .subtxt {
    font-size: 1.6rem;
    font-weight: 400;
  }

  .smalltxt {
    font-size: 1.3rem;
    font-weight: 600;
    color: #b5325a;
  }

  @media (max-width: 767.98px) {
    font-size: 2rem;

    .subtxt {
      font-size: 1.2rem;
      text-align: center;
    }

    .smalltxt {
      font-size: 0.8rem;
      text-align: center;
    }
  }
`;

const bannerData = {
  support: {
    img: banner1,
    bg: "#94e0da",
    txt: "응 원 영 상",
    subtxt: "어린이가 행복한 세상을 만들어요!",
  },
  theater: {
    img: banner2,
    bg: "#F5C4C4",
    txt: "온 라 인 극 장",
    subtxt: "그림책 작가와 떠나는 신나는 이야기 여행!",
    smalltxt:
      "『색깔의 비밀』차재혁, 최은영 작가  『채식하는 호랑이 바라』김국희 작가 참여",
  },
  contest: {
    img: banner3,
    bg: "#BD94E0",
    txt: "공 모 전",
    subtxt: "자신만의 독서활동으로 그림 및 사진 공모전에 도전해보세요!",
  },
  program: {
    img: banner4,
    bg: "#FF8D8D",
    txt: "프 로 그 램",
    subtxt: "나만의 움직이는 자동차를 만들어 봐요",
  },
  event: {
    img: banner5,
    bg: "#B4E094",
    txt: "이 벤 트",
    subtxt: "도서관 방문 어린이를 위한 선물을 준비했어요!",
  },
  award1: {
    img: banner6,
    bg: "#5BBACE",
    txt: "독서감상 그리기 대회",
    subtxt: "어린이 여러분의 수상을 축하합니다!",
  },
  award2: {
    img: banner6,
    bg: "#5BBACE",
    txt: "집콕 책읽기 사진 공모전",
    subtxt: "어린이 여러분의 수상을 축하합니다!",
  },
};

function Banner({ pagename }) {
  const page = bannerData[pagename];
  return (
    <BannerBlock>
      <BannerBackground bg={page.bg} img={page.img}>
        {page.txt}
        {page.subtxt && <div className="subtxt">{page.subtxt}</div>}
        {page.smalltxt && <div className="smalltxt">{page.smalltxt}</div>}
      </BannerBackground>
    </BannerBlock>
  );
}

export default Banner;
