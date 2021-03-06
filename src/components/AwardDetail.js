import React, { useEffect, useState } from "react";
import styled, { css } from "styled-components";

import { ReactComponent as CloseIcon } from "../img/icon_close.svg";

import medal1 from "../img/medal1.svg";
import medal2 from "../img/medal2.svg";
import medal3 from "../img/medal3.svg";

const DetailBlock = styled.div`
  position: fixed;
  z-index: 1000;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: rgba(0, 0, 0, 0.9);
  display: flex;
  align-items: center;
  justify-content: center;
  visibility: hidden;

  ${(props) =>
    props.visible &&
    css`
      visibility: visible;
    `}

  @media (max-width: 767.98px) {
    padding: 50px;
    padding-top: 20px;
  }
`;

const DetailContent = styled.div`
  width: 100%;
  max-width: 1180px;
  display: flex;
  justify-content: center;
  position: relative;
  margin-top: 45px;

  ${(props) =>
    props.type === "award1"
      ? css`
          flex-direction: row;
        `
      : css`
          align-items: center;
          flex-direction: column;
        `}

  @media (max-width: 767.98px) {
    flex-direction: column;
    align-items: center;
  }
`;

const DetailImg = styled.div`
  position: relative;
  width: 55%;
  border: 2px solid white;
  border-radius: 10px;

  .mainImg {
    position: absolute;
    width: 100%;
    height: 100%;
    padding: 30px;
    display: flex;
    justify-content: center;

    img {
      max-width: 100%;
      max-height: 100%;
      object-fit: contain;
      border-radius: 20px;
    }
  }

  .medal {
    width: 150px;
    height: 150px;
    position: absolute;
    top: -50px;
    left: -75px;
  }

  &:after {
    content: "";
    display: block;
    padding-bottom: 100%;
  }

  ${(props) =>
    props.type === "award1"
      ? css``
      : css`
          width: 50%;
        `}

  @media (max-width: 767.98px) {
    width: 100%;
    .medal {
      width: 70px;
      height: 70px;
      position: absolute;
      top: -35px;
      left: -35px;
    }
  }
`;

const DetailTxt = styled.div`
  width: 35%;
  padding: 30px;
  color: white;

  .group {
    font-size: 20px;
  }

  .title {
    font-size: 35px;
    font-weight: bold;
    margin-bottom: 25px;
  }

  .prize-name {
    font-size: 25px;
    font-weight: bold;
    margin-bottom: 70px;
  }

  .description {
    font-size: 25px;
  }

  ${(props) =>
    props.type === "award1"
      ? css``
      : css`
          width: 50%;
          padding-left: 0;
          padding-right: 0;
          display: flex;
          padding-bottom: 0;
          .title {
            font-size: 25px;
            margin-bottom: 0;
          }
          .prize-name {
            margin-bottom: 0;
          }
        `}

  @media (max-width: 767.98px) {
    width: 100%;
    padding: 0px;
    padding-top: 20px;

    .group {
      font-size: 15px;
    }

    .title {
      font-size: 20px;
      font-weight: bold;
      margin-bottom: 8px;
    }

    .prize-name {
      font-size: 16px;
      font-weight: bold;
      margin-bottom: 20px;
    }

    .description {
      font-size: 16px;
    }

    ${(props) =>
      props.type === "award1"
        ? css``
        : css`
            .title {
              font-size: 16px;
              margin-bottom: 0;
            }
            .prize-name {
              margin-bottom: 0;
            }
          `}
  }
`;

const CloseButton = styled(CloseIcon)`
  fill: white;
  width: 30px;
  height: 30px;
  position: absolute;
  top: 0;
  right: 0;

  @media (max-width: 767.98px) {
    display: none;
  }
`;

function AwardDetail({ detail, setDetail, pagename }) {
  const [type, setType] = useState(pagename);

  useEffect(() => {
    setType(pagename);
  }, [pagename]);

  function prize(medal) {
    if (medal === medal1) return "??????";
    else if (medal === medal2) return "?????????";
    else if (medal === medal3) return "??????";
    else return "??????";
  }

  return (
    <DetailBlock visible={detail} onClick={() => setDetail(null)}>
      <DetailContent type={type}>
        <DetailImg type={type}>
          <img className="medal" src={detail.medal} />
          <div className="mainImg">
            <img src={detail.img} />
          </div>
        </DetailImg>
        <DetailTxt type={type}>
          {type === "award1" ? (
            <>
              <div className="group">{detail.group}</div>
              <div className="title">{detail.title}</div>
              <div className="prize-name">{`${prize(detail.medal)} / ${
                detail.name
              }`}</div>
              <div className="description">{detail.description}</div>
            </>
          ) : (
            <div
              style={{
                display: "flex",
                justifyContent: "center",
                alignContent: "center",
                width: "100%",
              }}
            >
              <div className="prize-name">
                {detail.name}&nbsp;&nbsp;&nbsp;/&nbsp;&nbsp;&nbsp;
              </div>
              <div className="title">{detail.title}</div>
            </div>
          )}
        </DetailTxt>
        <CloseButton onClick={() => setDetail(null)} />
      </DetailContent>
    </DetailBlock>
  );
}

export default AwardDetail;
