import { useLocation } from 'react-router-dom';

import BoardIcon from '../Icons/BoardIcon';
import GoalIcon from '../Icons/GoalIcon';
import TaskIcon from '../Icons/TaskIcon';
import NavItem from '../NavItem/NavItem';

import './aside.scss';

enum LinkTo {
  BOARD = '/',
  TASK = '/task',
  GOAL = '/goal',
}

const Aside: React.FC = () => {
  const location = useLocation();

  return (
    <aside className="aside">
      <nav className="navbar">
        <ul className="navbar-nav">
          <li>
            <NavItem
              to={LinkTo.BOARD}
              active={location.pathname === LinkTo.BOARD}
            >
              <BoardIcon />
              <span>Board</span>
            </NavItem>
          </li>
          <li>
            <NavItem
              to={LinkTo.TASK}
              active={location.pathname === LinkTo.TASK}
            >
              <TaskIcon />
              <span>Tasks</span>
            </NavItem>
          </li>
          <li>
            <NavItem
              to={LinkTo.GOAL}
              active={location.pathname === LinkTo.GOAL}
            >
              <GoalIcon />
              <span>Goals</span>
            </NavItem>
          </li>
        </ul>
      </nav>
    </aside>
  );
};

export default Aside;
