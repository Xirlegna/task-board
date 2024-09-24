import { type ComponentPropsWithoutRef } from 'react';

import './button.scss';

type ButtonProps = {} & ComponentPropsWithoutRef<'button'>;

const Button: React.FC<ButtonProps> = (props) => {
  const { children, ...buttonProps } = props;

  return (
    <button className="button" {...buttonProps}>
      {children}
    </button>
  );
};

export default Button;
