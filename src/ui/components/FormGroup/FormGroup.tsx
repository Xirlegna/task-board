import './form-group.scss';

const FormGroup: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  return <div className="form-group">{children}</div>;
};

export default FormGroup;
