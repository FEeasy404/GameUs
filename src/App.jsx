import { Routes, Route } from "react-router-dom";
import LoginPage from "./pages/LoginPage/LoginPage";
import JoinPage from "./pages/JoinPage";
import "./reset.css";
import "./global.css";
import ProfileSettingPage from "./pages/ProfileSettingPage";

function App() {
  return (
    <div className="max-width">
      <Routes>
        <Route path="/" element={<h1>메인 페이지입니다.</h1>} />
        <Route path="/user/login" element={<LoginPage />} />
        <Route path="/user" element={<JoinPage />} />
        <Route path="/user/profile" element={<ProfileSettingPage />} />
      </Routes>
    </div>
  );
}

export default App;
