import React from "react";
import { Typography, Button, Table } from "antd";
import styled from "styled-components";
import { columnsPer, dataPer } from "../../../data/mockdata";
import { useNavigate } from "react-router";

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
  const navigate = useNavigate();
  const handlAdd = () => {
    navigate("/add");
  };
  return (
    <Wrapper>
      <StyleTitle level={1}>Danh Sách Khách Hàng</StyleTitle>
      <StyleButton size={"large"} onClick={handlAdd}>
        Tạo Mới
      </StyleButton>
      <StyleTable
        columns={columnsPer}
        dataSource={dataPer}
        pagination={false}
        bordered
      ></StyleTable>
    </Wrapper>
  );
}

export default Homepage;
