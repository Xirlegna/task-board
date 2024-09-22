import { ipcMain } from 'electron';

import { listTasks } from '../controllers/task';
import { EventName } from '../../common/enum/EventName';

ipcMain.on(EventName.TASK_LIST, (event) => {
  listTasks().then((res) => event.sender.send(EventName.TASK_LIST, res));
});
