import React from "react";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import HeaderForm from "../components/modules/HeaderForm/HeaderForm";
import BottomNavigateBar from "../components/modules/BottomNavigateBar/BottomNavigateBar";
import FollowList from "../components/organisms/FollowList/FollowList";

function FollowerPage() {
  // useParams()를 사용하여 url에 있는 파라미터(accountname)를 받아옵니다.
  let { accountname } = useParams();
  const [followers, setFollowers] = useState([]);

  useEffect(() => {
    const baseURL = "https://mandarin.api.weniv.co.kr";
    const token = window.localStorage.getItem("token");

    async function getFollowers() {
      try {
        const data = await fetch(
          baseURL + `/profile/${accountname}/follower?limit=Infinity`,
          {
            method: "GET",
            headers: {
              Authorization: `Bearer ${token}`,
              "Content-type": "application/json",
            },
          }
        );
        const result = await data.json();
        setFollowers(result);
      } catch (error) {
        console.log(error.message);
      }
    }
    getFollowers();
  }, [accountname]);

  return (
    <section>
      <h1 className="a11y-hidden">팔로워 페이지</h1>
      <HeaderForm
        backButton={true}
        title="Followers"
        titleSize="large"
        menuButton={false}
      />
      {followers && <FollowList list={followers} />}
      <BottomNavigateBar />
    </section>
  );
}

export default FollowerPage;
