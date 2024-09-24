import { app, BrowserWindow, ipcMain } from 'electron';

import { EventName } from '../../common/enum/EventName';

ipcMain.on(EventName.APP_MINIMIZE, () => {
  BrowserWindow.getFocusedWindow().minimize();
});

ipcMain.on(EventName.APP_RESIZE, () => {
  const window = BrowserWindow.getFocusedWindow();

  window.isMaximized() ? window.unmaximize() : window.maximize();
});

ipcMain.on(EventName.APP_CLOSE, () => app.quit());
