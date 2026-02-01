import BoardIcon from './BoardIcon';
import GoalIcon from './GoalIcon';
import TaskIcon from './TaskIcon';

export default {
  title: 'Icons/Gallery',
};

const iconStyle = {
  '--icon-primary': '#353535',
  '--icon-accent': '#18fbff',
} as React.CSSProperties;

export const IconGallery = () => (
  <div
    style={{
      display: 'grid',
      gridTemplateColumns: 'repeat(6, 1fr)',
      gap: 24,
    }}
  >
    <span style={iconStyle}>
      <BoardIcon />
    </span>
    <span style={iconStyle}>
      <GoalIcon />
    </span>
    <span style={iconStyle}>
      <TaskIcon />
    </span>
  </div>
);
