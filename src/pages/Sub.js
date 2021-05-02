import React, { useEffect, useState } from "react";
import styled, { css } from "styled-components";

import Navbar from "../components/Navbar";
import Banner from "../components/Banner";
import Content from "../components/Content";
import Container from "../components/Container";

import Modal from "../components/modal/Modal";

import bannerimg from "../img/banner.svg";
import logo_lib from "../img/logo_lib.svg";
import title3 from "../img/title3.svg";

const FooterBlock = styled.footer`
  width: 100%;
  background-color: var(--grey100);
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
`;

function Sub({ match }) {
  const { pagename } = match.params;

  const [modal, setModal] = useState(false);

  return (
    <>
      <Navbar current={pagename} />
      <Banner pagename={pagename} />
      <Content pagename={pagename} setModal={setModal} />
      <FooterBlock>
        <Container>
          <FooterCon>
            <img src={title3} />
            <img src={logo_lib} />
          </FooterCon>
        </Container>
      </FooterBlock>
      <Modal pagename={pagename} visible={modal} setVisible={setModal} />
    </>
  );
}

export default Sub;
