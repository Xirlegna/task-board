import { GoalModel } from '../../common/interface/goal';
import Database from '../util/database';

export const listGoals = async () => {
  const data = Database.getInstance().getData();
  return data?.goals ? data.goals : [];
};

export const addGoal = async (goal: GoalModel) => {
  const db = Database.getInstance();
  const data = db.getData();

  if (!data.hasOwnProperty('goals')) {
    data.goals = [];
  }

  data.goals.push(goal);

  db.setData(data);

  return data.goals;
};
