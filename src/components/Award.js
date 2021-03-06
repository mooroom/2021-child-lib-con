import React, { useEffect, useRef, useState } from "react";
import styled from "styled-components";

import AwardCard from "./AwardCard";
import AwardDetail from "./AwardDetail";
import { ReactComponent as LeftIcon } from "../img/icon_left.svg";
import { ReactComponent as RightIcon } from "../img/icon_right.svg";

import medal1 from "../img/medal1.svg";
import medal2 from "../img/medal2.svg";
import medal3 from "../img/medal3.svg";
import medal4 from "../img/medal4.svg";

import a1_1_0 from "../img/awards/award1/a1-1-0.jpg";
import a1_2_0 from "../img/awards/award1/a1-2-0.jpg";
import a1_2_1 from "../img/awards/award1/a1-2-1.jpg";
import a1_2_2 from "../img/awards/award1/a1-2-2.jpg";
import a1_3_0 from "../img/awards/award1/a1-3-0.jpg";
import a1_3_1 from "../img/awards/award1/a1-3-1.jpg";
import a1_3_2 from "../img/awards/award1/a1-3-2.jpg";
import a1_3_3 from "../img/awards/award1/a1-3-3.jpg";
import a1_3_4 from "../img/awards/award1/a1-3-4.jpg";
import a1_3_5 from "../img/awards/award1/a1-3-5.jpg";
import a1_4_0 from "../img/awards/award1/a1-4-0.jpg";
import a1_4_1 from "../img/awards/award1/a1-4-1.jpg";
import a1_4_2 from "../img/awards/award1/a1-4-2.jpg";
import a1_4_3 from "../img/awards/award1/a1-4-3.jpg";
import a1_4_4 from "../img/awards/award1/a1-4-4.jpg";
import a1_4_5 from "../img/awards/award1/a1-4-5.jpg";
import a1_4_6 from "../img/awards/award1/a1-4-6.jpg";
import a1_4_7 from "../img/awards/award1/a1-4-7.jpg";
import a1_4_8 from "../img/awards/award1/a1-4-8.jpg";
import a1_4_9 from "../img/awards/award1/a1-4-9.jpg";
import a1_4_10 from "../img/awards/award1/a1-4-10.jpg";
import a1_4_11 from "../img/awards/award1/a1-4-11.jpg";
import a1_4_12 from "../img/awards/award1/a1-4-12.jpg";
import a1_4_13 from "../img/awards/award1/a1-4-13.jpg";
import a1_4_14 from "../img/awards/award1/a1-4-14.jpg";

import a2_1_0 from "../img/awards/award2/a2-1-0.jpg";
import a2_2_0 from "../img/awards/award2/a2-2-0.jpg";
import a2_2_1 from "../img/awards/award2/a2-2-1.jpg";
import a2_3_0 from "../img/awards/award2/a2-3-0.jpg";
import a2_3_1 from "../img/awards/award2/a2-3-1.jpg";
import a2_3_2 from "../img/awards/award2/a2-3-2.jpg";
import a2_3_3 from "../img/awards/award2/a2-3-3.jpg";
import a2_3_4 from "../img/awards/award2/a2-3-4.jpg";
import a2_4_0 from "../img/awards/award2/a2-4-0.jpg";
import a2_4_1 from "../img/awards/award2/a2-4-1.jpg";
import a2_4_2 from "../img/awards/award2/a2-4-2.jpg";
import a2_4_3 from "../img/awards/award2/a2-4-3.jpg";
import a2_4_4 from "../img/awards/award2/a2-4-4.jpg";
import a2_4_5 from "../img/awards/award2/a2-4-5.jpg";
import a2_4_6 from "../img/awards/award2/a2-4-6.jpg";
import a2_4_7 from "../img/awards/award2/a2-4-7.jpg";
import a2_4_8 from "../img/awards/award2/a2-4-8.jpg";
import a2_4_9 from "../img/awards/award2/a2-4-9.jpg";
import a2_4_10 from "../img/awards/award2/a2-4-10.jpg";
import a2_4_11 from "../img/awards/award2/a2-4-11.jpg";
import a2_4_12 from "../img/awards/award2/a2-4-12.jpg";
import a2_4_13 from "../img/awards/award2/a2-4-13.jpg";
import a2_4_14 from "../img/awards/award2/a2-4-14.jpg";
import a2_4_15 from "../img/awards/award2/a2-4-15.jpg";
import a2_4_16 from "../img/awards/award2/a2-4-16.jpg";
import a2_4_17 from "../img/awards/award2/a2-4-17.jpg";
import a2_4_18 from "../img/awards/award2/a2-4-18.jpg";
import a2_4_19 from "../img/awards/award2/a2-4-19.jpg";

