import Aside from './components/Aside/Aside';
import Header from './components/Header/Header';

import Routes from './components/AppRoutes/AppRoutes';

const App: React.FC = () => {
  return (
    <>
      <Header />
      <Aside />
      <main>
        <Routes />
      </main>
    </>
  );
};

export default App;
