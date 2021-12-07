import { Button, Checkbox, Space, Table, Typography } from "antd";
import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router";
import styled from "styled-components";
import { collectList } from "../../../config/redux/MainListSlice";
import { collect } from "../../../config/redux/PersonSilce";
import { collectMoney } from "../../../config/redux/PriceSlice";

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
const StyleTotal = styled.div`
  margin-top: 10px;
  display: flex;
`;

function AddList(props) {
  // Data Food
  const dataFood = [
    {
      key: "01",
      name: "Phở",
      prize: 30000,
      status: true,
    },
    {
      key: "02",
      name: "Hủ Tiếu",
      prize: 25000,
      status: true,
    },
    {
      key: "03",
      name: "Bò Kho",
      prize: 28000,
      status: true,
    },
    {
      key: "04",
      name: "Bánh Canh",
      prize: 23000,
      status: true,
    },
    {
      key: "05",
      name: "Bún Bò",
      prize: 35000,
      status: true,
    },
  ];

  const columnsFood = [
    {
      title: "STT",
      dataIndex: "key",
      key: "key",
    },
    {
      title: "Món",
      dataIndex: "name",
      key: "key",
    },
    {
      title: "Giá",
      dataIndex: "prize",
      key: "prize",
    },
    {
      title: "Mua/Bán",
      dataIndex: "status",
      render: (value, idx, ob) => (
        <button onClick={() => setCollectorFood([...CollectDataFood, idx])}>
          {" "}
          Mua
        </button>
      ),
    },
  ];
  const [CollectDataFood, setCollectorFood] = useState([]);
  // Data Drink
  const dataDrink = [
    {
      key: "01",
      name: "Nước Cam",
      prize: 15000,
      status: true,
    },
    {
      key: "02",
      name: "Nước Mía",
      prize: 10000,
      status: true,
    },
    {
      key: "03",
      name: "Nước Dừa",
      prize: 20000,
      status: true,
    },
    {
      key: "04",
      name: "Nước Suối",
      prize: 12000,
      status: true,
    },
    {
      key: "05",
      name: "Nước Ngọc",
      prize: 15000,
      status: true,
    },
  ];
  const columnsDrink = [
    {
      title: "STT",
      dataIndex: "key",
      key: "key",
    },
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
    {
      title: "Mua/Bán",
      dataIndex: "status",
      render: (value, idx, ob) => (
        <Checkbox type="checkbox" value={idx}></Checkbox>
      ),
    },
  ];

  const [CollectDataDrink, setCollectorDrink] = useState([]);
  //Total Prize
  const totalPriceFood = CollectDataFood.reduce((total, food) => {
    return (total += food.prize);
  }, 0);
  const totalPriceDrink = CollectDataDrink.reduce((total, food) => {
    return (total += food.prize);
  }, 0);
  const TotalPrize = totalPriceFood + totalPriceDrink;
  const totalMoney = TotalPrize.toLocaleString({
    style: "currency",
  });

  // Router
  const navigate = useNavigate();

  //Add all list
  const personinfo = useSelector((state) => state.person);
  const allist = useSelector((state) => state.allist);
  const dispatch = useDispatch();

  // Add price & id
  const addid = allist.map((value, idx) => idx);
  const addnewlist = {
    ...personinfo,
    price: totalMoney,
    id: addid.length + 1,
    drink: CollectDataDrink,
    food: CollectDataFood,
  };

  const Savedata = () => {
    dispatch(collectList(addnewlist));
    navigate("/");
  };

  return (
    <div>
      <StyleWrapperTitle>
        <Title level={1} style={{ margin: "auto" }}>
          Thông tin đơn hàng
        </Title>
        <StyleSpace>
          <Button
            onClick={() => {
              localStorage.clear("root");
              navigate("/");
              dispatch(collect([]));
            }}
          >
            Hủy
          </Button>
          <Button
            onClick={() => {
              dispatch(collectMoney(totalMoney));
              navigate("/add");
            }}
          >
            Quay lại
          </Button>
          <Button onClick={Savedata}>Lưu</Button>
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
          <StyleTotal>
            <Title level={3}>Tổng Cộng :</Title>
            <Title level={3} style={{ margin: "auto" }}>
              {totalMoney} VND
            </Title>
          </StyleTotal>
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
