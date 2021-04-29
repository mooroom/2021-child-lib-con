import React, { useEffect } from "react";
import { GlobalStyle } from "styled-components";

import Navbar from "../components/Navbar";
import Banner from "../components/Banner";

import ModalHead from "../components/modal/ModalHead";
import ModalTemplate from "../components/modal/ModalTemplate";

import bannerimg from "../img/banner.svg";
import letter from "../img/letter.svg";
import ModalList from "../components/modal/ModalList";
import ModalInput from "../components/modal/ModalInput";

const pageData = {
  support: {
    banner: bannerimg,
  },
  theater: {},
  contest: {},
  program: {},
  event: {},
};

function Sub({ match }) {
  const { pagename } = match.params;
  const page = pageData[pagename];

  return (
    <>
      <Navbar current={pagename} />
      <Banner pagename={pagename} />
      {/* <ModalTemplate>
        <ModalHead image={letter} text="집콕 책읽기 사진 제출" />
        <ModalList>
          <ModalInput
            id="1"
            label="이름"
            type="file"
            accept="image/png, image/jpeg"
            capture="gallery"
            placeholder="이름을 입력해주세요"
          />
        </ModalList>
      </ModalTemplate> */}
    </>
  );
}

export default Sub;
