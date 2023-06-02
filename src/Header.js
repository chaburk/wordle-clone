import React from 'react'
import './Header.css'
import HelpOutlineIcon from '@mui/icons-material/HelpOutline';
import MenuIcon from '@mui/icons-material/Menu';
import LeaderboardOutlinedIcon from '@mui/icons-material/LeaderboardOutlined';
import SettingsIcon from '@mui/icons-material/Settings';

function Header() {
  return (
    <header className='header'>

        <MenuIcon fontSize='medium' className='header--icon'/>
        <h2 className='header--title'>Wordle</h2>
        <div className='header--help header--icon'>
            <HelpOutlineIcon fontSize='large'/>
            <LeaderboardOutlinedIcon fontSize='large'/>
            <SettingsIcon fontSize='large'/>
        </div>
        
    </header>
  )
}

export default Header