import React, { useEffect, useState } from "react";
import { Table } from "semantic-ui-react";
import { db } from "../firebase";

import Container from "../components/Container";

function AdminSns(props) {
  async function getMarker() {
    const snapshot = await db.collection("sns").get();
    return snapshot.docs.map((doc) => doc.data());
  }

  const [datas, setDatas] = useState([]);

  useEffect(() => {
    getMarker().then((d) => {
      setDatas(d);
    });
  }, []);

  return (
    <Container>
      <h1>SNS이벤트 신청자</h1>

      <Table celled>
        <Table.Header>
          <Table.Row>
            <Table.HeaderCell>이름</Table.HeaderCell>
            <Table.HeaderCell>휴대폰</Table.HeaderCell>
            <Table.HeaderCell>SNS주소</Table.HeaderCell>
            {/* <Table.HeaderCell>제출시간</Table.HeaderCell> */}
          </Table.Row>
        </Table.Header>

        <Table.Body>
          {datas.map((data, index) => (
            <Table.Row key={index}>
              <Table.Cell>{data.name}</Table.Cell>
              <Table.Cell>{data.phone}</Table.Cell>
              <Table.Cell>{data.sns}</Table.Cell>
              {/* <Table.Cell>{data.createdAt}</Table.Cell> */}
            </Table.Row>
          ))}
        </Table.Body>
      </Table>
    </Container>
  );
}

export default AdminSns;
