import { Button, Space, Table, Typography } from "antd";
import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router";
import styled from "styled-components";
import { collectItem } from "../../../config/redux/MainListSlice";
import { collect } from "../../../config/redux/PersonSilce";

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
      title: "Stt",
      dataIndex: "id",
      key: "stt",
    },
    {
      title: "Họ và tên",
      dataIndex: "name",
      key: "name",
    },
    {
      title: "Số Điện Thoại",
      dataIndex: "phone",
      key: "phone",
    },
    {
      title: "Địa chỉ",
      dataIndex: "adress",
      key: "adress",
    },
    {
      title: "Giá Trị ĐH",
      dataIndex: "price",
      key: "price",
    },
    {
      title: " ",
      dataIndex: "status",
      render: (value, idx, ob) => (
        <Space
          size="middle"
          style={{ display: "flex", justifyContent: "center" }}
        >
          <Button
            type="primary"
            danger
            onClick={() => {
              const remove = MenuPerson.filter((item) => item.id !== idx.id);
              setMenu(remove);
              localStorage.clear("root");
              dispatch(collectItem(remove));
            }}
          >
            Xóa
          </Button>
          <Button
            type="primary"
            onClick={() => {
              dispatch(collect(idx));
              navigate("/info");
            }}
          >
            Thông tin
          </Button>
        </Space>
      ),
    },
  ];
  // Router
  const navigate = useNavigate();
  const handlAdd = () => {
    dispatch(collect([]))
    navigate("/add");
  };
  const Allist = useSelector((state) => state.allist);
  const dispatch = useDispatch();
  const [MenuPerson, setMenu] = useState([]);
  useEffect(() => {
    setMenu(Allist);
  }, [Allist]);

  return (
    <Wrapper>
      <StyleTitle level={1}>Danh Sách Khách Hàng</StyleTitle>
      <StyleButton size={"large"} onClick={handlAdd}>
        Tạo Mới
      </StyleButton>
      <StyleTable
        columns={columnsPer}
        rowKey={(MenuPerson) => MenuPerson.id}
        dataSource={MenuPerson}
        pagination={false}
        bordered
      ></StyleTable>
    </Wrapper>
  );
}

export default Homepage;
