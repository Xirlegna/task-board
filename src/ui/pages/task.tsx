import { useEffect, useState } from 'react';
import { ipcRenderer } from 'electron';

import PlusIcon from '../components/Icons/PlusIcon';
import TaskItem from '../components/TaskItem/TaskItem';
import { ModalName, useModalContext } from '../store/modal-context';
import { EventName } from '../../common/enum/EventName';
import { omit } from '../../common/helpers/omit';
import { TaskModel } from '../../common/interface/TaskModel';

import Button from '../components/Button/Button';

const TaskPage: React.FC = () => {
  const { loading, tasks } = useTaskCRUD();

  const { openModal } = useModalContext();

  return (
    <>
      <div className="d-flex align-items-center justify-content-space-between mb-4">
        <h4 className="title">Tasks</h4>
        <Button type="button" onClick={() => openModal(ModalName.CREATE_TASK)}>
          <PlusIcon />
          <span>Add Task</span>
        </Button>
      </div>

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

const useTaskCRUD = () => {
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
