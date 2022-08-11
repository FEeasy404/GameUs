import React, { useContext, useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import ImageBox from "../../atoms/ImageBox/ImageBox";
import UserNameIntroduce from "../../atoms/UserNameIntroduce/UserNameIntroduce";
import Button from "../../atoms/Button/Button";
import styles from "./userFollow.module.css";
import { LoginedUserContext } from "../../../contexts/LoginedUserContext";
import { followUser } from "../../../common/FollowUser";
import { unfollowUser } from "../../../common/UnfollowUser";
import { getFollowers } from "../../../pages/FollowerPage/FollowerPageAPI";
import { getFollowings } from "../../../pages/FollowingPage/FollowingPageAPI";

function UserFollow({
  userProfile,
  setFollowers,
  setFollowings,
  setChangeFollow,
}) {
  const { user } = useContext(LoginedUserContext);
  const [isFollowing, setFollowing] = useState(userProfile.isfollow);
  let { accountname } = useParams();

  useEffect(() => {
    setFollowing(userProfile.isfollow);
  }, [userProfile.isfollow]);

  return (
    <div className={styles["wrapper-follow"]}>
      <ImageBox
        src={userProfile.image}
        type="circle"
        size="medium"
        alt="프로필 이미지"
      />
      <Link
        to={`/profile/${userProfile.accountname}`}
        className={styles["wrapper-link"]}
      >
        <UserNameIntroduce
          userName={userProfile.username}
          userIntroduce={userProfile.intro}
        />
      </Link>
      {user.accountname !== userProfile.accountname && (
        <Button
          size="small"
          label={isFollowing ? "취소" : "팔로우"}
          active={true}
          primary={isFollowing ? false : true}
          onClick={() => {
            if (isFollowing) {
              unfollowUser(user.token, userProfile.accountname, setChangeFollow);
            } else {
              followUser(user.token, userProfile.accountname, setChangeFollow);
            }
            if (setFollowers) {
              getFollowers(user.token, accountname, setFollowers);
            } else {
              getFollowings(user.token, accountname, setFollowings);
            }
          }}
        />
      )}
    </div>
  );
}

export default UserFollow;
