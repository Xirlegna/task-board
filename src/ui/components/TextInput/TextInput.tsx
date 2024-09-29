import { type ComponentPropsWithoutRef } from 'react';

import './text-input.scss';

type TextInputProps = {
  id: string;
} & ComponentPropsWithoutRef<'input'>;

const TextInput: React.FC<TextInputProps> = (props) => {
  const { id, ...inputProps } = props;

  return <input className="text-input" id={id} name={id} {...inputProps} />;
};

export default TextInput;
