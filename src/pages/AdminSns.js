import React, { useState, useEffect } from "react";
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

function AdminSns(props) {
  const [datas, setDatas] = useState([]);
  const [gridApi, setGridApi] = useState(null);
  const [gridColumnApi, setGridColumnApi] = useState(null);

  async function getMarker() {
    const snapshot = await db.collection("sns").get();
    return snapshot.docs.map((doc) => doc.data());
  }

  useEffect(() => {
    getMarker().then((d) => {
      setDatas(d);
    });
  }, []);

  const onGridReady = (params) => {
    setGridApi(params.api);
    setGridColumnApi(params.columnApi);
  };

  const onBtExport = () => {
    gridApi.exportDataAsCsv();
  };

  return (
    <TableContainer>
      <h1>SNS 이벤트 신청자</h1>
      <button
        onClick={() => onBtExport()}
        style={{ marginBottom: "5px", fontWeight: "bold" }}
      >
        엑셀 다운로드
      </button>
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
          onGridReady={onGridReady}
          applyColumnDefOrder={true}
        >
          <AgGridColumn
            headerName="#"
            maxWidth={100}
            valueGetter={(params) => params.node.rowIndex + 1}
          />
          <AgGridColumn headerName="이름" field="name"></AgGridColumn>
          <AgGridColumn headerName="휴대폰" field="phone"></AgGridColumn>
          <AgGridColumn
            headerName="파일1"
            field="url1"
            cellRenderer="imgCellRenderer"
          ></AgGridColumn>
          <AgGridColumn headerName="sns주소" field="sns"></AgGridColumn>
          <AgGridColumn
            headerName="제출시간"
            valueGetter={(params) =>
              params.data.createdAt.toDate().toLocaleString("ko-KR")
            }
          ></AgGridColumn>
          <AgGridColumn
            headerName="시간순정렬(timestamp)"
            field="createdAt"
          ></AgGridColumn>
        </AgGridReact>
      </div>
    </TableContainer>
  );
}

export default AdminSns;
