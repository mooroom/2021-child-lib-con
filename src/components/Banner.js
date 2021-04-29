import React from "react";
import styled from "styled-components";

import banner1 from "../img/banner1.svg";
import banner2 from "../img/banner2.svg";
import banner3 from "../img/banner3.svg";
import banner4 from "../img/banner4.svg";
import banner5 from "../img/banner5.svg";

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
  font-size: 2rem;
  font-weight: bolder;
  color: white;
`;

const bannerData = {
  support: {
    img: banner1,
    bg: "#94e0da",
    txt: "응원영상",
  },
  theater: {
    img: banner2,
    bg: "#F5C4C4",
    txt: "온라인 극장",
  },
  contest: {
    img: banner3,
    bg: "#BD94E0",
    txt: "공모전",
  },
  program: {
    img: banner4,
    bg: "#FF8D8D",
    txt: "프로그램",
  },
  event: {
    img: banner5,
    bg: "#B4E094",
    txt: "이벤트",
  },
};

function Banner({ pagename }) {
  const page = bannerData[pagename];
  return (
    <BannerBlock>
      <BannerBackground bg={page.bg} img={page.img}>
        {page.txt}
      </BannerBackground>
    </BannerBlock>
  );
}

export default Banner;
