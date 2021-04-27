import "./App.css";
import { createGlobalStyle } from "styled-components";
import ModalHead from "./components/modal/ModalHead";
import ModalTemplate from "./components/modal/ModalTemplate";
import TodoTemplate from "./components/modal/ModalTemplate";

import letter from "./img/letter.svg";
import ModalList from "./components/modal/ModalList";
import ModalInput from "./components/modal/ModalInput";

const GlobalStyle = createGlobalStyle`
  body {
    background: #e9ecef;
  }
  *,:after,:before {
    box-sizing: border-box;
  }
`;

function App() {
  return (
    <div>
      <GlobalStyle />
      <ModalTemplate>
        <ModalHead image={letter} text="집콕 책읽기 사진 제출" />
        <ModalList>
          <ModalInput
            id="1"
            label="이름"
            type="file"
            accept="image/png, image/jpeg"
            placeholder="이름을 입력해주세요"
          />
        </ModalList>
      </ModalTemplate>
    </div>
  );
}

export default App;
