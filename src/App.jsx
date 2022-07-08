import { Routes, Route } from "react-router-dom";
import LoginPage from "./pages/LoginPage/LoginPage";
import JoinPage from "./pages/JoinPage";
import ProfilePage from "./pages/ProfilePage";
import "./reset.css";
import "./global.css";
function App() {
  return (
    <div className="max-width">
      <Routes>
        <Route path="/" element={<h1>메인 페이지입니다.</h1>} />
        <Route path="/user/login" element={<LoginPage />} />
        <Route path="/user" element={<JoinPage />} />
        <Route path="/profile" element={<ProfilePage />} />
        <Route
          path="/profile/follower"
          element={<h1>팔로워 목록 페이지입니다.</h1>}
        />
        <Route
          path="/profile/following"
          element={<h1>팔로잉 목록 페이지입니다.</h1>}
        />
      </Routes>
    </div>
  );
}

export default App;
