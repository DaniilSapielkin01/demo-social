import React, { useState } from "react";
import stl from "./ProfileInfo.module.css";
import { Preloader } from "../../common/Preloader/Preloader";
import { ProfileStatus } from "./ProfileStatus";
// import { savePhoto } from "../../../redux/profile-reducer";
// import { Input } from "../../common/FormsControls/FormsControls";
import { ProfileData, ProfileDataFormReduxForm } from "./ProfileDataForm";

export const ProfileInfo = (props) => {
  const [editMode, setEditMode] = useState(false);

  //Работает за счет асинхронна)
  if (!props.profile) {
    return <Preloader />;
  }
  const onMainPhotoSelected = (e) => {
    if (e.target.files.length) {
      props.savePhoto(e.target.files[0]);
    }
  };
  const goToEditMode = () => {
    setEditMode(true);
  };
  const onSubmit = (formData) => {
    props.saveProfile(formData).then(() => {
      setEditMode(false);
    });
  };

  return (
    <div>
      <div>
        <img
          className={stl.content_img}
          src={
            props.profile.photos.large ||
            `https://www.interfax.ru/ftproot/textphotos/2016/09/05/panda700.jpg`
          }
          alt="image"
        />
        {props.isOwner && (
          <input type={"file"} onChange={onMainPhotoSelected} />
        )}
        <div className={stl.descriptionBlock}>
          <h3>{props.profile.name}</h3>
          <h3>
            Статус:
            <ProfileStatus
              status={props.status}
              updateStatus={props.updateStatus}
            />
          </h3>
        </div>
        {editMode ? (
          <ProfileDataFormReduxForm
            onSubmit={onSubmit}
            initialValues={props.profile}
            profile={props.profile}
          />
        ) : (
          <ProfileData
            profile={props.profile}
            isOwner={props.isOwner}
            goToEditMode={goToEditMode}
          />
        )}
      </div>
    </div>
  );
};
