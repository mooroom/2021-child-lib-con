import React, { useCallback } from "react";
import { withRouter, Redirect } from "react-router";
import { auth } from "../firebase";
import { Link } from "react-router-dom";

function Login({ history }) {
  const user = auth.currentUser;

  const handleLogin = useCallback(
    async (e) => {
      e.preventDefault();
      const { id, pw } = e.target.elements;
      try {
        await auth.signInWithEmailAndPassword(id.value, pw.value);
        console.log(auth.currentUser.uid);
        // history.push("/admin");
      } catch (error) {
        alert(error);
      }
    },
    [history]
  );

  if (user) {
    return <Redirect to="/admin" />;
  }

  return (
    <div>
      <form onSubmit={handleLogin}>
        <div>
          <input
            name="id"
            type="email"
            placeholder="이메일"
            autoComplete="false"
            required
          />
        </div>
        <div>
          <input
            name="pw"
            type="password"
            placeholder="비밀번호"
            autoComplete="false"
            required
          />
        </div>
        <div>
          <button type="submit">로그인</button>
        </div>
      </form>
    </div>
  );
}

export default withRouter(Login);
