import React, { useState, useEffect } from "react";
import { Table } from "semantic-ui-react";
import { db } from "../firebase";

function AdminPhoto(props) {
  async function getMarker() {
    const snapshot = await db.collection("photo").get();
    return snapshot.docs.map((doc) => doc.data());
  }

  const [datas, setDatas] = useState([]);

  useEffect(() => {
    getMarker().then((d) => {
      setDatas(d);
    });
  }, []);
  return (
    <>
      <h1>집콕 책읽기 사진공모전 신청자</h1>

      <Table celled>
        <Table.Header>
          <Table.Row>
            <Table.HeaderCell>이름</Table.HeaderCell>
            <Table.HeaderCell>생년월일</Table.HeaderCell>
            <Table.HeaderCell>휴대폰</Table.HeaderCell>
            <Table.HeaderCell>작품명</Table.HeaderCell>
            <Table.HeaderCell>파일첨부1</Table.HeaderCell>
            <Table.HeaderCell>파일첨부2</Table.HeaderCell>
            {/* <Table.HeaderCell>제출시간</Table.HeaderCell> */}
          </Table.Row>
        </Table.Header>

        <Table.Body>
          {datas.map((data, index) => (
            <Table.Row key={index}>
              <Table.Cell>{data.name}</Table.Cell>
              <Table.Cell>{data.birth}</Table.Cell>
              <Table.Cell>{data.phone}</Table.Cell>
              <Table.Cell>{data.title}</Table.Cell>
              <Table.Cell>{data.url1}</Table.Cell>
              <Table.Cell>{data.url2}</Table.Cell>
              {/* <Table.Cell>{data.createdAt.toLocaleString()}</Table.Cell> */}
            </Table.Row>
          ))}
        </Table.Body>
      </Table>
    </>
  );
}

export default AdminPhoto;
