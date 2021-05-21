import React, { useState } from "react";
import { Link, useHistory } from "react-router-dom";
import styled from "styled-components";
import Button from "../components/Button";
import { useAuth } from "../context/AuthContext";

const AdminBlock = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const AdminLinks = styled.div`
  width: 400px;
  height: 400px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
  padding: 20px;
  border: 1px solid var(--grey200);
`;

function Admin(props) {
  const [error, setError] = useState("");
  const { currentUser, logout } = useAuth();
  const history = useHistory();

  async function handleLogout() {
    setError("");

    try {
      await logout();
      history.push("/login");
    } catch {
      setError("failed to log out");
    }
  }
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
        <Button
          onClick={handleLogout}
          color="#0d6efd"
          width="100%"
          className="mt-5"
        >
          로그아웃
        </Button>
      </AdminLinks>
    </AdminBlock>
  );
}

export default Admin;
