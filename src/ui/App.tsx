import Routes from './components/AppRoutes/AppRoutes';
import Aside from './components/Aside/Aside';
import Header from './components/Header/Header';
import Main from './components/Main/Main';
import ModalContextProvider from './store/modal-context';

const App: React.FC = () => {
  return (
    <ModalContextProvider>
      <Header />
      <Aside />
      <Main>
        <Routes />
      </Main>
    </ModalContextProvider>
  );
};

export default App;
