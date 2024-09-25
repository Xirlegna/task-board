import { type ComponentPropsWithoutRef } from 'react';

import './text-input.scss';

type TextInputProps = {
  id: string;
  label: string;
} & ComponentPropsWithoutRef<'input'>;

const TextInput: React.FC<TextInputProps> = (props) => {
  const { id, label, ...inputProps } = props;

  return (
    <div className="text-input">
      <label htmlFor={id}>{label}</label>
      <input id={id} name={id} {...inputProps} />
    </div>
  );
};

export default TextInput;
