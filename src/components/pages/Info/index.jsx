import React from "react";
import { Typography, Table } from "antd";
import styled from "styled-components";


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
  return (
    <div>
      <Wrapper>
        <Title level={1}>Chi Tiết Đơn Hàng</Title>

        <p>Tên:</p>
        <p>SĐT:</p>
        <p>Địa Chỉ:</p>
        <p>Giá trị ĐH: </p>

        <StyleWrapperBox>
          <div>
            <Title level={3}>List Đồ Ăn</Title>
            <StyleTable
              dataSource={'dataFood'}
              columns={'columnsFood'}
              pagination={false}
            />
          </div>
          <div>
            <Title level={3}>List Đồ Uống</Title>
            <StyleTable
              dataSource={'dataDrink'}
              columns={'columnsDrink'}
              pagination={false}
            />
          </div>
        </StyleWrapperBox>
      </Wrapper>
    </div>
  );
}

export default InfoBill;
