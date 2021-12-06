import React from "react";
import { Typography, Table, Button } from "antd";
import styled from "styled-components";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router";

const { Title } = Typography;

const Wrapper = styled.div`
  margin: 50px 100px;
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

function InfoBill(props) {
  const columnsDrink = [
    {
      title: "Món",
      dataIndex: "name",
      key: "name",
    },
    {
      title: "Giá",
      dataIndex: "prize",
      key: "prize",
    },
  ];
  const columnsFood = [
    {
      title: "Món",
      dataIndex: "name",
      key: "name",
    },
    {
      title: "Giá",
      dataIndex: "prize",
      key: "prize",
    },
  ];
  const privateInfo = useSelector((state) => state);
  const { name, phone, adress, price, drink, food } = privateInfo.person;
  const navigate = useNavigate();

  return (
    <div>
      <Wrapper>
        <Title level={1}>Chi Tiết Đơn Hàng</Title>

        <Title level={2} style={{ fontStyle: "italic" }}>
          Tên:
          <span style={{ marginLeft: "20px", color: "red" }}>{name}</span>
        </Title>
        <Title level={2} style={{ fontStyle: "italic" }}>
          SĐT:
          <span style={{ marginLeft: "20px", color: "red" }}>{phone}</span>
        </Title>
        <Title level={2} style={{ fontStyle: "italic" }}>
          Địa Chỉ:
          <span style={{ marginLeft: "20px", color: "red" }}> {adress} </span>
        </Title>
        <Title level={2} style={{ fontStyle: "italic" }}>
          Giá trị ĐH:
          <span style={{ marginLeft: "20px", color: "red" }}>{price}</span>
        </Title>

        <StyleWrapperBox>
          <div>
            <Title level={3}>List Đồ Ăn</Title>
            <StyleTable
              columns={columnsFood}
              dataSource={food}
              pagination={false}
            />
          </div>
          <div>
            <Title level={3}>List Đồ Uống</Title>
            <StyleTable
              dataSource={drink}
              columns={columnsDrink}
              pagination={false}
            />
          </div>
        </StyleWrapperBox>

        <Button type="primary" onClick={() => navigate("/")}>
          Back
        </Button>
      </Wrapper>
    </div>
  );
}

export default InfoBill;
