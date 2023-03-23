import React, { useState } from "react";
import Box from "@mui/material/Box";
import Input from "@mui/material/Input";
import InputLabel from "@mui/material/InputLabel";
import Divider from "@mui/material/Divider";
import Select from "@mui/material/Select";
import MenuItem from "@mui/material/MenuItem";
import Container from "@mui/material/Container";
import Typography from "@mui/material/Typography";
import InputAdornment from "@mui/material/InputAdornment";
import TextField from "@mui/material/TextField";
import FormControl from "@mui/material/FormControl";
import Button from "@mui/material/Button";
import { selectCartProducts } from "../../features/CartSlice";
import { useSelector } from "react-redux";

const ClientForm = (props) => {
  const [sexo, setSexo] = useState("");
  const products = useSelector(selectCartProducts);

  const handleSexoChange = (evt) => {
    setSexo(evt.target.value);
  };

  let total = 0;

  products.forEach((product) => (total = total + product.price * product.units));

  return (
    <React.Fragment>
      <Typography align="left" variant="h5" component="h2" color="text.secondary" gutterBottom>
        Dados do Cliente
      </Typography>
      <Divider />
      <Container
        sx={{ display: "flex", flexDirection: "row", flexWrap: "wrap", alignItems: "start" }}
        disableGutters
      >
        <FormControl variant="standard" fullWidth>
          <TextField
            label="Nome"
            id="nome"
            sx={{ my: 1 }}
            inputProps={{ startAdornment: <InputAdornment position="start">Nome</InputAdornment> }}
          />
        </FormControl>
        <FormControl variant="standard" fullWidth>
          <TextField
            label="Email"
            id="email"
            sx={{ my: 1 }}
            inputProps={{ startAdornment: <InputAdornment position="start">Email</InputAdornment> }}
          />
        </FormControl>
        <FormControl fullWidth>
          <InputLabel id="genero-select-label">Sexo</InputLabel>
          <Select
            labelId="sexo-select"
            id="sexo-select"
            value={sexo}
            label="Sexo"
            onChange={handleSexoChange}
          >
            <MenuItem value={"Masculino"}>Masculino</MenuItem>
            <MenuItem value={"Feminino"}>Feminino</MenuItem>
            <MenuItem value={"Não-Binário"}>Não-Binário</MenuItem>
          </Select>
        </FormControl>
      </Container>
      <Typography variant="h6" align="right" sx={{ fontWeight: 700, my: 2 }}>
        Total: R$ {total.toFixed(2)}
      </Typography>
      <Button
        color="warning"
        size="large"
        fullWidth={true}
        variant="contained"
        link="/checkout"
        sx={{ fontWeight: 700 }}
      >
        Finalizar Compra
      </Button>
    </React.Fragment>
  );
};

export default ClientForm;
