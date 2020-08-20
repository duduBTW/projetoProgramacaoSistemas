import React from "react";
import { Provider } from "react-redux";
import { createMuiTheme, ThemeProvider } from "@material-ui/core/styles";
import { HashRouter, Route, Switch, Redirect } from "react-router-dom";
import { ptBR } from "@material-ui/core/locale";

import store from "./store";

const DefaultMaterialize = React.lazy(() =>
  import("./containers/Layout/DefaultLayout")
);

const theme = createMuiTheme(
  {
    palette: {
      primary: {
        main: "#174B7A",
      },
      secondary: {
        main: "#103454",
      },
      success: {
        main: "#4DBD74",
      },
      error: {
        main: "#cc1010",
      },
    },
    status: {
      danger: "orange",
    },
  },
  ptBR
);

function App() {
  return (
    <Provider store={store}>
      <HashRouter>
        <ThemeProvider theme={theme}>
          <React.Suspense fallback={<div>Carregando...</div>}>
            <Switch>
              <Route exact path="/login" render={(props) => <div>Pog</div>} />
              <Route
                path="/"
                name="Home"
                render={(props) => <DefaultMaterialize {...props} />}
              />
            </Switch>
          </React.Suspense>
        </ThemeProvider>
      </HashRouter>
    </Provider>
  );
}

export default App;
