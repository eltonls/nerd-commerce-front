import { useState } from "react";
import Logo from "../Logo";

const FormLogin = () => {
  const { email, setEmail } = useState("");
  const { password, setPassword } = useState("");

  const emailChangeHandler = (evt) => {
    setEmail(evt.target.value);
  }

  const passswordChangeHandler = (evt) => {
    setPassword(evt.target.value);
  }

  return (
    <form className="form form--login">
      <h2 className="heading-secondary">Bem-vindo de volta!</h2>
      <h3 className="heading-tertiary">Por favor, entre com seu usuário e senha</h3>

      <label for="email" className="form__label">Email</label>
      <input type="email" className="form__input" name="email" value={email} onChange={emailChangeHandler} placeholder="digite seu email!" />

      <label for="password" className="form__label">Senha</label>
      <input type="password" className="form__input" name="password" value={password} onChange={passswordChangeHandler} placeholder="digite sua senha!" />

      <button type="submit" className="btn btn--main">Login</button>
    </form>
  )
}

export default FormLogin;
