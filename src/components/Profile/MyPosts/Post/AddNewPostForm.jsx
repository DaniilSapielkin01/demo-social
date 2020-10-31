import React from "react";
import {
  maxLengthCreator,
  required,
} from "../../../../utils/validators/validators";
import { Textarea } from "../../../common/FormsControls/FormsControls";
import { Field, reduxForm } from "redux-form";

const maxlength10 = maxLengthCreator(10);

const AddNewPostForm = (props) => {

  

  return (
    <form onSubmit={props.handleSubmit}>
      <div>
        <Field
          name="newPostText"
          component={Textarea}
          validate={[required, maxlength10]}
          placeholder="Post messages"
        />
      </div>
      <div>
        <button> Add post +</button>
      </div>
    </form>
  );
};

export default reduxForm({
  form: "ProfileAddNewPostForm",
})(AddNewPostForm);
