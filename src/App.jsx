import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./components/Home";
import Item from "./components/Item";
import Navbar from "./components/Navbar/Navbar";

function App() {
  return (
    <div>
      <BrowserRouter>
        <Navbar />
        <div className="pt-[60px]">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path=":id" element={<Item />} />
          </Routes>
        </div>
      </BrowserRouter>
    </div>
  );
}

export default App;
