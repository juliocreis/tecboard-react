import CssBaseline from "@mui/material/CssBaseline";
import { Board } from "./pages/Board";
import { createTheme, ThemeProvider } from '@mui/material/styles';

const theme = createTheme({
  palette: {
    text: {
      primary: "#FFFFFF",
    },
  },
});

function App() {
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline>
        <Board />
      </CssBaseline>
    </ThemeProvider>
  );
}

export default App;
