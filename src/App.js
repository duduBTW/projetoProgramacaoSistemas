import React from "react";
import { Provider } from "react-redux";
import { createMuiTheme, ThemeProvider } from "@material-ui/core/styles";
import { HashRouter, Route, Switch, Redirect } from "react-router-dom";
import { ptBR } from "@material-ui/core/locale";

import store from "./store";
const Login = React.lazy(() => import("./pages/Login"));

const DefaultMaterialize = React.lazy(() =>
  import("./containers/Layout/DefaultLayout")
);

// const { ipcRenderer } = window.require("electron");
// const { ipcRenderer, remote } = require("electron");

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
      background: {
        default: "#e8eaf5",
      },
    },
    status: {
      danger: "orange",
    },
  },
  ptBR
);

function App() {
  const [total, setTotal] = React.useState(0);
  const [logged, setLogged] = React.useState(false);
  const [totalBaixado, setTotalBaixado] = React.useState(0);
  const [downloadOn, setDownloadOn] = React.useState(false);
  // React.useEffect(() => {
  //   ipcRenderer.on("start-download", (event, message) => {
  //     setTotal(message.total);
  //     setDownloadOn(true);
  //   });

  //   ipcRenderer.on("total-downloaded", (event, message) => {
  //     setTotalBaixado(message);

  //     // event.sender.send("cancelDownload")
  //   });

  //   ipcRenderer.on("completed", (event, message) => {
  //     // setTotalBaixado(message);
  //     setDownloadOn(false);
  //   });
  // }, []);
  return (
    <Provider store={store}>
      <HashRouter>
        <ThemeProvider theme={theme}>
          <React.Suspense fallback={<div>Carregando...</div>}>
            <Switch>
              {!logged ? (
                <>
                  <Route
                    exact
                    path="/login"
                    render={(props) => (
                      <Login setLogged={setLogged} {...props} />
                    )}
                  />
                  <Redirect to="/login" />
                </>
              ) : (
                <Route
                  path="/"
                  name="Home"
                  render={(props) => (
                    <DefaultMaterialize
                      total={total}
                      totalBaixado={totalBaixado}
                      {...props}
                      downloadinOn={downloadOn}
                    />
                  )}
                />
              )}
            </Switch>
          </React.Suspense>
        </ThemeProvider>
      </HashRouter>
    </Provider>
  );
}

export default App;
