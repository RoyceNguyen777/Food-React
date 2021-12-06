import { Button, Form, Input, Space, Typography } from "antd";
import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router";
import styled from "styled-components";
import { collect } from "../../../config/redux/PersonSilce";

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
  .ant-form-item-label {
    width: 20%;
  }
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
  // Router
  const navigate = useNavigate();

  const person = useSelector((state) => state.person);
  const dispatch = useDispatch();

  const handlenext = () => {
    dispatch(collect(FormValue));
    if (FormValue.name && FormValue.phone && FormValue.adress)
      return navigate("/list");
  };

  //Form
  const [FormValue, setForm] = useState({
    name: "",
    phone: "",
    adress: "",
  });

  // Persist Redux
  useEffect(() => {
    setForm(person);
  }, [person]);
  console.log("Person-Presist:", person);

  return (
    <Wrapper>
      <Title level={1} style={{ margin: "auto" }}>
        Thông tin KH{" "}
      </Title>

      <StyleForm onFinish={handlenext}>
        <StyleButton>
          <Button onClick={() => navigate("/")}>Hủy</Button>
          <Button htmlType="submit" onClick={handlenext}>
            Tiếp Tục
          </Button>
        </StyleButton>
        <StyleFormGroup>
          <StyleForm.Item label="Họ Tên :" rules={[{ type: "number" }]}>
            <StyleInput
              autoFocus
              value={FormValue.name}
              onChange={(e) => setForm({ ...FormValue, name: e.target.value })}
            ></StyleInput>
          </StyleForm.Item>
          <StyleForm.Item label="SĐT">
            <StyleInput
              type="tel"
              required
              value={FormValue.phone}
              onChange={(e) => setForm({ ...FormValue, phone: e.target.value })}
            ></StyleInput>
          </StyleForm.Item>
          <StyleForm.Item label="Địa Chỉ">
            <StyleInput
              required
              value={FormValue.adress}
              onChange={(e) =>
                setForm({ ...FormValue, adress: e.target.value })
              }
            ></StyleInput>
          </StyleForm.Item>
        </StyleFormGroup>
      </StyleForm>
    </Wrapper>
  );
}

export default Add;
