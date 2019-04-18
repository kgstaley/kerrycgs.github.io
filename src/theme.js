import { createMuiTheme } from "@material-ui/core/styles";

const theme = createMuiTheme({
  palette: {
    primary: {
      main: "#1e1e1e"
    },
    secondary: {
      main: "#DDDDDD",
      contrastText: "#DDDDDD"
    }
  },
  typography: {
    useNextVariants: true
  }
});

export default theme;
