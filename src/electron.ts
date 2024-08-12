import { app, BrowserWindow } from 'electron';

app.on('ready', () => {
  const mainWindow = new BrowserWindow({
    height: 600,
    width: 800,
    frame: false,
  });

  mainWindow.loadFile('index.html');
});
