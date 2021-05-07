import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";
import Button from "../components/Button";

const AdminBlock = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const AdminLinks = styled.div`
  width: 300px;
  height: 300px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
  padding: 20px;
  border: 1px solid var(--grey200);
`;

function Admin(props) {
  return (
    <AdminBlock>
      <AdminLinks>
        <h1>관리자 페이지</h1>
        <Link to="/admin.paint">
          <Button color="#808080">그림그리기대회</Button>
        </Link>
        <Link to="/admin.photo">
          <Button color="#808080">사진공모전</Button>
        </Link>
        <Link to="/admin.sns">
          <Button color="#808080">SNS 인증 이벤트</Button>
        </Link>
      </AdminLinks>
    </AdminBlock>
  );
}

export default Admin;
