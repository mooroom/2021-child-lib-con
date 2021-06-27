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
`;

const DetailContent = styled.div`
  width: 100%;
  max-width: 1400px;
  display: flex;
  justify-content: center;
  position: relative;

  ${(props) =>
    props.type === "award1"
      ? css`
          flex-direction: row;
        `
      : css`
          align-items: center;
          flex-direction: column;
        `}
`;

const DetailImg = styled.div`
  position: relative;
  width: 45%;
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
    top: -75px;
    left: -75px;
  }

  &:after {
    content: "";
    display: block;
    padding-bottom: 100%;
  }
`;

const DetailTxt = styled.div`
  width: 45%;
  padding: 30px;
  color: white;

  .group {
    font-size: 15px;
  }

  .title {
    font-size: 40px;
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
`;

const CloseButton = styled(CloseIcon)`
  fill: white;
  width: 30px;
  height: 30px;
  position: absolute;
  top: 0;
  right: 0;
`;

function AwardDetail({ detail, setDetail, pagename }) {
  const [type, setType] = useState(pagename);

  useEffect(() => {
    setType(pagename);
  }, [pagename]);

  function prize(medal) {
    if (medal === medal1) return "대상";
    else if (medal === medal2) return "최우수";
    else if (medal === medal3) return "우수";
    else return "장려";
  }

  return (
    <DetailBlock visible={detail}>
      <DetailContent type={type}>
        <DetailImg>
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
            <>
              <div className="prize-name">
                {detail.name}&nbsp;&nbsp;&nbsp;/&nbsp;&nbsp;&nbsp;
              </div>
              <div className="title">{detail.title}</div>
            </>
          )}
        </DetailTxt>
        <CloseButton onClick={() => setDetail(null)} />
      </DetailContent>
    </DetailBlock>
  );
}

export default AwardDetail;
