import { createTheme } from "@mui/material/styles";

const typographyOptions = {
  // Para todos os textos, não só para o Typography
  fontFamily: "Orbitron, Arial, sans-serif",
  h1: {
    fontSize: "49px",
    fontWeight: 600,
    lineHeight: "60px",
  },
};

const palette = {
  textSecondary: "#4A4949",
};

const components = {
  MuiTypography: {
    // Só para o componente Typography, não para todos os textos
    styleOverrides: {
      root: {
        color: "#FFF",
      },
    },
  },

  MuiButton: {
    styleOverrides: {
      root: {
        backgroundColor: "#17D9B1",
        color: "#212121",
        padding: "8px 16px",
        textTransform: "none",
        fontWeight: 600,
        fontFamily: "Inter, sans-serif",
        borderRadius: "8px",
        fontSize: "16px",
      },
    },
  },
};

const theme = createTheme({
  typography: typographyOptions,
  palette,
  components,
});

const formTheme = createTheme({
  typography: {
    ...typographyOptions,
    fontFamily: "Work Sans, Arial, sans-serif",
  },

  components: {
    ...components,

    MuiInputLabel: {
      styleOverrides: {
        root: {
          color: "#FFF",
        },
      },
    },

    MuiOutlinedInput: {
      styleOverrides: {
        root: {
          color: "#4A4949",
          "& .MuiOutlinedInput-notchedOutline": {
            borderColor: "#4A4949", // cor padrão (repouso)
          },
        },
      },
    },
  },
});

export default theme;
export { formTheme };
