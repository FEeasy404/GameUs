import React, { useEffect, useState } from "react";
import { Route, Routes } from "react-router-dom";
import SplashPage from "./pages/SplashPage/SplashPage";
import HomePage from "./pages/HomePage/HomePage";
import LoginPage from "./pages/LoginPage/LoginPage";
import RegisterPage from "./pages/RegisterPage/RegisterPage";
import SearchPage from "./pages/SearchPage/SearchPage";
import ChatListPage from "./pages/ChatListPage/ChatListPage";
import ChatRoomPage from "./pages/ChatRoomPage/ChatRoomPage";
import PostViewPage from "./pages/PostViewPage/PostViewPage";
import PostUploadPage from "./pages/PostUploadPage/PostUploadPage";
import PostEditPage from "./pages/PostEditPage/PostEditPage";
import ProfilePage from "./pages/ProfilePage/ProfilePage";
import ProfileEditPage from "./pages/ProfileEditPage/ProfileEditPage";
import FollowerPage from "./pages/FollowerPage/FollowerPage";
import FollowingPage from "./pages/FollowingPage/FollowingPage";
import ProductUploadPage from "./pages/ProductUploadPage/ProductUploadPage";
import ProductEditPage from "./pages/ProductEditPage/ProductEditPage";
import ErrorPage from "./pages/ErrorPage/ErrorPage";
import { LoginedUserContext } from "./contexts/LoginedUserContext";
import { checkTokenValid } from "./common/checkValid";
import "./reset.css";
import "./font.css";
import "./global.css";

function App() {
  const loginedToken = window.sessionStorage.getItem("token");
  const loginedAccountname = window.sessionStorage.getItem("accountname");
  const loginedImage = window.sessionStorage.getItem("image");
  const [user, setUser] = useState({
    token: loginedToken,
    accountname: loginedAccountname,
    image: loginedImage,
  });

  useEffect(() => {
    if (checkTokenValid(user.token)) {
      const loginedData = user;
      setUser(loginedData);

      if (window.performance) {
        if (PerformanceNavigationTiming === 1) {
          setUser(loginedData);
        }
      }
    }
  }, []);

  return (
    <LoginedUserContext.Provider value={{ user, setUser }}>
      {user && (
        <div className="max-width">
          <h1 className="a11y-hidden">게임어스</h1>
          <Routes>
            <Route path="/" element={<SplashPage />} />
            <Route path="/feed" element={<HomePage />} />
            <Route path="/login" element={<LoginPage />} />
            <Route path="/register" element={<RegisterPage />} />
            <Route path="/search" element={<SearchPage />} />
            <Route path="/chat" element={<ChatListPage />} />
            <Route path="/chat/:chatroomId" element={<ChatRoomPage />} />
            <Route path="/post" element={<PostUploadPage />} />
            <Route path="/post/:postId" element={<PostViewPage />} />
            <Route path="/post/edit/:postId" element={<PostEditPage />} />
            <Route path="/profile/:accountname" element={<ProfilePage />} />
            <Route
              path="/profile/:accountname/edit"
              element={<ProfileEditPage />}
            />
            <Route
              path="/profile/:accountname/follower"
              element={<FollowerPage />}
            />
            <Route
              path="/profile/:accountname/following"
              element={<FollowingPage />}
            />
            <Route path="/product" element={<ProductUploadPage />} />
            <Route
              path="/product/edit/:productId"
              element={<ProductEditPage />}
            />
            <Route path="/*" element={<ErrorPage />} />
          </Routes>
        </div>
      )}
    </LoginedUserContext.Provider>
  );
}

export default App;
