import React, { useState } from "react";
import Container from "@mui/material/Container";
import Typography from "@mui/material/Typography";
import InputAdornment from "@mui/material/InputAdornment";
import TextField from "@mui/material/TextField";
import FormControl from "@mui/material/FormControl";
import Button from "@mui/material/Button";

const Register = () => {
  const [email, setEmail] = useState("");
  const [name, setName] = useState("");
  const [password, setPassword] = useState("");

  const handleEmailChange = (evt) => {
    setEmail(evt.target.value);
  };

  const handleNameChange = (evt) => {
    setName(evt.target.value);
  };

  const handlePasswordChange = (evt) => {
    setPassword(evt.target.value);
  };

  const registerLinkAPI = "http://localhost:3000/user/signup";

  const handleRegister = async (evt) => {
    evt.preventDefault();

    const request = { name, password, email };

    const res = await fetch(registerLinkAPI, {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify(request)
    });

    if (res.ok) {
      console.log("User registered");
      // TODO: Redirect user to login maybe????
    } else {
      console.error("Error while registering user!", await res.json());
    }
  };

  return (
    <React.Fragment>
      <Typography align="center" variant="h5" component="h2" color="text.secondary" gutterBottom>
        Registrar-se
      </Typography>
      <Container
        sx={{ display: "flex", flexDirection: "row", flexWrap: "wrap", alignItems: "start" }}
        disableGutters
      >
        <FormControl variant="standard" fullWidth>
          <TextField
            required
            label="Nome"
            value={name}
            onChange={handleNameChange}
            type="text"
            id="nome"
            sx={{ my: 1 }}
            inputProps={{ startAdornment: <InputAdornment position="start">Nome</InputAdornment> }}
          />
        </FormControl>
        <FormControl variant="standard" fullWidth>
          <TextField
            required
            label="Email"
            value={email}
            onChange={handleEmailChange}
            type="email"
            id="email"
            sx={{ my: 1 }}
            inputProps={{ startAdornment: <InputAdornment position="start">Email</InputAdornment> }}
          />
        </FormControl>
        <FormControl variant="standard" fullWidth>
          <TextField
            required
            label="Senha"
            value={password}
            onChange={handlePasswordChange}
            id="senha"
            type="password"
            sx={{ my: 1 }}
            inputProps={{ startAdornment: <InputAdornment position="start">Senha</InputAdornment> }}
          />
        </FormControl>
      </Container>
      <Button
        color="success"
        size="large"
        fullWidth={true}
        variant="contained"
        sx={{ fontWeight: 700 }}
        onClick={handleRegister}
      >
        Registrar
      </Button>
    </React.Fragment>
  );
};

export default Register;
