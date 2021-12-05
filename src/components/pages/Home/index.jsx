import { Button, Table, Typography } from "antd";
import React from "react";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router";
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
  // Data People
  const columnsPer = [
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

  // Router
  const navigate = useNavigate();
  const handlAdd = () => {
    navigate("/add");
  };

  
  const personinfo = useSelector(state => state.person)
  console.log('personInfo',personinfo);
 

  return (
    <Wrapper>
      <StyleTitle level={1}>Danh Sách Khách Hàng</StyleTitle>
      <StyleButton size={"large"} onClick={handlAdd}>
        Tạo Mới
      </StyleButton>
      <StyleTable
        columns={columnsPer}
        pagination={false}
        bordered
      ></StyleTable>
    </Wrapper>
  );
}

export default Homepage;
