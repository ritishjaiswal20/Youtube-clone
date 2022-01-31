import React from 'react';
import './Sidebar.css';
import SidebarRow from './SidebarRow';
import HomeIcon from '@mui/icons-material/Home';
import WhatshotIcon from '@mui/icons-material/Whatshot';
import SubscriptionsIcon from '@mui/icons-material/Subscriptions';
import VideoLibraryIcon from '@mui/icons-material/VideoLibrary';
import HistoryIcon from '@mui/icons-material/History';
import OndemandVideoIcon from '@mui/icons-material/OndemandVideo';
import ExpandMoreOutlinedIcon from '@mui/icons-material/ExpandMoreOutlined';
import WatchLaterIcon from '@mui/icons-material/WatchLater';
import ThumbDownAltOutlinedIcon from '@mui/icons-material/ThumbDownAltOutlined';
import ThumbUpAltOutlinedIcon from '@mui/icons-material/ThumbUpAltOutlined';
function Sidebar() {
  return (
  
  <div className='sidebar'>
     <SidebarRow selected Icon={HomeIcon} title="Home"/>
     <SidebarRow Icon={WhatshotIcon} title="Trending"/>
     <SidebarRow Icon={SubscriptionsIcon}title="Subscription"/>
     <hr/>
     <SidebarRow Icon={VideoLibraryIcon } title="Library"/>
     <SidebarRow Icon={HistoryIcon} title="History"/>
     <SidebarRow Icon={OndemandVideoIcon} title="Your videos"/>
     <SidebarRow Icon={ThumbUpAltOutlinedIcon} title="Likedvideos"/>
     <SidebarRow Icon={WatchLaterIcon} title="Watch later"/>
     <SidebarRow Icon={ExpandMoreOutlinedIcon} title="Show more"/>
  </div>
  
  );
}
export default Sidebar;
