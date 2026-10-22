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
  styled,
} from "@mui/material";

import { eventCategories } from "../mocks/eventMock";

const Chip = styled(Box)(({ theme }) => ({
  // API do Styled do MUI para criar um componente personalizado
  display: "inline-flex",
  backgroundColor: theme.pallete.textSecondary,
  padding: "8px",
  borderRadius: "4px",
  marginBottom: "8px",
  textTransform: "uppercase",
}));

export function Board() {
  return (
    <Box sx={{ backgroundColor: "#06151A", minHeight: "100vh" }}>
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
        <Box sx={{ position: "relative" }}>
          <img src={Banner} alt="Banner" />
          <Typography
            variant="h1"
            component="h1"
            sx={{ color: "#FFF", position: "absolute", bottom: "80px", left: "50%", transform: "translateX(-50%)", textAlign: "center" }}
          >
            Seu hub de eventos de tecnologia
          </Typography>
        </Box>
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
            <Button sx={{ alignSelf: "center" }}>Criar evento</Button>
          </Stack>
        </Box>
      </Box>

      {/* Eventos */}
      <Box
        sx={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          backgroundColor: "#06151A",
          px: 2,
          py: 8,
        }}
      >
        {eventCategories.map((category) => (
          <Box
            key={category.name}
            sx={{
              display: "flex",
              flexDirection: "column",
              width: "100%",
              maxWidth: "1024px",
              mb: 8,
            }}
          >
            <Typography
              variant="h5"
              component="h2"
              sx={{ color: "#FFF", mb: 3, fontSize: "20px" }}
            >
              {category.name}
            </Typography>

            <Grid container spacing={2} sx={{ width: "100%" }}>
              {category.events.map((event) => (
                <Grid size={{ xs: 12, sm: 6, md: 4 }} key={event.id}>
                  <Card sx={{ width: "282px" }}>
                    <CardMedia
                      component="img"
                      height="237px"
                      image={event.image}
                      alt={event.name}
                    ></CardMedia>
                    <CardContent
                      sx={{
                        flexGrow: 1,
                        py: 3,
                        px: 2,
                        backgroundColor: "#212121",
                      }}
                    >
                      <Chip>
                        <Typography variant="caption">{event.theme}</Typography>
                      </Chip>
                      <Typography>{event.date}</Typography>
                      <Typography>{event.name}</Typography>
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
