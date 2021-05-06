import React, { useEffect, useState } from "react";
import styled, { css } from "styled-components";

import Navbar from "../components/Navbar";
import Banner from "../components/Banner";
import Content from "../components/Content";
import Container from "../components/Container";

import Modal from "../components/modal/Modal";
import ModalPaint from "../components/modal/ModalPaint";
import ModalPhoto from "../components/modal/ModalPhoto";
import ModalSNS from "../components/modal/ModalSNS";

import bannerimg from "../img/banner.svg";
import logo_lib from "../img/logo_lib.svg";
import title from "../img/title.svg";

const FooterBlock = styled.footer`
  width: 100%;
  background-color: var(--grey100);
  @media (max-width: 767.98px) {
    display: none;
  }
`;

const FooterCon = styled.div`
  width: 100%;
  padding: 80px 0;
  display: flex;
  align-items: center;
  justify-content: center;
  img {
    height: 50px;
  }

  img + img {
    margin-left: 50px;
  }

  @media (max-width: 767.98px) {
    padding: 40px 0;
    img {
      height: 30px;
    }
  }
`;

function Sub({ match }) {
  const { pagename } = match.params;
  useEffect(() => {
    console.log(pagename);
  });

  const [modal, setModal] = useState(0);

  return (
    <>
      <Navbar current={pagename} />
      <Banner pagename={pagename} />
      <Content pagename={pagename} setModal={setModal} />
      <FooterBlock>
        <Container>
          <FooterCon>
            <img src={title} style={{ height: "60px" }} />
            <img src={logo_lib} />
          </FooterCon>
        </Container>
      </FooterBlock>
      <ModalPaint pagename={pagename} visible={modal} setVisible={setModal} />
      <ModalPhoto pagename={pagename} visible={modal} setVisible={setModal} />
      <ModalSNS pagename={pagename} visible={modal} setVisible={setModal} />
    </>
  );
}

export default Sub;
