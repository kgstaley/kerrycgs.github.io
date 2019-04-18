import { createMuiTheme } from "@material-ui/core/styles";

const theme = createMuiTheme({
  palette: {
    primary: {
      main: "#1e1e1e",
      dark: "#EEEEEE"
    },
    secondary: {
      main: "#DDDDDD",
      contrastText: "#DDDDDD"
    }
  },
  typography: {
    useNextVariants: true
  },
  overrides: {
    MuiIconButton: {
      colorPrimary: "#EEEEEE",
      colorInherit: "#EEEEEE",
      colorSecondary: "#EEEEEE"
    }
  }
});

export default theme;
