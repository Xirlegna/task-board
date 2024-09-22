import { useEffect, useState } from 'react';
import { ipcRenderer } from 'electron';

import TaskItem from '../components/TaskItem/TaskItem';
import { EventName } from '../../common/enum/EventName';
import { omit } from '../../common/helpers/omit';
import { TaskModel } from '../../common/interface/TaskModel';

const TaskPage: React.FC = () => {
  const { loading, tasks } = useTask();

  return (
    <>
      <h4 className="title">Tasks</h4>
      {loading ? (
        <div>loading...</div>
      ) : (
        <div className="d-flex flex-direction-column gap-3">
          {tasks.map((task) => (
            <TaskItem key={task.id} {...omit(task, 'id', 'created_at')} />
          ))}
        </div>
      )}
    </>
  );
};

const useTask = () => {
  const [loading, setLoading] = useState(false);
  const [tasks, setTasks] = useState<TaskModel[]>([]);

  useEffect(() => {
    setLoading(true);
    ipcRenderer.send(EventName.TASK_LIST);
    ipcRenderer.on(EventName.TASK_LIST, (_, arg) => {
      setTasks(arg);
      setLoading(false);
    });

    return () => {
      ipcRenderer.removeAllListeners();
    };
  }, []);

  return { loading, tasks };
};

export default TaskPage;
