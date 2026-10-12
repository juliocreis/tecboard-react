import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import AppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import Logo from "../assets/Logo.png";
import Banner from "../assets/Banner.png";
import {
  Card,
  CardContent,
  CardMedia,
  FormControl,
  Grid,
  InputLabel,
  OutlinedInput,
  Stack,
} from "@mui/material";

import { eventCategories } from "../mocks/eventMock";

export function Board() {
  return (
    <Box sx={{ backgroundColor: "#06151A", height: "100vh" }}>
      {/* Navbar */}
      <AppBar sx={{ position: "static" }}>
        <Toolbar sx={{ justifyContent: "center" }}>
          <img src={Logo} alt="Logo do Tecboard" />
        </Toolbar>
      </AppBar>

      {/* Banner */}
      <Box
        sx={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          flexDirection: "column",
          mb: "64px",
        }}
      >
        <Box>
          <img src={Banner} alt="Banner" />
        </Box>
        <Typography variant="h3" component="h1" sx={{ color: "#FFF" }}>
          Seu hub de eventos de tecnologia
        </Typography>
      </Box>

      {/* Formulário */}
      <Box
        sx={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        <Box
          sx={{
            display: "flex",
            flexDirection: "column",
            width: "100%",
            maxWidth: "384px",
            py: "32px",
            px: "28px",
            backgroundColor: "#CCC",
          }}
        >
          <Typography>Preencha para criar um evento:</Typography>
          <Stack spacing={2}>
            <FormControl>
              <InputLabel
                shrink
                htmlFor="name"
                sx={{ transform: "none", mb: 1, position: "static" }}
              >
                Qual o nome do evento?
              </InputLabel>
              <OutlinedInput
                id="name"
                placeholder="Summer dev hits"
              ></OutlinedInput>
            </FormControl>

            <FormControl>
              <InputLabel
                shrink
                htmlFor="name"
                sx={{ transform: "none", mb: 1, position: "static" }}
              >
                Qual o nome do evento?
              </InputLabel>
              <OutlinedInput id="name" placeholder="XX/XX/XXXX"></OutlinedInput>
            </FormControl>

            <FormControl>
              <InputLabel
                shrink
                htmlFor="name"
                sx={{ transform: "none", mb: 1, position: "static" }}
              >
                Qual o nome do evento?
              </InputLabel>
              <OutlinedInput
                id="name"
                placeholder="Selecione uma opção"
              ></OutlinedInput>
            </FormControl>
          </Stack>
        </Box>
      </Box>

      <Box>
        {eventCategories.map((category) => (
          <Box key={category.name}>
            <Typography>{category.name}</Typography>

            <Grid
              container
              spacing={2}
              sx={{ width: "100%", maxWidth: "1024px" }}
            >
              {category.events.map((event) => (
                <Grid item xs={12} sm={6} md={4} key={event.id}>
                  <Card>
                    <CardMedia
                      component="img"
                      height="140px"
                      image={event.image}
                      alt={event.name}
                    ></CardMedia>
                    <CardContent sx={{ flexGrow: 1 }}>
                      <Typography>{event.title}</Typography>
                      <Typography>{event.description}</Typography>
                    </CardContent>
                  </Card>
                </Grid>
              ))}
            </Grid>
          </Box>
        ))}
      </Box>
    </Box>
  );
}
