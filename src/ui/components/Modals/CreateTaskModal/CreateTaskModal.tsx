import { FormEvent, useState } from 'react';
import classNames from 'classnames';

import Backdrop from '../../Backdrop/Backdrop';
import Button from '../../Button/Button';
import FormGroup from '../../FormGroup/FormGroup';
import Label from '../../Label/Label';
import CloseIcon from '../../Icons/CloseIcon';
import DateIcon from '../../Icons/DateIcon';
import TextInput from '../../TextInput/TextInput';
import TextInputWithIcon from '../../TextInputWithIcon/TextInputWithIcon';
import { useTaskEvent } from '../../../hooks/useTaskEvent';
import { useModalContext } from '../../../store/modal-context';
import { dateToTimestamp } from '../../../../common/helpers/date-converter';

import './side-form.scss';

type FormState = {
  taskName: string;
  expiredAt: string;
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
      expired_at: dateToTimestamp(data.expiredAt),
      goal: 'Ultimate AWS Certified Cloud Practitioner CLF-C02',
      length: 33,
      platform: 'Udemy',
      skill: 'AWS',
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
          <FormGroup>
            <Label htmlFor="taskName">Name</Label>
            <TextInput id="taskName" placeholder="Task name" />
          </FormGroup>
          <FormGroup>
            <Label htmlFor="expiredAt">Date</Label>
            <TextInputWithIcon id="expiredAt" placeholder="YYYY-MM-DD">
              <DateIcon />
            </TextInputWithIcon>
          </FormGroup>
          <Button type="submit">save</Button>
        </form>
      </div>
    </Backdrop>
  );
};

export default CreateTaskModal;