const awardData = {
  award1: [
    {
      id: 1,
      medal: medal1,
      name: "?????????",
      img: a1_1_0,
      group: "",
      title: "??????100????????? ??????",
      description:
        "?????? 100??? ?????? ?????? ???????????? ?????? 5??? ?????? ????????????. ???????????? ????????? 100?????? ???????????????",
    },
    {
      id: 2,
      medal: medal2,
      name: "?????????",
      img: a1_2_0,
      group: "??????",
      title: "????????? ????????? ??????????????? ??????",
      description:
        '???????????? ??? ????????? "????????? ??????"??? ?????? ??????????????? ????????? ?????? ???????????? ???????????? ????????? ????????? ???????????????. ????????? ?????? ????????? ????????? ???????????? ??????????????? ???????????? ?????? ????????? ????????? ????????? ?????? ?????? ?????? ????????? ???????????????.',
    },
    {
      id: 3,
      medal: medal2,
      name: "?????????",
      img: a1_2_1,
      group: "?????????",
      title: "?????? ???????????? ?????????",
      description:
        "?????? ?????? ???????????? ????????? ?????????! ???????????? ?????? ????????? ????????? ?????? ????????? ????????????.",
    },
    {
      id: 4,
      medal: medal2,
      name: "?????????",
      img: a1_2_2,
      group: "?????????",
      title: "????????? ?????? ?????????(?????????)",
      description:
        "?????? ?????? ?????????(?????????)??? ?????? ????????? ?????? ????????????(????????????)??? ??? ???????????? ????????????(??????)??? ????????? ???????????? ????????? ?????? ????????? ?????? ????????? ?????? ???????????????.^^",
    },
    {
      id: 5,
      medal: medal3,
      name: "?????????",
      img: a1_3_0,
      group: "??????",
      title: "????????? ??? ???????????? ??????",
      description:
        "????????? ????????? ??? ???????????? ????????? ????????? ??? ????????? ????????? ?????? ???????????? ????????????. ????????? ????????? ?????? ??????, ????????? ????????? ?????????????????????.",
    },
    {
      id: 6,
      medal: medal3,
      name: "?????????",
      img: a1_3_1,
      group: "??????",
      title: "????????? ???????????? ??? ????????? ????????? ????????? ",
      description:
        "???????????? ?????? ????????? ????????? ?????? ?????? ????????? ??????. ??????????????? ???????????? ?????? ???????????? ??????. ?????? ?????? ????????? ???????????? ?????? ??????????????? ????????? ?????? ???????????? ????????? ?????? ??????. ????????? ?????? ????????? ???????????? ??????????? ^^",
    },
    {
      id: 7,
      medal: medal3,
      name: "?????????",
      img: a1_3_2,
      group: "?????????",
      title: "??? ?????? ????????? ??????",
      description:
        "??????????????????????????????????????? ????????? ????????? ?????? ????????? ??????. ????????? ????????? ?????? ????????? ?????? ?????????.",
    },
    {
      id: 8,
      medal: medal3,
      name: "?????????",
      img: a1_3_3,
      group: "?????????",
      title: "?????? ?????? ???????????? ???",
      description: "????????? ?????? ?????? ????????? ?????? ????????????.",
    },
    {
      id: 9,
      medal: medal3,
      name: "?????????",
      img: a1_3_4,
      group: "?????????",
      title: "????????????",
      description:
        "??????????????? ???????????? ???????????? ?????? ????????? ???????????? ?????? ???????????? ???????????? ???????????????. ?????? B-612?????? ??????????????? ?????? ????????? ????????? ????????? ????????? ???????????? ????????? ?????? ????????????. ?????? ?????? ????????? ??????????????? ?????????~",
    },
    {
      id: 10,
      medal: medal3,
      name: "?????????",
      img: a1_3_5,
      group: "?????????",
      title: "????????? ??????????????? ?????? ???",
      description:
        "????????? ?????? ????????? ???????????? ????????? ???????????? ????????? ???????????? ???????????? ????????? ?????????. ??? ??????????????? ?????? ?????? 5?????? 4????????? ????????? ????????? ????????? ??????????????? ??????????????? ?????? ????????? ?????? ????????? ?????? ??????. ^^",
    },
    {
      id: 11,
      medal: medal4,
      name: "?????????",
      img: a1_4_0,
      group: "??????",
      title: "??? ?????? ???????",
      description:
        '????????? ????????? "??? ?????? ???????"?????? ???????????? ????????? ?????? ???????????????.',
    },
    {
      id: 12,
      medal: medal4,
      name: "?????????",
      img: a1_4_1,
      group: "??????",
      title: "?????? ?????? ?????? ??????",
      description: "????????? ?????? ?????? ?????? ??? ????????? ????????????.",
    },
    {
      id: 13,
      medal: medal4,
      name: "?????????",
      img: a1_4_2,
      group: "??????",
      title: "??????????????? ????????????",
      description:
        "??????????????? ?????? ????????????. ??? ????????? ?????? ??? ????????????. ????????? ????????? ??????, ????????? ??? ?????????, ???????????? ??? ????????????, ?????? ????????? ????????? ????????? ????????? ?????? ?????????.",
    },
    {
      id: 14,
      medal: medal4,
      name: "?????????",
      img: a1_4_3,
      group: "??????",
      title: "??????????????????",
      description:
        "???????????????????????? ???????????? ???????????? ????????????. ????????? ?????? ????????? ?????? ????????? ?????? ?????????.",
    },
    {
      id: 15,
      medal: medal4,
      name: "?????????",
      img: a1_4_4,
      group: "??????",
      title: "????????? ???????????? ?????????",
      description:
        "????????? ??????????????? ?????? ????????? ???????????????. ?????? ???????????? ???????????? ???????????? ???????????? ???????????? ??????????????? ????????? ???????????? ????????? ??????. ?????? ?????? ???????????? ??? ????????????? ??? ????????? ?????? ?????? ?????? ???????????????. ????????? ?????? ????????? ????????? ???????????? ???????????? ??????????????? ???????????? ????????? ???????????????. ????????? ???????????? ???????????? ????????? ??? ????????? ?????? ???????????? ????????????.",
    },
    {
      id: 16,
      medal: medal4,
      name: "?????????",
      img: a1_4_5,
      group: "?????????",
      title: "??? ???????????? ??????!",
      description:
        "???????????????????????? ????????? ?????? ???????????? ?????? ????????? ????????? ?????????? ????????? ?????? ?????? ???????????? ?????? ?????? ?????????????????? ???????????? ??? ?????? ??????! ??? ????????? ???????????? ????????????.",
    },
    {
      id: 17,
      medal: medal4,
      name: "?????????",
      img: a1_4_6,
      group: "?????????",
      title: "????????? ???????????? ?????? ????????? ?????????",
      description:
        "???????????? ???????????? ?????? ????????? ?????? ?????????. ???????????? ????????? ?????? ?????????.",
    },
    {
      id: 18,
      medal: medal4,
      name: "?????????",
      img: a1_4_7,
      group: "?????????",
      title: "?????? ???????????? ?????? ????????? ??????",
      description:
        "????????? ????????? ?????????????????? ????????? ????????????. ?????? ????????? ???????????? ?????? ???????????? ????????? ??????.",
    },
    {
      id: 19,
      medal: medal4,
      name: "?????????",
      img: a1_4_8,
      group: "?????????",
      title: "????????? ???????????????",
      description:
        "????????? ?????? ?????? ????????? ????????? ?????? ???????????? ??? ???????????????. ???????????? ????????? ?????? ?????????.",
    },
    {
      id: 20,
      medal: medal4,
      name: "?????????",
      img: a1_4_9,
      group: "?????????",
      title: "???????????? ????????? ?????????",
      description:
        "???????????? ???????????? ?????? ???????????? ????????? ???????????? ?????? ?????????.",
    },
    {
      id: 21,
      medal: medal4,
      name: "?????????",
      img: a1_4_10,
      group: "?????????",
      title: "????????? ??? ??????",
      description:
        "<????????? ?????? ???????????? ???????????????>?????? ?????? ?????? ??? ?????? ???????????? ?????? ??? ??? ?????? ???????????? ?????? ???????????????. ?????? ?????? ????????? ???????????? ????????? ?????? ?????????????????? ???????????? ????????? ?????? ??????????????? ????????? ?????? ???????????? ????????? ???????????? ????????? ???????????? ??????????????? ???????????? ????????? ????????? ???????????? ??????????????? ????????? ???????????? ????????? ??? ?????? ??????????????????.",
    },
    {
      id: 22,
      medal: medal4,
      name: "?????????",
      img: a1_4_11,
      group: "?????????",
      title: "????????? ???????????? ??????????????? ????????? ????????? ???",
      description:
        "????????? ????????? ?????? ????????? ????????? ???????????? ???????????? ???????????????. ?????????????????? ????????? ????????? ???????????? ??????????????? ?????? ??????????????????. ????????? ?????? ?????? ????????? ?????? ????????? ????????????. ???????????? ?????? ????????? ?????? ?????? ???????????? ?????? ???????????????. ????????? ????????? ?????????????????? ???????????? ???????????????. ?????? ?????? ??????????????? ????????????. ???????????????.",
    },
    {
      id: 23,
      medal: medal4,
      name: "?????????",
      img: a1_4_12,
      group: "?????????",
      title: "??????????????? ??? ???????????? ???????????? '??????'",
      description:
        "<???????????????> ?????? ?????? ???????????? ????????? ??????????????? ???????????? ?????? ????????? ????????? ????????? ?????? ??????????????? ?????????????????? ????????? ?????? ?????? ??? ??????????????????! ?????? ?????? ?????? ??????????????????! ????????? ????????? ?????? ????????? ????????? ???????????? '??????'. ????????? ???????????? ??????, ???, ??????, ?????????!",
    },
    {
      id: 24,
      medal: medal4,
      name: "?????????",
      img: a1_4_13,
      group: "?????????",
      title: "??????????????? ???????????????!",
      description:
        '??????????????? ???????????? ????????? ????????? ????????? ?????? ??????????????? ?????????. ?????? ???????????? ????????? ?????? ????????? ?????? ??????????????? ????????? ???????????? ?????????????????? ?????? ???????????? ????????????."??????????????? ?????? ???????????? ??????. ????????? ??? ??????????????????. ???????????????!"',
    },
    {
      id: 25,
      medal: medal4,
      name: "?????????",
      img: a1_4_14,
      group: "?????????",
      title: "???????????? ????????? ?????? ??????",
      description:
        '?????? <????????? ????????? ?????????> ??? ????????? ????????? ???????????????. ???????????? ??????????????? ???????????? ???, "??? ????????? ?????? ???????????? ?????? ????????????" ?????? ???????????????. ????????? ????????? ???????????? ????????????. ????????? ?????? ?????? ???????????? ?????? ?????? ????????????,?????? ???????????? ??? ????????????. ?????? ????????? ????????? ???????????????.',
    },
  ],
  award2: [
    {
      id: 1,
      medal: medal1,
      name: "?????????",
      img: a2_1_0,
      title: "?????????????????? ?????? ???????????? ?????????~! ",
    },
    {
      id: 2,
      medal: medal2,
      name: "?????????",
      img: a2_2_0,
      title: "??? ????????????",
    },
    {
      id: 3,
      medal: medal2,
      name: "?????????",
      img: a2_2_1,
      title: "??????????????? ??????",
    },
    {
      id: 4,
      medal: medal3,
      name: "?????????",
      img: a2_3_0,
      title: "??????????????? ??????",
    },
    {
      id: 5,
      medal: medal3,
      name: "?????????",
      img: a2_3_1,
      title: "??? ?????? ??? ?????????! (feat.?????????????????? ???????????? ?????????)",
    },
    {
      id: 6,
      medal: medal3,
      name: "?????????",
      img: a2_3_2,
      title: "?????? ?????? ????????????????",
    },
    {
      id: 7,
      medal: medal3,
      name: "?????????",
      img: a2_3_3,
      title: "?????? ????????????",
    },
    {
      id: 8,
      medal: medal3,
      name: "?????????",
      img: a2_3_4,
      title: "????????? ?????? ????????? ????????? ?????????",
    },
    {
      id: 9,
      medal: medal4,
      name: "?????????",
      img: a2_4_0,
      title: "????????? ?????? ?????? ??? ??? ??????",
    },
    {
      id: 10,
      medal: medal4,
      name: "?????????",
      img: a2_4_1,
      title: "???????????? ?????? ???(feat. ?????? ??? ???????????????)",
    },
    {
      id: 11,
      medal: medal4,
      name: "?????????",
      img: a2_4_2,
      title: "????????? ?????? - ????????? ????????? ???????????? ????????? ?????? ??????",
    },
    {
      id: 12,
      medal: medal4,
      name: "?????????",
      img: a2_4_3,
      title: "????????? ??? ??? ????????? ?????????",
    },
    {
      id: 13,
      medal: medal4,
      name: "?????????",
      img: a2_4_4,
      title: "????????? ??????????????? ??? ???! ??? ???! ",
    },
    {
      id: 14,
      medal: medal4,
      name: "?????????",
      img: a2_4_5,
      title: "?????? ?????? ??? ??????!",
    },
    {
      id: 15,
      medal: medal4,
      name: "?????????",
      img: a2_4_6,
      title: "?????? ?????? ???????????? ??????",
    },
    {
      id: 16,
      medal: medal4,
      name: "?????????",
      img: a2_4_7,
      title: "?????? ??????",
    },
    {
      id: 17,
      medal: medal4,
      name: "?????????",
      img: a2_4_8,
      title: "???????????? ?????? ?????????~^^",
    },
    {
      id: 18,
      medal: medal4,
      name: "?????????",
      img: a2_4_9,
      title: "?????? ????????? ????????? ?????????",
    },
    {
      id: 19,
      medal: medal4,
      name: "?????????",
      img: a2_4_10,
      title: "???????????????  ??????????????????  ??????",
    },
    {
      id: 20,
      medal: medal4,
      name: "?????????",
      img: a2_4_11,
      title: "???????????? ?????????.",
    },
    {
      id: 21,
      medal: medal4,
      name: "?????????",
      img: a2_4_12,
      title: "?????? ?????? ??????????????? ?????? ????????? ??? ???",
    },
    {
      id: 22,
      medal: medal4,
      name: "?????????",
      img: a2_4_13,
      title: "????????? ????????? ?????? ???????????? ?????????",
    },
    {
      id: 23,
      medal: medal4,
      name: "?????????",
      img: a2_4_14,
      title: "????????? ??? ????????????",
    },
    {
      id: 24,
      medal: medal4,
      name: "?????????",
      img: a2_4_15,
      title: "?????? ??????????????? ????????? : ?????? ?????? ????????? ????????? ??????????????? ??????",
    },
    {
      id: 25,
      medal: medal4,
      name: "?????????",
      img: a2_4_16,
      title: "?????????",
    },
    {
      id: 26,
      medal: medal4,
      name: "?????????",
      img: a2_4_17,
      title: "????????? ????????? ?????????(?????? ????????? ?????????!)",
    },
    {
      id: 27,
      medal: medal4,
      name: "?????????",
      img: a2_4_18,
      title: "??? ????????? ???, ???????????? ?????????!",
    },
    {
      id: 28,
      medal: medal4,
      name: "?????????",
      img: a2_4_19,
      title: "?????? ????????? ????????????",
    },
  ],
};

