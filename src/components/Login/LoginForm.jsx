import React from "react";
import { Field, reduxForm } from "redux-form";
import { Input } from "../common/FormsControls/FormsControls";
import { required, maxLengthCreator } from "../../utils/validators/validators";
import stl from "./Login.module.css";

const LoginForm = (props) => {
  return (
    <>
      <form onSubmit={props.handleSubmit}>
        <div>
          <Field
            validate={[required]}
            placeholder={"Email"}
            component={Input}
            name={"email"}
          />
        </div>
        <div>
          <Field
            validate={[required]}
            type={"password"}
            placeholder={"Password"}
            component={Input}
            name={"password"}
          />
        </div>
        <div>
          <Field
            validate={[required]}
            type="checkbox"
            component={Input}
            name={"rememberMe"}
          />
          Remember me
        </div>
        <div>
          {props.error && (
            <div className={stl.formSummaryError}>{props.error}</div>
          )}
          <button>Login</button>
        </div>
      </form>
    </>
  );
};

export const LoginReduxForm = reduxForm({
  //дали уникальное имя
  form: "login",
})(LoginForm);

//Если есть вопрос по (reduxForm, handleSubmit, onSubmit), номер #75 35:30
