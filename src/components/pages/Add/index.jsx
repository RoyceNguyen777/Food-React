import { Button, Form, Input, Space, Typography } from "antd";
import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router";
import styled from "styled-components";
import { collect } from "../../../config/redux/PersonSilce";
import { collectMoney } from "../../../config/redux/PriceSlice";

// Style-Components
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
  const allist = useSelector((state) => state.allist);
  const dispatch = useDispatch();

  const onFinish = (values) => {
   
    dispatch(collect(values));
    if (values.name && values.phone && values.adress) return navigate("/list");
  };

  return (
    <Wrapper>
      <Title level={1} style={{ margin: "auto" }}>
        Thông tin KH
      </Title>

      <StyleForm onFinish={onFinish}>
        <StyleButton>
          <Button
            onClick={() => {
              dispatch(collect([]));
              navigate("/");
            }}
          >
            Hủy
          </Button>
          <Button htmlType="submit">Tiếp Tục</Button>
        </StyleButton>
        <StyleFormGroup>
          <StyleForm.Item
            label="Họ Tên :"
            name="name"
            initialValue={person ? person.name : " "}
            rules={[{ required: true, message: "Xin nhập họ và tên" }]}
          >
            <StyleInput></StyleInput>
          </StyleForm.Item>
          <StyleForm.Item
            label="SĐT"
            name="phone"
            initialValue={person.phone ? person.phone : 0}
            rules={[
              {
                required: true,
                message: "Xin nhập số điện thoại!",
              },
              {
                pattern: new RegExp("^(09|03|07|08|091)+([0-9]{8})$"),
                message: "Xin hãy nhập chính xác sdt",
              },
            ]}
          >
            <StyleInput></StyleInput>
          </StyleForm.Item>
          <StyleForm.Item
            label="Địa Chỉ"
            name="adress"
            initialValue={person.adress}
            rules={[{ required: true, message: "Xin nhập địa chỉ!" }]}
          >
            <StyleInput></StyleInput>
          </StyleForm.Item>
        </StyleFormGroup>
      </StyleForm>
    </Wrapper>
  );
}

export default Add;
