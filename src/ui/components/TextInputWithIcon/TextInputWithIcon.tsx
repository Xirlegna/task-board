import { type ComponentPropsWithoutRef } from 'react';

import './text-input-with-icon.scss';

type TextInputWithIconProps = {
  id: string;
  children: React.ReactNode;
} & ComponentPropsWithoutRef<'input'>;

const TextInputWithIcon: React.FC<TextInputWithIconProps> = (props) => {
  const { id, children, ...inputProps } = props;

  return (
    <div className="text-input-with-icon">
      {children}
      <input id={id} name={id} {...inputProps} />
    </div>
  );
};

export default TextInputWithIcon;
