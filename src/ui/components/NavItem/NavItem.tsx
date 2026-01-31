import { clsx } from 'clsx';
import { Link } from 'react-router-dom';

import './nav-item.scss';

type NavItemProps = {
  children: React.ReactNode;
  to: string;
  active: boolean;
};

const NavItem: React.FC<NavItemProps> = ({ children, to, active }) => {
  return (
    <Link className={clsx({ 'nav-item': true, active })} to={to}>
      {children}
    </Link>
  );
};

export default NavItem;
