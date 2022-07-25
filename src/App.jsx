import { Routes, Route } from "react-router-dom";
import "./reset.css";
import "./global.css";
import LoginPage from "./pages/LoginPage/LoginPage";
import RegisterPage from "./pages/RegisterPage";
import AddProductPage from "./pages/AddProductPage/AddProductPage";
import ProfilePage from "./pages/ProfilePage/ProfilePage";
import ProfileEditPage from "./pages/ProfileEditPage/ProfileEditPage";
import UploadPage from "./pages/UploadPage/UploadPage";
import FollowerPage from "./pages/FollowerPage";
import FollowingPage from "./pages/FollowingPage.jsx";
import ErrorPage from "./pages/ErrorPage/ErrorPage";
import HomePage from "./pages/HomePage/HomePage";
import PostPage from "./pages/PostPage/PostPage";
import SearchPage from "./pages/SearchPage/SearchPage";
import ChatListPage from "./pages/ChatListPage/ChatListPage";

function App() {
  return (
    <div className="max-width">
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/login" element={<LoginPage />} />
        <Route path="/register" element={<RegisterPage />} />
        <Route path="/search" element={<SearchPage />} />
        <Route path="/chat" element={<ChatListPage />} />
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
        <Route path="/post/:postId" element={<PostPage />} />
        <Route path="/*" element={<ErrorPage />} />
      </Routes>
    </div>
  );
}

export default App;
