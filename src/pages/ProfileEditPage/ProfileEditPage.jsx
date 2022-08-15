import React, { useContext, useEffect, useRef, useState } from "react";
import { useNavigate } from "react-router-dom";
import HeaderForm from "../../components/molecules/HeaderForm/HeaderForm";
import Loading from "../../components/molecules/Loading/Loading";
import ProfileForm from "../../components/molecules/ProfileForm/ProfileForm";
import { LoginedUserContext } from "../../contexts/LoginedUserContext";
import { handleImageSize } from "../../common/ImageResize";
import { uploadImage } from "../../common/ImageUpload";
import { editProfile } from "./ProfileEditPageAPI";
import { getProfile } from "../ProfilePage/ProfilePageAPI";

function ProfileEditPage() {
  const [value, setValue] = useState({
    username: "",
    accountname: "",
    image: "",
    intro: "",
  });

  // const [image, setImage] = useState("");

  const [error, setError] = useState({
    username: "",
    accountname: "",
  });

  // 계정 ID가 이미 가입되어 있으면 false, 가입 가능하면 true입니다.
  const [isAccountnameValid, setAccountnameValid] = useState(true);

  // 포커스를 잃었는지(blur) 체크하기 위해 사용했습니다.
  const usernameInput = useRef();
  const accountnameInput = useRef();

  const { user, setUser } = useContext(LoginedUserContext);
  const navigate = useNavigate();

  useEffect(() => {
    async function setProfile() {
      const result = await getProfile(user.token, user.accountname);
      setValue({
        ...value,
        image: result.profile.image,
        username: result.profile.username,
        accountname: result.profile.accountname,
        intro: result.profile.intro,
      });
      // setImage(result.profile.image);
    }
    setProfile();
  }, []);

  async function handleEdit() {
    usernameInput.current.blur();
    accountnameInput.current.blur();
    // 에러가 없고 계정 ID가 유효하다면 context에 이미지, 사용자 이름, 계정 ID, 소개를 저장합니다.
    if (!error.username && !error.accountname && isAccountnameValid) {
      const data = value;
      if (value.image.src) {
        const resizedImage = await handleImageSize(data.image.data);
        URL.revokeObjectURL(data.image.src);
        const imageUrl = await uploadImage(resizedImage);
        data.image = imageUrl;
      }
      // 이미지를 선택하지 않았다면 기본 이미지로 설정됩니다.
      else {
        data.image = value.image;
      }

      const reqData = { user: { ...data } };
      const updatedData = await editProfile(user.token, reqData);
      window.sessionStorage.setItem(
        "accountname",
        updatedData.user.accountname
      );
      window.sessionStorage.setItem("image", updatedData.user.image);
      const updatedUser = {
        ...user,
        accountname: updatedData.user.accountname,
        image: updatedData.user.image,
      };
      setUser(updatedUser);
      navigate(`/profile/${value.accountname}`);
    }
  }

  return value.image ? (
    <section className="wrapper-padding">
      <h2 className="a11y-hidden">프로필 수정 페이지</h2>
      <HeaderForm
        backButton={true}
        button="저장"
        active={
          value.username &&
          value.accountname &&
          !error.username &&
          !error.accountname &&
          true
        }
        onClick={handleEdit}
      />
      <div className="wrapper-contents">
        <ProfileForm
          setAccountnameValid={setAccountnameValid}
          value={value}
          setValue={setValue}
          error={error}
          setError={setError}
          usernameInput={usernameInput}
          accountnameInput={accountnameInput}
          onKeyDown={(event) => {
            if (event.key === "Enter") {
              handleEdit();
            }
          }}
        />
      </div>
    </section>
  ) : (
    <Loading />
  );
}

export default ProfileEditPage;
