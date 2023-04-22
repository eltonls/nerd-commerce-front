import React, { useState } from "react";
import Header from "../components/header/Header";
import Login from "../components/userForm/Login";
import Register from "../components/userForm/Register";
import Button from "@mui/material/Button";

const UserPage = () => {
  const [isLogin, setIsLogin] = useState(true);

  const handleModeChange = () => {
    setIsLogin((prev) => !prev);
  };

  const loginForm = (
    <section>
      <Header />
      <Login />
      <Button variant="text" onClick={handleModeChange} size="small">
        Não tem conta? Clique aqui!
      </Button>
    </section>
  );

  const registerForm = (
    <section>
      <Header />
      <Register />
      <Button variant="text" onClick={handleModeChange} size="small">
        Já é usuário? Faça Login
      </Button>
    </section>
  );

  return <React.Fragment>{isLogin ? loginForm : registerForm}</React.Fragment>;
};

export default UserPage;
