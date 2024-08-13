import { useState } from 'react';

import BrandLogo from '../Icons/BrandLogo';
import CloseIcon from '../Icons/CloseIcon';
import MinMaxIcon from '../Icons/MinMaxIcon';
import ResizeMaxIcon from '../Icons/ResizeMaxIcon';
import ResizeMinIcon from '../Icons/ResizeMinIcon';

import { useAppEvent } from '../../hooks/useAppEvent';

import './header.scss';

const Header: React.FC = () => {
  const window = useAppEvent();

  const [maximized, setMaximized] = useState(false);

  return (
    <div className="header">
      <div className="header__brand-wrapper">
        <BrandLogo />
      </div>

      <div className="header__actions">
        <button className="header__action-btn" onClick={window.minimize}>
          <MinMaxIcon />
        </button>
        <button
          className="header__action-btn"
          onClick={() => {
            window.resize();
            setMaximized((act) => !act);
          }}
        >
          {maximized ? <ResizeMinIcon /> : <ResizeMaxIcon />}
        </button>
        <button
          className="header__action-btn header__action-btn--red"
          onClick={window.close}
        >
          <CloseIcon />
        </button>
      </div>
    </div>
  );
};

export default Header;
