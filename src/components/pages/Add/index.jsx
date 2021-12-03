import { Button, Space, Form, Input, Typography } from "antd";
import React, { useState } from "react";
import { useNavigate } from "react-router";
import styled from "styled-components";

const { Title } = Typography;
const Wrapper = styled.div`
  margin: 50px 100px;
  display: flex;
  flex-direction: column;
`;
const StyleButton = styled(Space)`
  display: flex;
  margin-left: auto;
`;
const StyleForm = styled(Form)`
  display: flex;
  flex-direction: column;
  line-height: 2rem;
`;
const StyleFormGroup = styled.div`
  width: 25%;
  margin: auto;
`;
const StyleInput = styled(Input)`
  width: 100%;
  font-size: 1.2rem;
`;
function Add(props) {
  const navigate = useNavigate();
  const [Form, setForm] = useState({
    name: "",
    phone: "",
    adress: "",
  });
  const handlenext = () => {
    if (Form.name && Form.phone && Form.adress) return navigate("/list");
  };

  return (
    <Wrapper>
      <Title level={1} style={{ margin: "auto" }}>
        Thông tin KH{" "}
      </Title>

      <StyleForm onFinish={handlenext} initialValues={{ remember: true }}>
        <StyleButton>
          <Button onClick={() => navigate("/")}>Hủy</Button>
          <Button htmlType="submit" onClick={handlenext}>
            Tiếp Tục
          </Button>
        </StyleButton>
        <StyleFormGroup>
          <StyleForm.Item label="Họ và tên">
            <StyleInput
              autoFocus
              required={true}
              value={Form.name}
              onChange={(e) => setForm({ ...Form, name: e.target.value })}
            ></StyleInput>
          </StyleForm.Item>
          <StyleForm.Item label="SĐT">
            <StyleInput
              type="tel"
              required
              value={Form.phone}
              onChange={(e) => setForm({ ...Form, phone: e.target.value })}
            ></StyleInput>
          </StyleForm.Item>
          <StyleForm.Item label="Địa Chỉ">
            <StyleInput
              required
              value={Form.adress}
              onChange={(e) => setForm({ ...Form, adress: e.target.value })}
            ></StyleInput>
          </StyleForm.Item>
        </StyleFormGroup>
      </StyleForm>
    </Wrapper>
  );
}

export default Add;
