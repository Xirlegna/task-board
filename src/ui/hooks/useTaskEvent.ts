import { ipcRenderer } from 'electron';

import { EventName } from '../../common/enum/EventName';
import { TaskModel } from '../../common/interface/TaskModel';

type Task = {
  name: string;
};

const addTask = (
  task: Omit<
    TaskModel,
    'id' | 'goal' | 'length' | 'expired_at' | 'platform' | 'skill'
  >
) => {
  return ipcRenderer.send(EventName.TASK_ADD, task);
};

const deleteTask = (id: string) => {
  ipcRenderer.send(EventName.TASK_DELETE, id);
};

const fetchTaskList = (
  callback: (tasks: TaskModel[], loading: boolean) => void
) => {
  ipcRenderer.send(EventName.TASK_LIST);
  ipcRenderer.on(EventName.TASK_LIST, (_, arg: TaskModel[]) =>
    callback(arg, false)
  );
};

export const useTaskEvent = () => ({
  addTask,
  deleteTask,
  fetchTaskList,
});
