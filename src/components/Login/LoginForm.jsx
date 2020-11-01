import React from "react";
import { Field, reduxForm } from "redux-form";
import { CreateField, Input } from "../common/FormsControls/FormsControls";
import { required, maxLengthCreator } from "../../utils/validators/validators";
import stl from "./Login.module.css";

const LoginForm = ({ handleSubmit, error }) => {
  return (
    <>
      <form onSubmit={handleSubmit}>
        {CreateField("Email", "email", [required], Input)}
        {CreateField("Password", "password", [required], Input, {
          type: "password",
        })}
        {CreateField(
          null,
          "rememberMe",
          [required],
          Input,
          { type: "checkbox" },
          "Remember me"
        )}
        <div>
          {error && <div className={stl.formSummaryError}>{error}</div>}
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