const CardContainer = styled.div`
  width: 100%;
  padding: 100px;
  display: flex;
  align-items: center;
  justify-content: center;
  overflow-x: hidden;
  position: relative;

  @media (max-width: 767.98px) {
    padding: 50px;
    overflow-x: scroll;
    justify-content: flex-start;
    &::-webkit-scrollbar {
      display: none;
    }
  }
`;

const ArrowContainer = styled.div`
  position: absolute;
  width: 100%;
  max-width: 1400px;
  left: 50%;
  top: 50%;
  transform: translate(-50%, -50%);
  display: flex;
  justify-content: space-between;

  @media (max-width: 767.98px) {
    display: none;
  }
`;

const ArrowButton = styled.div`
  width: 70px;
  height: 70px;
  border-radius: 50%;
  background: white;
  display: flex;
  align-items: center;
  justify-content: center;
  box-shadow: 0px 0px 20px rgba(0, 0, 0, 0.1);

  .icon {
    fill: #e3e3e3;
  }

  &:hover {
    box-shadow: 0px 0px 20px rgba(0, 0, 0, 0.3);
    .icon {
      fill: #505050;
    }
  }

  &.l {
    margin-left: -50px;
  }

  &.r {
    margin-right: -50px;
  }
`;

function Award({ pagename }) {
  const awardType = useRef(awardData[pagename]);
  const slideCount = useRef(0);
  const [cards, setCards] = useState([]);
  const [detail, setDetail] = useState(null);

  useEffect(() => {
    const windowWidth = window.innerWidth;

    awardType.current = awardData[pagename];
    slideCount.current = 0;
    const firstCards = awardType.current.slice(0, 4);

    windowWidth <= 767.98 ? setCards(awardType.current) : setCards(firstCards);
  }, [pagename]);

  const onClickRight = () => {
    let arr = [];
    slideCount.current += 4;
    if (slideCount.current < 0) {
      for (let i = 0; i < 4; i++) {
        let len = awardType.current.length;
        let cnt = slideCount.current;
        arr.push(awardType.current[(len - (-cnt % len) + i) % len]);
      }
    } else {
      for (let i = 0; i < 4; i++) {
        arr.push(
          awardType.current[(slideCount.current + i) % awardType.current.length]
        );
      }
    }
    setCards(arr);
  };

  const onClickLeft = () => {
    let arr = [];
    slideCount.current -= 4;
    if (slideCount.current < 0) {
      for (let i = 0; i < 4; i++) {
        let len = awardType.current.length;
        let cnt = slideCount.current;
        arr.push(awardType.current[(len - (-cnt % len) + i) % len]);
      }
    } else {
      for (let i = 0; i < 4; i++) {
        arr.push(
          awardType.current[(slideCount.current + i) % awardType.current.length]
        );
      }
    }
    setCards(arr);
  };

  return (
    <>
      <CardContainer>
        <ArrowContainer>
          <ArrowButton className="l" onClick={onClickLeft}>
            <LeftIcon className="icon" />
          </ArrowButton>
          <ArrowButton className="r" onClick={onClickRight}>
            <RightIcon className="icon" />
          </ArrowButton>
        </ArrowContainer>
        {cards.map((card) =>
          card.id === 1 ? (
            <AwardCard
              key={card.id}
              cardData={card}
              setDetail={setDetail}
              first={true}
            />
          ) : (
            <AwardCard key={card.id} cardData={card} setDetail={setDetail} />
          )
        )}
      </CardContainer>
      {detail && (
        <AwardDetail
          detail={detail}
          setDetail={setDetail}
          pagename={pagename}
        />
      )}
    </>
  );
}

export default Award;
