import { useEffect, useState } from 'react';
import classNames from 'classnames';

import CreateTaskModal from '../Modals/CreateTaskModal/CreateTaskModal';
import { ModalName, useModalContext } from '../../store/modal-context';

import './main.scss';

type MainProps = {
  children: React.ReactNode;
};

const Main: React.FC<MainProps> = ({ children }) => {
  const { name } = useModalContext();

  const [modal, setModal] = useState<React.ReactNode | null>(null);

  useEffect(() => {
    switch (name) {
      case ModalName.CREATE_TASK:
        setModal(<CreateTaskModal />);
        break;
      default:
        setModal(null);
        break;
    }
  }, [name]);

  return (
    <main
      className={classNames({
        main: true,
        'overflow-hidden': modal !== null,
      })}
    >
      {children}
      {modal}
    </main>
  );
};

export default Main;
