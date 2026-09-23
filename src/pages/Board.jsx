import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import AppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import Logo from "../assets/Logo.png"
import Banner from "../assets/Banner.png"
import { eventCategories } from "../mocks/eventMock";

export function Board() {
  return (
    <Box sx={{height: '100vh'}}>
      <AppBar position="static">
        <Toolbar>
          <img
            src={Logo}
            alt="Logo"
            style={{ height: "34px" }}
          />
        </Toolbar>
      </AppBar>

      <Box sx={{display: 'flex', flexDirection: 'column', alignItems: 'center', textAlign: 'center'}}>
        <Box>
          <img
            src={Banner}
            alt="Banner"
          />
        </Box>
        <Typography variant="h3" component="h1">Seu hub de eventos de tecnologia</Typography>
      </Box>

      <Box
        sx={{
          backgroundColor: "#FFF",
          display: "flex",
          flexDirection: "column",
        }}
      >
        <Typography sx={{ color: "#000000" }} variant="h2">
          Formulário
        </Typography>
        <TextField />
        <TextField />
        <TextField />
        <Button variant="contained">Botão</Button>
      </Box>
    </Box>
  );
}
