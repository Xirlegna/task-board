import { useEffect, useState } from 'react';
import { ipcRenderer } from 'electron';
import { v4 as uuidv4 } from 'uuid';

import { EventName } from '../../common/enum/EventName';
import { GoalModel } from '../../common/interface/GoalModel';

const GoalPage: React.FC = () => {
  const { loading, goals, createGoal, deleteGoal } = useGoal();

  return (
    <>
      <h4 className="title">Goals</h4>
      {loading ? (
        <div>loading...</div>
      ) : (
        <>
          <button type="button" onClick={createGoal}>
            add
          </button>
          <ul>
            {goals.map((goal) => (
              <li key={goal.id}>
                <span>
                  {goal.name} - {goal.id}
                </span>
                <button type="button" onClick={() => deleteGoal(goal.id)}>
                  delete
                </button>
              </li>
            ))}
          </ul>
        </>
      )}
    </>
  );
};

const useGoal = () => {
  const [loading, setLoading] = useState(false);
  const [goals, setGoals] = useState<GoalModel[]>([]);

  useEffect(() => {
    setLoading(true);
    ipcRenderer.send(EventName.GOAL_LIST);
    ipcRenderer.on(EventName.GOAL_LIST, (_, arg) => {
      setGoals(arg);
      setLoading(false);
    });

    return () => {
      ipcRenderer.removeAllListeners();
    };
  }, []);

  const createGoal = () => {
    setLoading(true);
    ipcRenderer.send(EventName.GOAL_ADD, { id: uuidv4(), name: 'Test goal' });
  };

  const deleteGoal = (id: string) => {
    setLoading(true);
    ipcRenderer.send(EventName.GOAL_DELETE, id);
  };

  return { loading, goals, createGoal, deleteGoal };
};

export default GoalPage;
