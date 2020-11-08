import React from "react";
import { LoginReduxForm } from "./LoginForm";
import { connect } from "react-redux";
import { login } from "../../redux/auth-reducer";
import { Redirect } from "react-router-dom";

export const Login = ({ login, isAuth, captchaUrl }) => {
  const onSubmit = (formData) => {
    login(formData.email, formData.password, formData.rememberMe);
  };

  if (isAuth) {
    return <Redirect to="/profile" />;
  }
  //в пропсы передаем фунцию  onSudmit которая находится в HOC reduxForm
  return (
    <div>
      <h2>Login</h2>
      <LoginReduxForm onSubmit={onSubmit} captchaUrl={captchaUrl} />
    </div>
  );
};

const mapStateToProps = (state) => ({
  isAuth: state.auth.isAuth,
  captchaUrl: state.auth.captchaUrl,
});
const mapDispatchToProps = {
  login,
};

export default connect(mapStateToProps, mapDispatchToProps)(Login);
