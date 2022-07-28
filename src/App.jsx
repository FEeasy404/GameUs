import { Routes, Route } from "react-router-dom";
import "./reset.css";
import "./font.css";
import "./global.css";
import SplashPage from "./pages/SplashPage/SplashPage";
import LoginPage from "./pages/LoginPage/LoginPage";
import RegisterPage from "./pages/RegisterPage/RegisterPage";
import AddProductPage from "./pages/AddProductPage/AddProductPage";
import ProfilePage from "./pages/ProfilePage/ProfilePage";
import ProfileEditPage from "./pages/ProfileEditPage/ProfileEditPage";
import UploadPage from "./pages/UploadPage/UploadPage";
import FollowerPage from "./pages/FollowerPage/FollowerPage";
import FollowingPage from "./pages/FollowingPage/FollowingPage";
import ErrorPage from "./pages/ErrorPage/ErrorPage";
import HomePage from "./pages/HomePage/HomePage";
import PostPage from "./pages/PostPage/PostPage";
import SearchPage from "./pages/SearchPage/SearchPage";
import ChatListPage from "./pages/ChatListPage/ChatListPage";
import ChatRoomPage from "./pages/ChatRoomPage/ChatRoomPage";
import PostEditPage from "./pages/PostEditPage/PostEditPage";

function App() {
  return (
    <div className="max-width">
      <h1 className="a11y-hidden">게임어스</h1>
      <Routes>
        <Route path="/" element={<SplashPage />} />
        <Route path="/feed" element={<HomePage />} />
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
        <Route
          path="/profile/:accountname/edit"
          element={<ProfileEditPage />}
        />
        <Route path="/post" element={<UploadPage />} />
        <Route path="/post/:postId" element={<PostPage />} />
        <Route path="/chat/:chatroomId" element={<ChatRoomPage />} />
        <Route path="/post/edit/:postId" element={<PostEditPage />} />
        <Route path="/*" element={<ErrorPage />} />
      </Routes>
    </div>
  );
}

export default App;
