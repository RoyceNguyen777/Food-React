import { Route, Routes } from "react-router-dom";
import "./App.css";
import Add from "./components/pages/Add/";
import Homepage from "./components/pages/Home";
import AddList from "./components/pages/Add List";
import InfoBill from "./components/pages/Info";
import "antd/dist/antd.css";

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Homepage />} />
        <Route path="/add" element={<Add />} />
        <Route path="/add/:id" element={<Add />} />
        <Route path="/list" element={<AddList />} />
        <Route path="/list/:id" element={<AddList />} />
        <Route path="/info" element={<InfoBill />} />
      </Routes>
    </div>
  );
}

export default App;
