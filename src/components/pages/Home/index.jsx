import React from "react";
import { Typography, Button, Table } from "antd";
import styled from "styled-components";

const { Title } = Typography;
const Wrapper = styled.div`
  margin: 30px;
  display: flex;
  flex-direction: column;
`;
const StyleTable = styled(Table)`
  border: 2px solid black;
  margin-top: 20px;
`;
const StyleButton = styled(Button)`
  margin-left: auto;
`;
const StyleTitle = styled(Title)`
  margin: auto;
`;

function Homepage(props) {
  const dataSource = [
    {
      key: "1",
      hovaten: "Mike",
      sdt: 32,
      gtri: "10 Downing Street",
    },
    {
      key: "2",
      hovaten: "John",
      sdt: 42,
      gtri: "10 Downing Street",
    },
  ];
  const col = [
    {
      title: "Họ và tên",
      dataIndex: "hovaten",
      key: "hovaten",
    },
    {
      title: "Số Điện Thoại",
      dataIndex: "sdt",
      key: "sdt",
    },
    {
      title: "Giá Trị ĐH",
      dataIndex: "gtri",
      key: "gtri",
    },
  ];
  return (
    <Wrapper>
      <StyleTitle level={1}>Danh Sách Khách Hàng</StyleTitle>
      <StyleButton size={"large"}>Tạo Mới</StyleButton>
      <StyleTable
        columns={col}
        dataSource={dataSource}
        pagination={false}
        bordered
      ></StyleTable>
    </Wrapper>
  );
}

export default Homepage;
