import ClockIcon from '../Icons/ClockIcon';
import DateIcon from '../Icons/DateIcon';
import PencilIcon from '../Icons/PencilIcon';
import { TaskModel } from '../../../common/interface/TaskModel';

import './task-item.scss';

type TaskItemProps = Omit<TaskModel, 'id' | 'created_at'>;

const TaskItem: React.FC<TaskItemProps> = (props) => {
  const { name, goal, length, expired_at, platform, skill } = props;

  return (
    <div className="task-item">
      <div className="task-item__title">
        <p className="task-item__title--main">{platform}</p>
        <p className="task-item__title--sub">{skill}</p>
      </div>

      <div className="d-flex flex-direction-column gap-1">
        <p className="task-item__goal">{goal}</p>
        <p className="task-item__task">{name}</p>
        <div className="d-flex gap-3">
          <div className="task-item__tile">
            <ClockIcon />
            <span>{length} min</span>
          </div>
          <div className="task-item__tile">
            <DateIcon />
            <span>{expired_at}</span>
          </div>
        </div>
      </div>

      <div className="d-flex align-items-center gap-1">
        <button className="task-item__action-btn" type="button">
          <PencilIcon />
        </button>
      </div>
    </div>
  );
};

export default TaskItem;
