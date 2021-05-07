import React, { useState, useEffect } from "react";
import { Table } from "semantic-ui-react";
import { db } from "../firebase";
import styled from "styled-components";

import { AgGridColumn, AgGridReact } from "ag-grid-react";

import "ag-grid-community/dist/styles/ag-grid.css";
import "ag-grid-community/dist/styles/ag-theme-alpine.css";

const TableContainer = styled.div`
  width: 100%;
  height: 100%;
  padding: 100px 50px;
  overflow: auto;
`;

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
    <TableContainer>
      <h1>독서감상그리기 대회 신청자</h1>
      <div
        className="ag-theme-alpine"
        style={{ height: "100%", width: "100%" }}
      >
        <AgGridReact
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
          <AgGridColumn headerName="대상구분" field="section"></AgGridColumn>
          <AgGridColumn headerName="휴대폰" field="phone"></AgGridColumn>
          <AgGridColumn headerName="주소" field="addr"></AgGridColumn>
          <AgGridColumn
            headerName="제목 및 작품 설명"
            field="title"
          ></AgGridColumn>
          <AgGridColumn
            headerName="제출시간"
            field="createdAt"
            valueFormatter={dateFormatter}
          ></AgGridColumn>
        </AgGridReact>
      </div>
    </TableContainer>
  );
}

function dateFormatter(params) {
  return params.value.toDate().toLocaleString("ko-KR");
}

export default AdminPaint;
