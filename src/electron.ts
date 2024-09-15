import { app, BrowserWindow, ipcMain } from 'electron';
import path from 'path';

import { addGoal, listGoals } from './api/controllers/goal';
import { EventName } from './common/enum/EventName';
import { GoalModel } from './common/interface/goal';

let mainWindow: BrowserWindow;

app.on('ready', () => {
  mainWindow = new BrowserWindow({
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

ipcMain.on(EventName.APP_MINIMIZE, () => {
  BrowserWindow.getFocusedWindow().minimize();
});

ipcMain.on(EventName.APP_RESIZE, () => {
  const window = BrowserWindow.getFocusedWindow();

  window.isMaximized() ? window.unmaximize() : window.maximize();
});

ipcMain.on(EventName.APP_CLOSE, () => app.quit());

ipcMain.on(EventName.GOAL_LIST, (event) => {
  listGoals().then((res) => event.sender.send(EventName.GOAL_LIST, res));
});

ipcMain.on(EventName.GOAL_ADD, (event, arg: GoalModel) => {
  addGoal(arg).then((res) => event.sender.send(EventName.GOAL_LIST, res));
});
