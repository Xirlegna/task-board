import './backdrop.scss';

type BackdropProps = {
  children: React.ReactNode;
};

const Backdrop: React.FC<BackdropProps> = ({ children }) => {
  return <div className="backdrop">{children}</div>;
};

export default Backdrop;
