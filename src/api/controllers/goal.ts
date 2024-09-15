import { GoalModel } from '../../common/interface/GoalModel';
import Database from '../util/database';

export const listGoals = async () => {
  const data = Database.getInstance().getData();
  return data?.goals ? data.goals : [];
};

export const createGoal = async (goal: GoalModel) => {
  const db = Database.getInstance();
  const data = db.getData();

  if (!data.hasOwnProperty('goals')) {
    data.goals = [];
  }

  data.goals.push(goal);

  db.setData(data);

  return data.goals;
};

export const deleteGoal = async (id: string) => {
  const db = Database.getInstance();
  const data = db.getData();
  const goals = data.goals;

  const index = goals.findIndex((goal) => goal.id === id);

  data.goals = [
    ...goals.slice(0, index),
    ...goals.slice(index + 1, goals.length),
  ];

  db.setData(data);

  return data.goals;
};
