import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { Table } from "semantic-ui-react";
import { db } from "../firebase";
import styled from "styled-components";
import { AgGridColumn, AgGridReact } from "ag-grid-react";
import ImgCellRenderer from "../cellRederer/imgCellRenderer";

import "ag-grid-community/dist/styles/ag-grid.css";
import "ag-grid-community/dist/styles/ag-theme-alpine.css";

const TableContainer = styled.div`
  width: 100%;
  height: 100%;
  padding: 100px 50px;
  overflow: auto;
`;

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
    <TableContainer>
      <h1>집콕 책읽기 사진공모전 신청자</h1>
      <div
        className="ag-theme-alpine"
        style={{ height: "100%", width: "100%" }}
      >
        <AgGridReact
          frameworkComponents={{
            imgCellRenderer: ImgCellRenderer,
          }}
          rowData={datas}
          defaultColDef={{
            editable: true,
            sortable: true,
            flex: 1,
            minWidth: 100,
            filter: true,
            resizable: true,
          }}
        >
          <AgGridColumn headerName="이름" field="name"></AgGridColumn>
          <AgGridColumn headerName="생년월일" field="birth"></AgGridColumn>
          <AgGridColumn headerName="휴대폰" field="phone"></AgGridColumn>
          <AgGridColumn headerName="작품명" field="title"></AgGridColumn>
          <AgGridColumn
            headerName="파일1"
            field="url1"
            cellRenderer="imgCellRenderer"
          ></AgGridColumn>
          <AgGridColumn
            headerName="파일2"
            field="url2"
            cellRenderer="imgCellRenderer"
          ></AgGridColumn>
          <AgGridColumn
            headerName="제출시간"
            field="createdAt"
            valueFormatter={dateFormatter}
          ></AgGridColumn>
        </AgGridReact>
      </div>

      {/* <Table celled>
        <Table.Header>
          <Table.Row>
            <Table.HeaderCell>이름</Table.HeaderCell>
            <Table.HeaderCell>생년월일</Table.HeaderCell>
            <Table.HeaderCell>휴대폰</Table.HeaderCell>
            <Table.HeaderCell>작품명</Table.HeaderCell>
            <Table.HeaderCell>파일첨부1</Table.HeaderCell>
            <Table.HeaderCell>파일첨부2</Table.HeaderCell>
          </Table.Row>
        </Table.Header>

        <Table.Body>
          {datas.map((data, index) => (
            <Table.Row key={index}>
              <Table.Cell>{data.name}</Table.Cell>
              <Table.Cell>{data.birth}</Table.Cell>
              <Table.Cell>{data.phone}</Table.Cell>
              <Table.Cell>{data.title}</Table.Cell>
              <Table.Cell>
                <a href={data.url1} download target="_blank" rel="noreferrer">
                  <img
                    src={data.url1}
                    width="50px"
                    height="50px"
                    alt="thumbnail"
                  />
                </a>
              </Table.Cell>
              <Table.Cell>{data.url2}</Table.Cell>
            </Table.Row>
          ))}
        </Table.Body>
      </Table> */}
    </TableContainer>
  );
}

function dateFormatter(params) {
  return params.value.toDate().toLocaleString("ko-KR");
}

export default AdminPhoto;
