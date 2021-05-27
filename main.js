const { app, BrowserWindow } = require("electron");
const path = require("path");

function boot() {
    const window_main = new BrowserWindow({
        width: 800,
        height: 600,
        frame: false,
        webPreferences: {
          nodeIntegration: true,
          contextIsolation: false,
          enableRemoteModule: true
        }
    })
    window_main.openDevTools()
    
    window_main.loadFile("./index.html");
    window_main.on("closed", () => {
        window_main = null;
    });
}

app.on("ready", boot);