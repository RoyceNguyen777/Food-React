import "./App.css";
import { Typography, Button, Space, Input, Form } from "antd";
import styled from "styled-components";

const { Title } = Typography;

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  margin: 20px 50px;
`;
const StyleButton = styled(Space)`
  display: flex;
  margin-left: auto;
`;
const StyleTitle = styled(Title)`
  margin: auto;
`;
const StyleForm = styled(Form)`
  width: 20%;
  margin: auto;
  line-height: 1.8rem;
`;
const StyleInput = styled(Input)`
  width: 100%;
  padding: 5px;
`;
function App() {
  return (
    <div className="App">
      <Wrapper>
        <StyleTitle level={1}>Thông tin KH </StyleTitle>
        <StyleButton>
          <Button>Hủy</Button>
          <Button>Tiếp Tục</Button>
        </StyleButton>
        <StyleForm>
          <Form.Item label="Họ và tên">
            <StyleInput></StyleInput>
          </Form.Item>
          <Form.Item label="SĐT">
            <StyleInput></StyleInput>
          </Form.Item>
          <Form.Item label="Địa Chỉ">
            <StyleInput></StyleInput>
          </Form.Item>
        </StyleForm>
      </Wrapper>
    </div>
  );
}

export default App;
