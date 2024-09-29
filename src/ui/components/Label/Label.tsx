import { type ComponentPropsWithoutRef } from 'react';

type LabelProps = {
  htmlFor: string;
  children: React.ReactNode;
} & ComponentPropsWithoutRef<'label'>;

const Label: React.FC<LabelProps> = (props) => {
  const { children, ...labelProps } = props;

  return <label {...labelProps}>{children}</label>;
};

export default Label;
