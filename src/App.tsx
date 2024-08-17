import Aside from './components/Aside/Aside';
import Header from './components/Header/Header';
import Main from './components/Main/Main';

import Routes from './components/AppRoutes/AppRoutes';

const App: React.FC = () => {
  return (
    <>
      <Header />
      <Aside />
      <Main>
        <Routes />
      </Main>
    </>
  );
};

export default App;
