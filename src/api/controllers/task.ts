import { TaskModel } from '../../common/interface/TaskModel';
import Database from '../util/database';

export const listTasks = async ()  => {
  const data = Database.getInstance().getData();
  return data?.tasks ? data.tasks : [];
};

export const createTask = async (task: TaskModel) => {};

export const deleteTask = async (id: string) => {};