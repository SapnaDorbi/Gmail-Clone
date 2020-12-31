import React from 'react';
import './Header.css';
import MenuIcon from '@material-ui/icons/Menu';
import { IconButton } from '@material-ui/core';

function Header () {
    return (
        <div className="header">
            <div className="header__left">
                <IconButton>
                    <MenuIcon />
                </IconButton>
            </div>
            <div className="header__middle">

            </div>
            <div className="header__right">

            </div>
        </div>
    );
}

export default Header;