import { Routes, Route } from "react-router-dom";
import "./reset.css";
import "./global.css";
import LoginPage from "./pages/LoginPage/LoginPage";
import JoinPage from "./pages/JoinPage";
import AddProductPage from "./pages/AddProductPage";
import ProfilePage from "./pages/ProfilePage";
import ProfileEditPage from "./pages/ProfileEditPage";
import UploadPage from "./pages/UploadPage/UploadPage";
import FollowerPage from "./pages/FollowerPage";
import FollowingPage from "./pages/FollowingPage.jsx";
import HomePage from "./pages/HomePage";

function App() {
  //로그인 구현후 변경 필요
  const accountname = "weniv_Gameland";
  return (
    <div className="max-width">
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/user/login" element={<LoginPage />} />
        <Route path="/user" element={<JoinPage />} />
        <Route
          path="/product"
          element={<AddProductPage accountname={accountname} />}
        />
        <Route path="/profile/:accountname" element={<ProfilePage />} />
        <Route
          path="/profile/:accountname/follower"
          element={<FollowerPage />}
        />
        <Route
          path="/profile/:accountname/following"
          element={<FollowingPage />}
        />
        <Route path="profile/edit" element={<ProfileEditPage />} />
        <Route path="/post" element={<UploadPage />} />
      </Routes>
    </div>
  );
}

export default App;