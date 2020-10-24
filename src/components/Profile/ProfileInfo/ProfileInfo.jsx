import React from "react";
import stl from "./ProfileInfo.module.css";
import { Preloader } from "../../common/Preloader/Preloader";
import { ProfileStatus } from "./ProfileStatus";

export const ProfileInfo = (props) => {
  //Работает за счет асинхронна)
  if (!props.profile) {
    return <Preloader />;
  }
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
      </div>
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
    </div>
  );
};
