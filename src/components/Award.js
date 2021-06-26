import React, { useState } from "react";
import styled from "styled-components";

import AwardCard from "./AwardCard";

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
      medal: 1,
      name: "최한결",
      img: a1_1_0,
    },
    {
      id: 2,
      medal: 2,
      name: "송태건",
      img: a1_2_0,
    },
    {
      id: 3,
      medal: 2,
      name: "황민준",
      img: a1_2_1,
    },
    {
      id: 4,
      medal: 2,
      name: "신혜수",
      img: a1_2_2,
    },
    {
      id: 5,
      medal: 3,
      name: "김현서",
      img: a1_3_0,
    },
    {
      id: 6,
      medal: 3,
      name: "구다온",
      img: a1_3_1,
    },
    {
      id: 7,
      medal: 3,
      name: "권임주",
      img: a1_3_2,
    },
    {
      id: 8,
      medal: 3,
      name: "박이세",
      img: a1_3_3,
    },
    {
      id: 9,
      medal: 3,
      name: "최홍준",
      img: a1_3_4,
    },
    {
      id: 10,
      medal: 3,
      name: "손승솔",
      img: a1_3_5,
    },
    {
      id: 11,
      medal: 4,
      name: "성윤아",
      img: a1_4_0,
    },
    {
      id: 12,
      medal: 4,
      name: "김도준",
      img: a1_4_1,
    },
    {
      id: 13,
      medal: 4,
      name: "허재윤",
      img: a1_4_2,
    },
    {
      id: 14,
      medal: 4,
      name: "도현우",
      img: a1_4_3,
    },
    {
      id: 15,
      medal: 4,
      name: "조가원",
      img: a1_4_4,
    },
    {
      id: 16,
      medal: 4,
      name: "김주성",
      img: a1_4_5,
    },
    {
      id: 17,
      medal: 4,
      name: "손효우",
      img: a1_4_6,
    },
    {
      id: 18,
      medal: 4,
      name: "이한결",
      img: a1_4_7,
    },
    {
      id: 19,
      medal: 4,
      name: "박시온",
      img: a1_4_8,
    },
    {
      id: 20,
      medal: 4,
      name: "백하린",
      img: a1_4_9,
    },
    {
      id: 21,
      medal: 4,
      name: "임채정",
      img: a1_4_10,
    },
    {
      id: 22,
      medal: 4,
      name: "배지우",
      img: a1_4_11,
    },
    {
      id: 23,
      medal: 4,
      name: "유주아",
      img: a1_4_12,
    },
    {
      id: 24,
      medal: 4,
      name: "김지유",
      img: a1_4_13,
    },
    {
      id: 25,
      medal: 4,
      name: "우린우",
      img: a1_4_14,
    },
  ],
  award2: [
    {
      id: 1,
      medal: 1,
      name: "민서윤",
      img: a2_1_0,
    },
    {
      id: 2,
      medal: 2,
      name: "이주하",
      img: a2_2_0,
    },
    {
      id: 3,
      medal: 2,
      name: "정희윤",
      img: a2_2_1,
    },
    {
      id: 4,
      medal: 3,
      name: "김희승",
      img: a2_3_0,
    },
    {
      id: 5,
      medal: 3,
      name: "강이안",
      img: a2_3_1,
    },
    {
      id: 6,
      medal: 3,
      name: "황시우",
      img: a2_3_2,
    },
    {
      id: 7,
      medal: 3,
      name: "정하윤",
      img: a2_3_3,
    },
    {
      id: 8,
      medal: 3,
      name: "정아윤",
      img: a2_3_4,
    },
    {
      id: 9,
      medal: 4,
      name: "박윤후",
      img: a2_4_0,
    },
    {
      id: 10,
      medal: 4,
      name: "이수연",
      img: a2_4_1,
    },
    {
      id: 11,
      medal: 4,
      name: "임현도",
      img: a2_4_2,
    },
    {
      id: 12,
      medal: 4,
      name: "전서현",
      img: a2_4_3,
    },
    {
      id: 13,
      medal: 4,
      name: "황지서",
      img: a2_4_4,
    },
    {
      id: 14,
      medal: 4,
      name: "이준재",
      img: a2_4_5,
    },
    {
      id: 15,
      medal: 4,
      name: "이채이",
      img: a2_4_6,
    },
    {
      id: 16,
      medal: 4,
      name: "이서하",
      img: a2_4_7,
    },
    {
      id: 17,
      medal: 4,
      name: "이준혁",
      img: a2_4_8,
    },
    {
      id: 18,
      medal: 4,
      name: "여유찬",
      img: a2_4_9,
    },
    {
      id: 19,
      medal: 4,
      name: "이서현",
      img: a2_4_10,
    },
    {
      id: 20,
      medal: 4,
      name: "이하주",
      img: a2_4_11,
    },
    {
      id: 21,
      medal: 4,
      name: "갈주안",
      img: a2_4_12,
    },
    {
      id: 22,
      medal: 4,
      name: "이하솔",
      img: a2_4_13,
    },
    {
      id: 23,
      medal: 4,
      name: "조우진",
      img: a2_4_14,
    },
    {
      id: 24,
      medal: 4,
      name: "유주아",
      img: a2_4_15,
    },
    {
      id: 25,
      medal: 4,
      name: "우린우",
      img: a2_4_16,
    },
    {
      id: 26,
      medal: 4,
      name: "백하린",
      img: a2_4_17,
    },
    {
      id: 27,
      medal: 4,
      name: "박도윤",
      img: a2_4_18,
    },
    {
      id: 28,
      medal: 4,
      name: "이하은",
      img: a2_4_19,
    },
  ],
};

const CardContainer = styled.div`
  width: 100%;
  padding: 100px;
  display: flex;
  align-items: center;
  justify-content: center;
  overflow-x: scroll;
`;

function Award({ pagename }) {
  const awardType = awardData[pagename];

  const [slideCount, setSlideCount] = useState(0);

  return (
    <CardContainer>
      <AwardCard cardData={awardType[0]} />
      <AwardCard cardData={awardType[1]} />
      <AwardCard cardData={awardType[2]} />
      <AwardCard cardData={awardType[3]} />
      <AwardCard cardData={awardType[4]} />
      <AwardCard cardData={awardType[5]} />
    </CardContainer>
  );
}

export default Award;
