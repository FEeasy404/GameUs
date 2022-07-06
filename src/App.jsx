import { Routes, Route } from "react-router-dom";
import LoginPage from "./pages/LoginPage";
import JoinPage from "./pages/JoinPage";
import "./reset.css";
import "./app.css";

function App() {
  return (
    <div className="max-width">
      <Routes>
        <Route path="/" element={<h1>메인 페이지입니다.</h1>} />
        <Route path="/user/login" element={<LoginPage />} />
        <Route path="/user" element={<JoinPage />} />
      </Routes>
    </div>
  );
}

export default App;
