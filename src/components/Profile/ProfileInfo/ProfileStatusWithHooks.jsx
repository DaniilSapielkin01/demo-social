import React, { useState, useEffect } from "react";

export const ProfileStatusWithHooks = (props) => {
  let [editMode, setEditMode] = useState(false);
  let [status, setStatus] = userState(props.status);

  useEffect(() => {
    setStatus(props.status);
  }, [props.status]);

  activetaMode = () => {
    setEditMode(true);
  };
  deactiveEditMode = () => {
    setEditMode(false);
    // для обновления в инпуте
    props.updateStatus(status);
  };
  onStatusChange = (e) => {
    setStatus(e.currentTarget.value);
  };

  return (
    <>
      {!editMode && (
        <div>
          <span onDoubleClick={activetaMode}>
            {props.status || "No status"}
          </span>
        </div>
      )}
      {editMode && (
        <div>
          <input
            autoFocus={true}
            onBlur={deactiveEditMode}
            onChange={onStatusChange}
            value={status}
          />
        </div>
      )}
    </>
  );
};
