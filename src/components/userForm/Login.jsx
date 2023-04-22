import React from "react";
import Container from "@mui/material/Container";
import Typography from "@mui/material/Typography";
import InputAdornment from "@mui/material/InputAdornment";
import TextField from "@mui/material/TextField";
import FormControl from "@mui/material/FormControl";
import Button from "@mui/material/Button";

const Login = () => {
  return (
    <React.Fragment>
      <Typography align="center" variant="h5" component="h2" color="text.secondary" gutterBottom>
        Login
      </Typography>
      <Container
        sx={{ display: "flex", flexDirection: "row", flexWrap: "wrap", alignItems: "start" }}
        disableGutters
      >
        <FormControl variant="standard" fullWidth>
          <TextField
            required
            label="Email"
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
        link="/checkout"
        sx={{ fontWeight: 700 }}
      >
        Login
      </Button>
    </React.Fragment>
  );
};

export default Login;
