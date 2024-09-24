import { app, BrowserWindow } from 'electron';
import path from 'path';

import './api/adapters';

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

  mainWindow.loadFile(path.join(__dirname, 'index.html'));
});
