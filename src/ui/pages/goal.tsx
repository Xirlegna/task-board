import { useEffect, useState } from 'react';
import { ipcRenderer } from 'electron';
import { v4 as uuidv4 } from 'uuid';

import { EventName } from '../../common/enum/EventName';
import { GoalModel } from '../../common/interface/goal';

const GoalPage: React.FC = () => {
  const { loading, goals, addGoal } = useGoal();

  return (
    <>
      <h4 className="title">Goals</h4>
      {loading ? (
        <div>loading...</div>
      ) : (
        <>
          <button type="button" onClick={addGoal}>
            add
          </button>
          <ul>
            {goals.map((goal) => (
              <li key={goal.id}>{goal.name}</li>
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

  const addGoal = () => {
    setLoading(true);
    ipcRenderer.send(EventName.GOAL_ADD, { id: uuidv4(), name: 'Test goal' });
  };

  return { loading, goals, addGoal };
};

export default GoalPage;
