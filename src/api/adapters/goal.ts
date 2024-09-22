import { ipcMain } from 'electron';

import { createGoal, deleteGoal, listGoals } from '../controllers/goal';
import { EventName } from '../../common/enum/EventName';
import { GoalModel } from '../../common/interface/GoalModel';

ipcMain.on(EventName.GOAL_LIST, (event) => {
  listGoals().then((res) => event.sender.send(EventName.GOAL_LIST, res));
});

ipcMain.on(EventName.GOAL_ADD, (event, goal: GoalModel) => {
  createGoal(goal).then((res) => event.sender.send(EventName.GOAL_LIST, res));
});

ipcMain.on(EventName.GOAL_DELETE, (event, id: string) => {
  deleteGoal(id).then((res) => event.sender.send(EventName.GOAL_LIST, res));
});
