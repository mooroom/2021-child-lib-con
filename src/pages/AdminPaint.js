import React, { useState, useEffect } from "react";
import { Table } from "semantic-ui-react";
import { db } from "../firebase";

function AdminPaint(props) {
  async function getMarker() {
    const snapshot = await db.collection("paint").get();
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
      <h1>독서감상그리기 대회 신청자</h1>

      <Table celled>
        <Table.Header>
          <Table.Row>
            <Table.HeaderCell>이름</Table.HeaderCell>
            <Table.HeaderCell>생년월일</Table.HeaderCell>
            <Table.HeaderCell>대상구분</Table.HeaderCell>
            <Table.HeaderCell>휴대폰</Table.HeaderCell>
            <Table.HeaderCell>주소</Table.HeaderCell>
            <Table.HeaderCell>제목 및 작품설명</Table.HeaderCell>
            {/* <Table.HeaderCell>제출시간</Table.HeaderCell> */}
          </Table.Row>
        </Table.Header>

        <Table.Body>
          {datas.map((data, index) => (
            <Table.Row key={index}>
              <Table.Cell>{data.name}</Table.Cell>
              <Table.Cell>{data.birth}</Table.Cell>
              <Table.Cell>{data.section}</Table.Cell>
              <Table.Cell>{data.phone}</Table.Cell>
              <Table.Cell>{data.addr}</Table.Cell>
              <Table.Cell>{data.title}</Table.Cell>
              {/* <Table.Cell>{data.createdAt}</Table.Cell> */}
            </Table.Row>
          ))}
        </Table.Body>
      </Table>
    </>
  );
}

export default AdminPaint;
