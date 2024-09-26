import { TaskModel } from '../../common/interface/TaskModel';
import Database from '../util/database';

export const listTasks = async () => {
  const data = Database.getInstance().getData();
  return data?.tasks ? data.tasks : [];
};

export const deleteTask = async (id: string) => {
  const db = Database.getInstance();
  const data = db.getData();
  const tasks = data.tasks;

  const index = tasks.findIndex((task) => task.id === id);

  data.tasks = [
    ...tasks.slice(0, index),
    ...tasks.slice(index + 1, tasks.length),
  ];

  db.setData(data);

  return data.tasks;
};

export const createTask = async (task: Omit<TaskModel, 'id'>) => {
  const db = Database.getInstance();
  const data = db.getData();

  if (!data.hasOwnProperty('tasks')) {
    data.tasks = [];
  }

  data.tasks.push({ ...Database.DecoratorTrait(), ...task });

  db.setData(data);

  return data.tasks;
};
