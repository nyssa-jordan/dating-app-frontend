import React from 'react'
import './Header.css'
import PersonIcon from '@mui/icons-material/Person'
import IconButton from '@mui/material/IconButton'
import ForumIcon from '@mui/icons-material/Forum'
const Header = () => {
    return (
        <div className="header">
            <IconButton size="large">
                <PersonIcon fontSize="large" className="header__icon" />
            </IconButton>
            <img className="header__logo" src="logo192.png" alt="header" />
            <IconButton size="large">
                <ForumIcon fontSize="large" className="header__icon" />
            </IconButton>
        </div>
    );
}
export default Header