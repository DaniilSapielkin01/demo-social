import React from "react";
import stl from "./ProfileInfo.module.css";
import { Preloader } from "../../common/Preloader/Preloader";

export const ProfileInfo = (props) => {
  //Работает за счет асинхронна
  if (!props.profile) {
    return <Preloader />;
  }
  return (
    <div>
      <div>
        <img
          className={stl.content_img}
          src={
            props.profile.photos === undefined
              ? `https://i.pinimg.com/736x/0c/a9/e2/0ca9e28dcb12dc698cfd2beda6d6fa64--youtube.jpg`
              : ""
          }
          alt="image"
        />
      </div>
      <div className={stl.descriptionBlock}>
        <h3>{props.profile.name}</h3>
        <h4>
          <span>Phone: </span>
          {props.profile.phone}
        </h4>
      </div>
    </div>
  );
};
