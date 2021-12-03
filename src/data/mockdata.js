const dataRealFood = () => {
  
};
const dataFood = [
  {
    key: "01",
    name: "Phở",
    prize: 3000,
    status: true,
  },
  {
    key: "02",
    name: "Hủ Tiếu",
    prize: 2000,
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
      <button onClick={}> Mua</button>
    ),
  },
];
const dataDrink = [
  {
    key: "01",
    name: "Nước Cam",
    prize: 400,
  },
  {
    key: "02",
    name: "Nước Mía",
    prize: 600,
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
];

const dataPer = [
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
export {
  dataDrink,
  dataFood,
  columnsFood,
  columnsDrink,
  dataPer,
  columnsPer,
  dataRealFood,
};
