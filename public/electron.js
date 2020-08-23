const electron = require("electron");
const app = electron.app;
const BrowserWindow = electron.BrowserWindow;
const path = require("path");
const isDev = require("electron-is-dev");
let mainWindow;

function createWindow() {
  mainWindow = new BrowserWindow({
    width: 1200,
    height: 800,
    icon: "",
    webPreferences: {
      nodeIntegration: true,
    },
  });

  mainWindow.loadURL(
    isDev
      ? "http://localhost:3000"
      : `file://${path.join(__dirname, "../build/index.html")}`
  );
  mainWindow.maximize();
  mainWindow.webContents.openDevTools();
  mainWindow.on("closed", () => (mainWindow = null));
}

app.on("ready", () => {
  createWindow();

  mainWindow.webContents.session.on(
    "will-download",
    (event, item, webContents) => {
      // Set the save path, making Electron not to prompt a save dialog.
      // item.setSavePath("/tmp/save.pdf");
      console.log("Downloading");
      webContents.send("start-download", {
        total: item.getTotalBytes(),
        name: item.getFilename(),
      });
      // item.cancel()
      item.on("updated", (event, state) => {
        if (state === "interrupted") {
          console.log("Download is interrupted but can be resumed");
        } else if (state === "progressing") {
          if (item.isPaused()) {
            console.log("Download is paused");
          } else {
            console.log(`Received bytes: ${item.getReceivedBytes()}`);
            webContents.send("total-downloaded", item.getReceivedBytes());
          }
        }
      });
      item.once("done", (event, state) => {
        webContents.send("completed", state);

        if (state === "completed") {
          console.log("Download successfully");
        } else {
          console.log(`Download failed: ${state}`);
        }
      });
    }
  );
});
app.on("window-all-closed", () => {
  if (process.platform !== "darwin") {
    app.quit();
  }
});

app.on("activate", () => {
  if (mainWindow === null) {
    createWindow();
  }
});
