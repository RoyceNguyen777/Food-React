import { Button, Space, Table, Typography } from "antd";
import React from "react";
import { useNavigate } from "react-router";
import styled from "styled-components";
import {
  columnsDrink,
  columnsFood,
  dataDrink,
  dataFood,
} from "../../../data/mockdata";

const { Title } = Typography;
const StyleSpace = styled(Space)`
  display: flex;
  justify-content: column;
  margin-left: auto;
`;
const StyleWrapperBox = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  grid-column-gap: 10%;
  margin: 50px 100px;
`;
const StyleTable = styled(Table)`
  border: 5px solid #000;
`;
const StyleWrapperTitle = styled.div`
  display: flex;
  flex-direction: column;
  margin: 0px 100px;
`;

function AddList(props) {
  const navigate = useNavigate();
  return (
    <div>
      <StyleWrapperTitle>
        <Title level={1} style={{ margin: "auto" }}>
          Thông tin đơn hàng
        </Title>
        <StyleSpace>
          <Button onClick={() => navigate("/")}>Hủy</Button>
          <Button onClick={() => navigate("/add")}>Quay lại</Button>
          <Button>Lưu</Button>
        </StyleSpace>
      </StyleWrapperTitle>

      <StyleWrapperBox>
        <div>
          <Title level={3}>List Đồ Ăn</Title>
          <StyleTable
            dataSource={dataFood}
            columns={columnsFood}
            pagination={false}
          />
        </div>
        <div>
          <Title level={3}>List Đồ Uống</Title>
          <StyleTable
            dataSource={dataDrink}
            columns={columnsDrink}
            pagination={false}
          />
        </div>
      </StyleWrapperBox>
    </div>
  );
}

export default AddList;
