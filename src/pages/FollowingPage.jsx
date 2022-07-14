import React from "react";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import HeaderForm from "../components/modules/HeaderForm/HeaderForm";
import FollowList from "../components/organisms/FollowList/FollowList";

function FollowingPage() {
  // useParams()를 사용하여 url에 있는 파라미터(accountname)를 받아옵니다.
  let { accountname } = useParams();
  const [followings, setFollowings] = useState([]);

  useEffect(() => {
    const baseURL = "https://mandarin.api.weniv.co.kr";
    const token = window.localStorage.getItem("token");

    async function getFollowings() {
      try {
        const data = await fetch(
          baseURL + `/profile/${accountname}/following`,
          {
            method: "GET",
            headers: {
              Authorization: `Bearer ${token}`,
              "Content-type": "application/json",
            },
          }
        );
        const result = await data.json();
        setFollowings(result);
      } catch (error) {
        console.log(error.message);
      }
    }
    getFollowings();
  }, [accountname]);

  return (
    <>
      <h1 className="a11y-hidden">팔로잉 페이지</h1>
      <HeaderForm
        backButton={true}
        title="Followings"
        titleSize="large"
        menuButton={false}
      />
      {followings && <FollowList list={followings} />}
    </>
  );
}

export default FollowingPage;
