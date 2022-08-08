import React, { useContext, useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import HeaderForm from "../../components/molecules/HeaderForm/HeaderForm";
import BottomNavigateBar from "../../components/molecules/BottomNavigateBar/BottomNavigateBar";
import FollowList from "../../components/organisms/FollowList/FollowList";
import { getFollowers } from "./FollowerPageAPI";
import { LoginedUserContext } from "../../contexts/LoginedUserContext";
import Loading from "../../components/molecules/Loading/Loading";

function FollowerPage() {
  // useParams()를 사용하여 url에 있는 파라미터(accountname)를 받아옵니다.
  let { accountname } = useParams();
  const [followers, setFollowers] = useState(null);
  const { user } = useContext(LoginedUserContext);

  useEffect(() => {
    getFollowers(user.token, accountname, setFollowers);
  }, [accountname]);

  return (
    <section>
      <h2 className="a11y-hidden">팔로워 페이지</h2>
      <HeaderForm
        backButton={true}
        title="Followers"
        titleSize="large"
        menuButton={false}
      />
      <div className="wrapper-contents">
        {followers ? (
          <FollowList list={followers} setFollowers={setFollowers} />
        ) : (
          <Loading />
        )}
      </div>
      <BottomNavigateBar />
    </section>
  );
}

export default FollowerPage;
