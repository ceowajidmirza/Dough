import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import "./App.css";

import { ThemeProvider, createMuiTheme } from "@material-ui/core/styles";
import { pink } from "@material-ui/core/colors";

import AppSidebar from "./components/AppSidebar";
import Product from "./components/Product/Product";
import Stock from "./components/Stock/Stock";

const theme = createMuiTheme({
  palette: {
    primary: {
      main: "#FF394F",
    },
    pink: {
      main: pink[500],
    },
  },
});

const App = () => {
  return (
    <Router>
      <ThemeProvider theme={theme}>
        <AppSidebar />
        <Switch>
          <Route path="/stock" component={Stock} exact />
        </Switch>
      </ThemeProvider>
    </Router>
  );
};

export default App;
