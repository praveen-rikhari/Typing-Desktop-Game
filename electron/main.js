const { app, BrowserWindow } = require("electron");
const path = require("path");

function createWindow() {
  const win = new BrowserWindow({
    width: 800,
    height: 600,
    webPreferences: {
      contextIsolation: true, // security: isolate context
    },
  });

  // 👉 LOAD REACT BUILD (for production)
  win.loadFile(path.join(__dirname, "../client/dist/index.html"));

  // 👉 For development mode:
  // win.loadURL("http://localhost:5173");
}

// Electron app events
app.whenReady().then(() => {
  createWindow();

  app.on("activate", () => {
    // macOS: recreate window if none open
    if (BrowserWindow.getAllWindows().length === 0) createWindow();
  });
});

app.on("window-all-closed", () => {
  // Quit app (except on macOS)
  if (process.platform !== "darwin") app.quit();
});
