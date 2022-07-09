import { Routes, Route } from "react-router-dom";
import LoginPage from "./pages/LoginPage/LoginPage";
import JoinPage from "./pages/JoinPage";
import AddProductPage from "./pages/AddProductPage";
import "./reset.css";
import "./global.css";

function App() {
  return (
    <div className="max-width">
      <Routes>
        <Route path="/" element={<h1>메인 페이지입니다.</h1>} />
        <Route path="/user/login" element={<LoginPage />} />
        <Route path="/user" element={<JoinPage />} />
        <Route path="/product" element={<AddProductPage />} />
      </Routes>
    </div>
  );
}

export default App;
