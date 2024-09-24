import { useState } from 'react';
import classNames from 'classnames';

import Backdrop from '../../Backdrop/Backdrop';
import CloseIcon from '../../Icons/CloseIcon';
import { useModalContext } from '../../../store/modal-context';

import './side-form.scss';

const CreateTaskModal: React.FC = () => {
  const { closeModal } = useModalContext();
  const [close, setClose] = useState(false);

  return (
    <Backdrop>
      <div
        className={classNames({
          'side-form': true,
          'side-form--float-out': close,
        })}
      >
        <header>
          <p>New Task</p>
          <button
            type="button"
            className="side-form__close-btn"
            onClick={() => {
              setClose(true);
              setTimeout(() => closeModal(), 500);
            }}
          >
            <CloseIcon />
          </button>
        </header>
      </div>
    </Backdrop>
  );
};

export default CreateTaskModal;
