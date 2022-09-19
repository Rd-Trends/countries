import React from 'react';
import {BsMoon, BsSun} from 'react-icons/bs';
import PropTypes from 'prop-types';

import S from './Navbar.module.css';

const Navbar = ({switchTheme, theme}) => {
  return (
    <nav className={S.navbar}>
      <span className={S.logo}>Where in the world?</span>
      <button onClick={switchTheme} className={S.theme_toggler}>
        {theme === 'light' ? <BsMoon /> : <BsSun />}
        <span>{theme === 'light' ? 'Dark mode' : 'light mode'}</span>
      </button>
    </nav>
  );
};

Navbar.propTypes = {
  theme: PropTypes.string.isRequired,
  switchTheme: PropTypes.func.isRequired,
};

export default Navbar;
