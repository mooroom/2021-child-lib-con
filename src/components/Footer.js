import React from "react";
import styled, { css } from "styled-components";
import Container from "./Container";

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

function Footer(props) {
  return (
    <FooterBlock>
      <Container>
        <FooterCon>
          <img src={title} style={{ height: "60px" }} alt="img" />
          <img src={logo_lib} alt="img" />
        </FooterCon>
      </Container>
    </FooterBlock>
  );
}

export default Footer;
