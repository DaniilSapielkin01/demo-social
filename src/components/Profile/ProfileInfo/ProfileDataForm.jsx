import React from "react";
import { reduxForm } from "redux-form";
import {
  CreateField,
  Input,
  Textarea,
} from "../../common/FormsControls/FormsControls";

const ProfileDataForm = ({ handleSubmit, profile, error }) => {
  return (
    <form onSubmit={handleSubmit}>
      <div>
        <button>Save</button>
      </div>
      {error ? <div>{error}</div> : ""}
      <div>
        <b>Full name</b> : {CreateField("Full Name", "fullName", [], Input)}
      </div>
      <div>
        <b>Looking for a job</b> :{" "}
        {CreateField("", "lookingForAJob", [], Input, { type: "checkbox" })}
      </div>
      <div>
        <b> My professional skills</b>:
        {CreateField(
          "My professional skills",
          "lookingForAJobDescriptions",
          [],
          Textarea
        )}
      </div>
      <div>
        <b>About me</b>:{CreateField("About me", "aboutMe", [], Textarea)}
      </div>

      <div>
        <b>Contacts</b>:
        {Object.keys(profile.contacts).map((key) => (
          <div key={key}>
            <b>
              {key}:{CreateField(key, "contacts." + key, [], Textarea)}{" "}
            </b>
          </div>
        ))}
      </div>
    </form>
  );
};

export const ProfileData = ({ profile, isOwner, goToEditMode }) => {
  return (
    <div>
      {isOwner && (
        <div>
          <button onClick={goToEditMode}>Edit</button>
        </div>
      )}
      <div>
        <b> My professional skills</b>:{profile.lookingForAJobDescriptions}
      </div>
      <div>
        <b>About me</b>:{profile.aboutMe}
      </div>
      <div>
        <b>Looking for a job</b> : {profile.lookingForAJob ? "Yes" : "No"}
      </div>
      <div>
        <b>Contacts</b>:
        {Object.keys(profile.contacts).map((key) => (
          <Contacts
            key={key}
            contactTitle={key}
            contactValue={profile.contacts[key]}
          />
        ))}
      </div>
    </div>
  );
};

const Contacts = ({ contactTitle, contactValue }) => {
  return (
    <div>
      <b>{contactTitle}</b>:{contactValue}
    </div>
  );
};

export const ProfileDataFormReduxForm = reduxForm({ form: "edit-Profile" })(
  ProfileDataForm
);
