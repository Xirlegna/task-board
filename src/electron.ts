import { app, BrowserWindow, ipcMain } from 'electron';
import path from 'path';

import { EventName } from './enum/EventName';

app.on('ready', () => {
  const mainWindow = new BrowserWindow({
    height: 600,
    width: 800,
    frame: false,
    icon: path.join(__dirname, '../public/icon.ico'),
    minimizable: true,
    webPreferences: {
      nodeIntegration: true,
      contextIsolation: false,
      devTools: true,
    },
  });

  mainWindow.loadFile('index.html');
});

ipcMain.on(EventName.APP_MINIMIZE, () => {
  BrowserWindow.getFocusedWindow().minimize();
});

ipcMain.on(EventName.APP_RESIZE, () => {
  const window = BrowserWindow.getFocusedWindow();

  window.isMaximized() ? window.unmaximize() : window.maximize();
});

ipcMain.on(EventName.APP_CLOSE, () => app.quit());
