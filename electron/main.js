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

  // Load React app (development server)
  win.loadURL("http://localhost:5173");
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
