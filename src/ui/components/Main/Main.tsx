import './main.scss';

type MainProps = {
  children: React.ReactNode;
};

const Main: React.FC<MainProps> = ({ children }) => {
  return <main className="main">{children}</main>;
};

export default Main;
