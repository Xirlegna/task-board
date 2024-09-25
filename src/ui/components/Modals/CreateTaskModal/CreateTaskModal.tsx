import { FormEvent, useState } from 'react';
import classNames from 'classnames';

import Backdrop from '../../Backdrop/Backdrop';
import CloseIcon from '../../Icons/CloseIcon';
import TextInput from '../../TextInput/TextInput';
import { useModalContext } from '../../../store/modal-context';

import { useTaskEvent } from '../../../hooks/useTaskEvent';

import './side-form.scss';

type FormState = {
  taskName: string;
};

const CreateTaskModal: React.FC = () => {
  const { closeModal } = useModalContext();
  const [close, setClose] = useState(false);

  const { addTask } = useTaskEvent();

  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    const formData = new FormData(event.currentTarget);
    const data = Object.fromEntries(formData) as FormState;
    addTask({
      name: data.taskName,
    });

    closeModal();
  };

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
        <form onSubmit={handleSubmit}>
          <div>
            <TextInput id="taskName" label="Name" placeholder="Task name" />
          </div>
          <button type="submit">Save</button>
        </form>
      </div>
    </Backdrop>
  );
};

export default CreateTaskModal;
