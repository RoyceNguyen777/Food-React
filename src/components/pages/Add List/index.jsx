import { Button, Checkbox, Space, Table, Typography } from "antd";
import React, { useEffect, useState } from "react";
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
      status: false,
    },
    {
      key: "02",
      name: "Hủ Tiếu",
      prize: 25000,
      status: false,
    },
    {
      key: "03",
      name: "Bò Kho",
      prize: 28000,
      status: false,
    },
    {
      key: "04",
      name: "Bánh Canh",
      prize: 23000,
      status: false,
    },
    {
      key: "05",
      name: "Bún Bò",
      prize: 35000,
      status: false,
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
      render: (bol, val, idx) => (
        <Checkbox
          checked={val.status}

          onChange={(e) => {

            const items = [...stateFood];
            const item = { ...items[idx], status: e.target.checked }
            items[idx] = { ...item };
            setStateFood(items);
            const filterlist = items.filter((item) => item.status === true);

            setCollectorFood(filterlist);
          }}
        ></Checkbox>
      ),
    },
  ];
  const [collectdataFood, setCollectorFood] = useState([]);
  // Data Drink
  const dataDrink = [
    {
      key: "01",
      name: "Nước Cam",
      prize: 15000,
      status: false,
    },
    {
      key: "02",
      name: "Nước Mía",
      prize: 10000,
      status: false,
    },
    {
      key: "03",
      name: "Nước Dừa",
      prize: 20000,
      status: false,
    },
    {
      key: "04",
      name: "Nước Suối",
      prize: 12000,
      status: false,
    },
    {
      key: "05",
      name: "Nước Ngọt",
      prize: 15000,
      status: false,
    },
  ];
  const [stateDrink, setStateDrink] = useState(dataDrink);
  const [stateFood, setStateFood] = useState(dataFood);

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
      render: (bol, val, idx) => (
        <Checkbox
          checked={val.status === true}
          onChange={(e) => {

            const items = [...stateDrink];
            const item = { ...items[idx], status: e.target.checked }
            items[idx] = { ...item };

            setStateDrink(items);

            const filterlist = items.filter(
              (item) => item.status === true
            );

            setCollectorDrink(filterlist);
          }}
        ></Checkbox>
      ),
    },
  ];
  const reduxlist = useSelector((state) => state.money);

  const [collectdataDrink, setCollectorDrink] = useState([]);

  //Total Prize
  const totalPriceFood = collectdataFood.reduce((total, food) => {
    return (total += food.prize);
  }, 0);
  const totalPriceDrink = collectdataDrink.reduce((total, food) => {
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
    drink: collectdataDrink,
    food: collectdataFood,
  };

  const Savedata = () => {
    dispatch(collectList(addnewlist));
    dispatch(collect([]));
    navigate("/");
  };

  const dataFoodDrink = {
    drink: stateDrink,
    totalmoneyDrink: collectdataDrink,
    food: stateFood,
    totalmoneyFood: collectdataFood,
  }
  useEffect(() => {
    if (reduxlist.length !== 0) {
      setStateDrink(reduxlist.drink);
      setCollectorDrink(reduxlist.totalmoneyDrink)
      setStateFood(reduxlist.food);
      setCollectorFood(reduxlist.totalmoneyFood)

    } else {
      setStateDrink(dataDrink);
      setStateFood(dataFood);

    }
  }, [reduxlist]);
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
              dispatch(collect([]));
              dispatch(collectMoney([]));
              navigate("/");
            }}
          >
            Hủy
          </Button>
          <Button
            onClick={() => {
              navigate("/add");
              dispatch(collectMoney(dataFoodDrink));
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
            dataSource={stateFood}
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
            dataSource={stateDrink}
            columns={columnsDrink}
            pagination={false}
          />
        </div>
      </StyleWrapperBox>
    </div>
  );
}

export default AddList;
