import React from 'react';
import './Header.css'
import MenuIcon from '@mui/icons-material/Menu';
import VideoCallIcon from '@mui/icons-material/VideoCall';
import SearchIcon from '@mui/icons-material/Search';
import NotificationsIcon from '@mui/icons-material/Notifications';
import AppsIcon from '@mui/icons-material/Apps';
import { Avatar } from '@mui/material';
function Header() {
  return (
  <div className="header">   
    

<div className="header_left">
    <MenuIcon/>
    <img
      className="header_logo"
      src="https://upload.wikimedia.org/wikipedia/commons/thumb/e/e1/Logo_of_YouTube_%282015-2017%29.svg/502px-Logo_of_YouTube_%282015-2017%29.svg.png"
      alt="ytlogo"
   /> 
</div>

<div className="header_input">
   <input placeholder="Search"  type="text"/>
    <SearchIcon className="header_inputButton" />
</div>

<div className="header_icons">
    <VideoCallIcon className="header_icon"/>
    <AppsIcon className="header_icon"/>
    <NotificationsIcon className="header_icon" />
    <Avatar
    alt="ritish"
    src="https://e7.pngegg.com/pngimages/799/987/png-clipart-computer-icons-avatar-icon-design-avatar-heroes-computer-wallpaper.png"
    className="header_icon"
    />
</div>

  </div>
);
}

export default Header;
