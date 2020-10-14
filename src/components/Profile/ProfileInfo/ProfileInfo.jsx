import React from "react";
import stl from "./ProfileInfo.module.css";

export const ProfileInfo = () => {
  return (
    <div>
      <div>
        <img
          className={stl.content_img}
          src="https://is5-ssl.mzstatic.com/image/thumb/Purple124/v4/5c/f2/72/5cf27278-05ee-5433-5110-6bf79b05adc9/AppIcon-0-0-1x_U007emarketing-0-0-0-7-0-0-sRGB-0-0-0-GLES2_U002c0-512MB-85-220-0-0.png/1200x630wa.png"
          alt="img"
        />
      </div>
      <div className={stl.descriptionBlock}>ava + description</div>
    </div>
  );
};
