import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import styled, { css } from "styled-components";

import logo_main from "../img/logo_main.svg";

const NavbarBlock = styled.nav`
  position: fixed;
  z-index: 50;
  width: 100%;
  height: 60px;
  background-color: rgba(255, 255, 255, 0.8);
  left: 0;
`;

const FlexContainer = styled.div`
  width: 100%;
  max-width: 1140px;
  margin: auto;
  height: 100%;
`;

const Inner = styled.div`
  width: 92%;
  max-width: calc(100% - var(--containerPadding));
  margin: auto;
  display: flex;
  justify-content: space-between;
  height: 100%;
`;

const NavLogoContainer = styled.div`
  display: flex;
  align-items: center;
  margin-right: 24px;

  img {
    height: 20px;
  }
`;

const NavContent = styled.div`
  display: flex;
  max-height: 100%;
  justify-content: space-between;
  transition: 0.2s ease;
`;

const NavMenu = styled.ul`
  display: flex;
  align-items: center;
  padding: 0;
  margin: 0;
`;

const NavItem = styled.li`
  height: 100%;
  list-style: none;
  display: flex;
  align-items: center;
  padding: 0 8px;

  a {
    padding: 12px 10px;
    font-size: 15px;
    font-weight: bold;
    line-height: 20px;
    border-radius: 8px;
    border: 0;
    cursor: pointer;
    background-color: transparent;
    text-decoration: none;
    text-align: left;
    color: var(--grey700);
  }

  &:hover {
    a {
      background-color: ${(props) => props.color};
      color: white;
    }
  }

  a {
    ${({ current, color }) => {
      if (current == "support" && color == "#4fb2ab") {
        return css`
          background-color: ${color};
          color: white;
        `;
      } else if (current == "theater" && color == "#ec898e") {
        return css`
          background-color: ${color};
          color: white;
        `;
      } else if (current == "contest" && color == "#905b9e") {
        return css`
          background-color: ${color};
          color: white;
        `;
      } else if (current == "program" && color == "#e64c29") {
        return css`
          background-color: ${color};
          color: white;
        `;
      } else if (current == "event" && color == "#69a71b") {
        return css`
          background-color: ${color};
          color: white;
        `;
      }
    }}
  }
`;

const nav_items = [
  {
    id: 1,
    color: "#4fb2ab",
    link: "/sub/support",
    txt: "응원영상",
  },
  {
    id: 2,
    color: "#ec898e",
    link: "/sub/theater",
    txt: "온라인극장",
  },
  {
    id: 3,
    color: "#905b9e",
    link: "/sub/contest",
    txt: "공모전",
  },
  {
    id: 4,
    color: "#e64c29",
    link: "/sub/program",
    txt: "프로그램",
  },
  {
    id: 5,
    color: "#69a71b",
    link: "/sub/event",
    txt: "이벤트",
  },
];

function Navbar({ current }) {
  return (
    <NavbarBlock>
      <FlexContainer>
        <Inner>
          <NavLogoContainer>
            <Link to="/">
              <img src={logo_main} />
            </Link>
          </NavLogoContainer>
          <NavContent>
            <NavMenu>
              {nav_items.map((item) => (
                <NavItem color={item.color} current={current}>
                  <Link to={item.link}>{item.txt}</Link>
                </NavItem>
              ))}
            </NavMenu>
          </NavContent>
        </Inner>
      </FlexContainer>
    </NavbarBlock>
  );
}

export default Navbar;