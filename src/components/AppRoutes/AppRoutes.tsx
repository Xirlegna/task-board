import { Routes, Route } from 'react-router-dom';

const AppRoutes: React.FC = () => {
  return (
    <Routes>
      <Route path="/task" element={<h4>Tasks</h4>} />
      <Route path="/goal" element={<h4>Goals</h4>} />
      <Route path="/" element={<h4>Board</h4>} />
      <Route path="*" element={<h4>404</h4>} />
    </Routes>
  );
};

export default AppRoutes;
