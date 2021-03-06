/* eslint-disable jsx-a11y/alt-text */
import React, { useState, useEffect } from "react";
import styled, { css } from "styled-components";

// import medal1 from "../img/medal1.svg";
// import medal2 from "../img/medal2.svg";
// import medal3 from "../img/medal3.svg";
// import medal4 from "../img/medal4.svg";

const CardBlock = styled.div`
  width: 310px;
  /* height: 470px; */
  box-shadow: 0px 0px 20px rgba(0, 0, 0, 0.3);
  background: white;
  padding: 20px;
  position: relative;
  border-radius: 14px;

  & + & {
    margin-left: 30px;
  }

  ${(props) =>
    props.first &&
    css`
      margin-left: 320px;
    `}
`;

const CardMedal = styled.div`
  width: 100px;
  height: 100px;
  display: flex;
  align-items: center;
  justify-content: center;
  position: absolute;
  top: 0;
  left: 0;

  img {
    width: 80px;
    height: 80px;
  }
`;
const CardImage = styled.div`
  width: 100%;
  height: 400px;
  overflow: hidden;
  border-radius: 14px;
  display: flex;
  justify-content: center;

  img {
    height: 100%;
  }
`;

const CardName = styled.div`
  width: 100%;
  padding: 5px 0px;
  display: flex;
  align-items: center;

  .line {
    width: 100%;
    height: 2px;
    background: #ffd800;
  }

  .name {
    float: right;
    padding: 0 10px;
    font-size: 20px;
    background: white;
    display: inline-block;
    font-weight: bold;
  }
`;

function AwardCard({ cardData, setDetail, first }) {
  const { medal, name, img } = cardData;
  const [firstCard, setFirstCard] = useState(first);
  // const [medalImg, setMedalImg] = useState(null);

  // useEffect(() => {
  //   if (medal === 1) {
  //     setMedalImg(medal1);
  //   } else if (medal === 2) {
  //     setMedalImg(medal2);
  //   } else if (medal === 3) {
  //     setMedalImg(medal3);
  //   } else {
  //     setMedalImg(medal4);
  //   }
  // }, [medal]);

  useEffect(() => {
    const windowWidth = window.innerWidth;
    if (windowWidth > 767.98) {
      setFirstCard(false);
    }
  }, []);

  return (
    <CardBlock onClick={() => setDetail(cardData)} firstCard={firstCard}>
      <CardImage>
        <img src={img} />
      </CardImage>
      <CardMedal>
        <img src={medal} />
      </CardMedal>
      <CardName>
        <span className="line" />
        <div className="name">{name}</div>
      </CardName>
    </CardBlock>
  );
}

export default AwardCard;
