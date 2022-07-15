import { Routes, Route } from "react-router-dom";
import LoginPage from "./pages/LoginPage/LoginPage";
import JoinPage from "./pages/JoinPage";
import AddProductPage from "./pages/AddProductPage";
import ProfilePage from "./pages/ProfilePage";
import ProfileEditPage from "./pages/ProfileEditPage";
import UploadPage from "./pages/UploadPage/UploadPage";
import "./reset.css";
import "./global.css";
import FollowerPage from "./pages/FollowerPage";
import FollowingPage from "./pages/FollowingPage.jsx";

function App() {
  return (
    <div className="max-width">
      <Routes>
        <Route path="/" element={<h1>메인 페이지입니다.</h1>} />
        <Route path="/user/login" element={<LoginPage />} />
        <Route path="/user" element={<JoinPage />} />
        <Route path="/product" element={<AddProductPage />} />
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
