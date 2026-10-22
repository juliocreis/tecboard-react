import { createTheme } from "@mui/material/styles";

const theme = createTheme({
    typography: {
        fontFamily: "Orbitron, Arial, sans-serif",
        h1: {
            color: "#FFFFFF",
            fontSize: "49px",
            fontWeight: 600,
            lineHeight: "60px",
        }
    },
  components: {
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
  },

  pallete: {
    textSecondary: "#4A4949",
  }
});

export default theme;
