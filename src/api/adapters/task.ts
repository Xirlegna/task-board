import { ipcMain } from 'electron';

import { createTask, deleteTask, listTasks } from '../controllers/task';
import { EventName } from '../../common/enum/EventName';
import { TaskModel } from '../../common/interface/TaskModel';

ipcMain.on(EventName.TASK_LIST, (event) => {
  listTasks().then((res) => event.sender.send(EventName.TASK_LIST, res));
});

ipcMain.on(EventName.TASK_ADD, (event, task: Omit<TaskModel, 'id'>) => {
  createTask(task).then((res) => event.sender.send(EventName.TASK_LIST, res));
});

ipcMain.on(EventName.TASK_DELETE, (event, id: string) => {
  deleteTask(id).then((res) => event.sender.send(EventName.TASK_LIST, res));
});
