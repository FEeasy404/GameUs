import React, { useContext, useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import HeaderForm from "../../components/molecules/HeaderForm/HeaderForm";
import BottomNavigateBar from "../../components/molecules/BottomNavigateBar/BottomNavigateBar";
import FollowList from "../../components/organisms/FollowList/FollowList";
import { getFollowings } from "./FollowingPageAPI";
import { LoginedUserContext } from "../../contexts/LoginedUserContext";
import Loading from "../../components/molecules/Loading/Loading";

function FollowingPage() {
  // useParams()를 사용하여 url에 있는 파라미터(accountname)를 받아옵니다.
  let { accountname } = useParams();
  const [followings, setFollowings] = useState(null);
  const { user } = useContext(LoginedUserContext);
  const [isChangeFollow, setChangeFollow] = useState("");

  useEffect(() => {
    getFollowings(user.token, accountname, setFollowings);
  }, [accountname, isChangeFollow]);

  return (
    <section>
      <h2 className="a11y-hidden">팔로잉 페이지</h2>
      <HeaderForm
        backButton={true}
        title="Followings"
        titleSize="large"
        menuButton={false}
      />
      <div className="wrapper-contents">
        {followings ? (
          <FollowList
            list={followings}
            setFollowings={setFollowings}
            setChangeFollow={setChangeFollow}
          />
        ) : (
          <Loading />
        )}
      </div>
      <BottomNavigateBar />
    </section>
  );
}

export default FollowingPage;
