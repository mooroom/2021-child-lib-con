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
      name: "최한결",
      img: a1_1_0,
      group: "",
      title: "하늘100층집을 읽고",
      description:
        "하늘 100층 집을 읽고 한결이의 날씨 5층 집을 그렸어요. 도화지가 작아서 100층은 못그렸어요",
    },
    {
      id: 2,
      medal: medal2,
      name: "송태건",
      img: a1_2_0,
      group: "유아",
      title: "하늘위 커다란 날다람쥐를 타요",
      description:
        '일본작가 초 신타의 "양배추 소년"을 보고 상상한대로 하늘에 크게 나타나는 동물들의 모습에 재미를 느꼈습니다. 그래서 봄에 숲에서 활발히 뛰어노는 날다람쥐가 사이즈가 커져 하늘을 날면서 자기가 함께 타고 노는 모습을 그렸습니다.',
    },
    {
      id: 3,
      medal: medal2,
      name: "황민준",
      img: a1_2_1,
      group: "초등저",
      title: "잭과 콩나무를 올라요",
      description:
        "잭과 함께 콩나무를 오르고 있어요! 황금알을 낳는 거위를 가지고 와서 부자가 될거에요.",
    },
    {
      id: 4,
      medal: medal2,
      name: "신혜수",
      img: a1_2_2,
      group: "초등고",
      title: "하늘을 나는 혜수팬(피터팬)",
      description:
        "마치 내가 혜수팬(피터팬)이 되어 잔소리 하는 아빠후크(후크선장)와 책 읽으라는 엄마앤디(앤디)를 보면서 팅커벨과 즐겁게 날아 다니고 있는 그림을 그려 보았습니다.^^",
    },
    {
      id: 5,
      medal: medal3,
      name: "김현서",
      img: a1_3_0,
      group: "유아",
      title: "비오는 날 토토로와 현서",
      description:
        "무지개 우산을 쓴 토토로와 현서가 비오는 날 비오는 모습을 함께 지켜보고 있습니다. 나무와 바위가 함께 있고, 비오는 모습을 표현하였습니다.",
    },
    {
      id: 6,
      medal: medal3,
      name: "구다온",
      img: a1_3_1,
      group: "유아",
      title: "무지개 물고기와 나 그리고 신기한 친구들 ",
      description:
        "반짝이는 예쁜 무지개 물고기 안에 내가 들어가 있다. 바닷속에는 신기하고 예쁜 친구들이 많다. 나는 예쁜 무지개 물고기와 함께 바다여행을 하면서 바다 친구들과 신나게 놀고 싶다. 그런데 진짜 무지개 물고기가 있을까?? ^^",
    },
    {
      id: 7,
      medal: medal3,
      name: "권임주",
      img: a1_3_2,
      group: "초등저",
      title: "책 먹는 여우와 임주",
      description:
        "국립어린이청소년도서관에서 임주와 여우가 점심 식사를 했다. 소금을 뿌려서 책과 콜라를 같이 먹었다.",
    },
    {
      id: 8,
      medal: medal3,
      name: "박이세",
      img: a1_3_3,
      group: "초등저",
      title: "배를 타고 탐험하는 나",
      description: "가족과 배를 타고 새로운 곳을 탐험해요.",
    },
    {
      id: 9,
      medal: medal3,
      name: "최홍준",
      img: a1_3_4,
      group: "초등고",
      title: "어린왕자",
      description:
        "어린왕자가 장미꽃을 씻어주고 유리 덮개로 덮어주며 화산 봉오리를 씻어주는 장면입니다. 저도 B-612에서 어린왕자와 함께 살면서 주변의 소중한 것들을 돌봐주고 사랑을 쏟고 있습니다. 마치 나의 가족과 친구들에게 하듯이~",
    },
    {
      id: 10,
      medal: medal3,
      name: "손승솔",
      img: a1_3_5,
      group: "초등고",
      title: "우리반 슈퍼스타는 바로 나",
      description:
        "경주에 이긴 꾸물이 거북이는 스타가 되어오는 장면이 화려하고 멋져보여 기억에 남았다. 이 꾸물이처럼 나도 우리 5학년 4반에서 뭐든지 열심히 잘해서 친구들에게 사랑받으며 오래 기억에 남는 스타가 되고 싶다. ^^",
    },
    {
      id: 11,
      medal: medal4,
      name: "성윤아",
      img: a1_4_0,
      group: "유아",
      title: "내 당근 봤니?",
      description:
        '토끼가 다가와 "내 당근 봤니?"라고 물어보는 모습을 그린 그림입니다.',
    },
    {
      id: 12,
      medal: medal4,
      name: "김도준",
      img: a1_4_1,
      group: "유아",
      title: "꽃이 되고 싶은 악어",
      description: "악어와 함께 놀고 싶은 제 모습을 그렸어요.",
    },
    {
      id: 13,
      medal: medal4,
      name: "허채윤",
      img: a1_4_2,
      group: "유아",
      title: "엄지공주와 숲속파티",
      description:
        "엄지공주는 작고 귀여워요. 제 손바닥 안에 쏙 들어오죠. 토끼는 피아노 연주, 사슴은 종 흔들기, 너구리는 북 두드리기, 새는 노래를 부르며 즐거운 파티를 하고 있어요.",
    },
    {
      id: 14,
      medal: medal4,
      name: "도현우",
      img: a1_4_3,
      group: "유아",
      title: "미운오리새끼",
      description:
        "미운오리새끼들이 사이좋게 지냈으면 좋겠어요. 그래서 제가 맛있는 밥을 나누어 주고 있어요.",
    },
    {
      id: 15,
      medal: medal4,
      name: "조가원",
      img: a1_4_4,
      group: "유아",
      title: "언제나 케이크는 맛있어",
      description:
        "거인이 배고프다고 돼지 친구를 잡아갔어요. 정말 큰일났다 싶었는데 친구들이 케이크를 만들어서 돼지친구도 구하고 거인이랑 친구도 돼요. 같이 만든 케이크라 더 맛있었나? 그 케이크 맛이 너무 너무 궁금했어요. 그래서 저도 동화책 속으로 들어가서 거인이랑 친구들이랑 케이크도 만들고 먹고싶어요. 언제나 케이크는 맛있지만 동화책 속 케이크 맛이 너무너무 궁금해요.",
    },
    {
      id: 16,
      medal: medal4,
      name: "김주성",
      img: a1_4_5,
      group: "초등저",
      title: "굿 다이노와 함께!",
      description:
        "굿다이노에서처럼 공룡이 만약 지금까지 살고 있다면 얼마나 좋을까? 알로와 함께 나도 반짝이는 별도 보고 공룡친구들과 놀러다닐 수 있을 텐데! 그 모습을 상상해서 그렸어요.",
    },
    {
      id: 17,
      medal: medal4,
      name: "손효우",
      img: a1_4_6,
      group: "초등저",
      title: "알라딘 양타자를 타고 하늘을 날아요",
      description:
        "알라딘의 양탄자를 타고 하늘을 날고 있어요. 시원하고 기분이 너무 좋아요.",
    },
    {
      id: 18,
      medal: medal4,
      name: "이한결",
      img: a1_4_7,
      group: "초등저",
      title: "잭이 콩나무를 쉽게 오르는 방법",
      description:
        "잭에게 선물로 엘리베이터를 만들어 주었어요. 이제 힘들게 콩나무를 기어 올라가지 않아도 돼요.",
    },
    {
      id: 19,
      medal: medal4,
      name: "박시온",
      img: a1_4_8,
      group: "초등저",
      title: "토끼야 얼른일어나",
      description:
        "낮잠을 자고 있는 토끼를 깨우기 위해 노력하는 제 모습이에요. 당근으로 토끼를 깨울 거에요.",
    },
    {
      id: 20,
      medal: medal4,
      name: "백하린",
      img: a1_4_9,
      group: "초등저",
      title: "공원에서 일어난 이야기",
      description:
        "공원에서 어린이집 친구 윤지은을 만나서 이야기를 하고 싶어요.",
    },
    {
      id: 21,
      medal: medal4,
      name: "임채정",
      img: a1_4_10,
      group: "초등고",
      title: "곤충은 내 친구",
      description:
        "<우리와 힘께 살아가는 곤충이야기>라는 책을 읽고 그 책의 주인공이 내가 된 것 같은 기분으로 그려 보았습니다. 저는 원래 곤충이 징그럽게 생겨서 엄청 무서워했는데 가족들과 캠핑을 하기 시작하면서 곤충에 대한 두려움이 조금씩 사라졌고 눈으로 곤충들을 관찰하면서 신비로운 곤충의 세계가 궁금하고 재미있었고 곤충을 그려보고 싶어서 이 책을 선택했습니다.",
    },
    {
      id: 22,
      medal: medal4,
      name: "배지우",
      img: a1_4_11,
      group: "초등고",
      title: "치즈를 좋아하는 꼬마철학자 줄무늬 생쥐의 방",
      description:
        "예전에 읽었던 꼬마 철학자 줄무늬 생쥐라는 동화책을 보았습니다. 꼬마철학자인 줄무늬 생쥐가 들려주는 이야기들이 너무 재미있었어요. 그래서 책을 읽는 생쥐의 방을 상상해 보았어요. 좋아하는 책과 치즈가 엄청 많고 벽시계도 치즈 모양입니다. 그리고 벽에는 치즈러브라는 벽글씨도 적혀있어요. 저는 이런 창작동화를 좋아해요. 감사합니다.",
    },
    {
      id: 23,
      medal: medal4,
      name: "유주아",
      img: a1_4_12,
      group: "초등고",
      title: "작은아씨들 네 자매에게 초대받은 '주아'",
      description:
        "<작은아씨들> 책을 보고 부유하진 않지만 자매들끼리 행복하게 꿈을 나누며 지내는 모습이 너무 부러웠는데 외동딸이어서 혼자인 나를 어느 날 초대해주었다! 함께 멋진 꿈을 이야기하자고! 설레는 맘으로 작은 아씨들 집으로 들어가는 '주아'. 그리고 환영하는 메그, 조, 베스, 에이미!",
    },
    {
      id: 24,
      medal: medal4,
      name: "김지유",
      img: a1_4_13,
      group: "초등고",
      title: "빨간모자야 들어가지마!",
      description:
        '빨간모자가 할머니로 변장한 늑대의 꼬임에 집에 들어가려고 하네요. 저는 늑대에게 들키지 않게 문옆에 서서 빨간모자를 지키는 천사처럼 빨간모자에게 계속 속삭이고 있었어요."빨간모자야 안돼 들어가면 안돼. 늑대가 널 잡아먹을거야. 들어가지마!"',
    },
    {
      id: 25,
      medal: medal4,
      name: "우린우",
      img: a1_4_14,
      group: "초등고",
      title: "토끼굴에 떨어진 나의 모습",
      description:
        '저는 <이상한 나라의 앨리스> 속 장면을 상상해 보았습니다. 앨리스가 토끼굴에서 떨어졌을 때, "난 분명히 지구 한가운데 쯤에 왔을거야" 라고 말했습니다. 그리고 심지어 졸기까지 했습니다. 하지만 만약 제가 앨리스와 같은 일을 겪었다면,정말 무서웠을 것 같습니다. 이런 그림을 상상해 보았습니다.',
    },
  ],
  award2: [
    {
      id: 1,
      medal: medal1,
      name: "민서윤",
      img: a2_1_0,
      title: "집콕휴가에는 역시 책읽기가 딱이야~! ",
    },
    {
      id: 2,
      medal: medal2,
      name: "이주하",
      img: a2_2_0,
      title: "늘 지금처럼",
    },
    {
      id: 3,
      medal: medal2,
      name: "정희윤",
      img: a2_2_1,
      title: "동생들에게 책을",
    },
    {
      id: 4,
      medal: medal3,
      name: "김희승",
      img: a2_3_0,
      title: "책들속에서 집콕",
    },
    {
      id: 5,
      medal: medal3,
      name: "강이안",
      img: a2_3_1,
      title: "나 혼자 안 읽는다! (feat.인형친구들과 함께하는 책읽기)",
    },
    {
      id: 6,
      medal: medal3,
      name: "황시우",
      img: a2_3_2,
      title: "내가 만일 공룡이라면?",
    },
    {
      id: 7,
      medal: medal3,
      name: "정하윤",
      img: a2_3_3,
      title: "나도 안나처럼",
    },
    {
      id: 8,
      medal: medal3,
      name: "정아윤",
      img: a2_3_4,
      title: "동생과 함께 즐거운 식사와 책보기",
    },
    {
      id: 9,
      medal: medal4,
      name: "박윤후",
      img: a2_4_0,
      title: "꿈나라 기차 타기 전 책 읽기",
    },
    {
      id: 10,
      medal: medal4,
      name: "이수연",
      img: a2_4_1,
      title: "반납하러 가는 길(feat. 한번 더 읽고싶어요)",
    },
    {
      id: 11,
      medal: medal4,
      name: "임현도",
      img: a2_4_2,
      title: "훈훈한 남매 - 책읽는 오빠를 쳐다보는 고양이 동생 찾기",
    },
    {
      id: 12,
      medal: medal4,
      name: "전서현",
      img: a2_4_3,
      title: "잠자기 전 책 읽기는 필수죠",
    },
    {
      id: 13,
      medal: medal4,
      name: "황지서",
      img: a2_4_4,
      title: "나만의 종이집에서 집 콕! 책 콕! ",
    },
    {
      id: 14,
      medal: medal4,
      name: "이준재",
      img: a2_4_5,
      title: "책을 놓을 수 없다!",
    },
    {
      id: 15,
      medal: medal4,
      name: "이채이",
      img: a2_4_6,
      title: "내가 제일 좋아하는 시간",
    },
    {
      id: 16,
      medal: medal4,
      name: "이서하",
      img: a2_4_7,
      title: "책이 좋아",
    },
    {
      id: 17,
      medal: medal4,
      name: "이준혁",
      img: a2_4_8,
      title: "우리집은 독서 캠핑장~^^",
    },
    {
      id: 18,
      medal: medal4,
      name: "여유찬",
      img: a2_4_9,
      title: "우리 가족의 올여름 피서법",
    },
    {
      id: 19,
      medal: medal4,
      name: "이서현",
      img: a2_4_10,
      title: "백설공주와  동물친구들의  독서",
    },
    {
      id: 20,
      medal: medal4,
      name: "이하주",
      img: a2_4_11,
      title: "소리내어 읽어요.",
    },
    {
      id: 21,
      medal: medal4,
      name: "갈주안",
      img: a2_4_12,
      title: "매일 아침 모닝우유와 함께 그림책 한 권",
    },
    {
      id: 22,
      medal: medal4,
      name: "이하솔",
      img: a2_4_13,
      title: "책읽는 순간이 가장 따뜻하고 포근해",
    },
    {
      id: 23,
      medal: medal4,
      name: "조우진",
      img: a2_4_14,
      title: "북캐슬 속 독서형제",
    },
    {
      id: 24,
      medal: medal4,
      name: "유주아",
      img: a2_4_15,
      title: "나는 스토리텔링 선생님 : 이불 잔디 위에서 즐거운 스토리텔링 시간",
    },
    {
      id: 25,
      medal: medal4,
      name: "우린우",
      img: a2_4_16,
      title: "오누이",
    },
    {
      id: 26,
      medal: medal4,
      name: "백하린",
      img: a2_4_17,
      title: "책과의 달콤한 대화중(우리 건들지 마세요!)",
    },
    {
      id: 27,
      medal: medal4,
      name: "박도윤",
      img: a2_4_18,
      title: "밤 독서의 맛, 해리포터 판타지!",
    },
    {
      id: 28,
      medal: medal4,
      name: "이하은",
      img: a2_4_19,
      title: "집콕 남매의 독서대결",
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
    awardType.current = awardData[pagename];
    slideCount.current = 0;
    const firstCards = awardType.current.slice(0, 4);
    setCards(firstCards);
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
        {cards.map((card) => (
          <AwardCard key={card.id} cardData={card} setDetail={setDetail} />
        ))}
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
