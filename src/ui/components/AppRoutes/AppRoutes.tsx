import { Routes, Route } from 'react-router-dom';

import BoardPage from '../../pages/board';
import GoalPage from '../../pages/goal';

const AppRoutes: React.FC = () => {
  return (
    <Routes>
      <Route path="/task" element={<h4>Tasks</h4>} />
      <Route path="/goal" element={<GoalPage />} />
      <Route path="/" element={<BoardPage />} />
      <Route path="*" element={<h4>404</h4>} />
    </Routes>
  );
};

export default AppRoutes;
