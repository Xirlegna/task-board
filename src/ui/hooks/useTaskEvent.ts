import { useEffect, useState } from 'react';
import { ipcRenderer } from 'electron';

import { EventName } from '../../common/enum/EventName';
import { TaskModel } from '../../common/interface/TaskModel';

const addTask = (task: Omit<TaskModel, 'id' | 'created_at'>) => {
  return ipcRenderer.send(EventName.TASK_ADD, task);
};

const deleteTask = (id: string) => {
  ipcRenderer.send(EventName.TASK_DELETE, id);
};

export const useTaskEvent = () => ({ addTask, deleteTask });

export const useFetchTasks = () => {
  const [loading, setLoading] = useState(false);
  const [tasks, setTasks] = useState<TaskModel[]>([]);

  useEffect(() => {
    setLoading(true);

    ipcRenderer.send(EventName.TASK_LIST);
    ipcRenderer.on(EventName.TASK_LIST, (_, arg: TaskModel[]) => {
      setLoading(false);
      setTasks(arg);
    });

    return () => {
      ipcRenderer.removeAllListeners();
    };
  }, []);

  return { loading, tasks };
};
