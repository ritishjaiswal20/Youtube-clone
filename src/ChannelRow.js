import React from 'react';
import ChannelRow from './ChannelRow.css'
import { Avatar } from '@mui/material';
import CheckCircleOutlineOutlinedIcon from '@mui/icons-material/CheckCircleOutlineOutlined';
function ChannnelRow({image,channel,row,subs,noOfVideos,
verified,
description
}) {
  return (
  <div className="ChannelRow">
      <Avatar className="channelRow_logo" alt={channel} src={image}/>
      <div className="channelRow_text">
     <h4>{channel} {verified &&         <CheckCircleOutlineOutlinedIcon/> }
     </h4>
     <p>
       {subs} subscriber : {noOfVideos}
     </p>
     <p>
       {description}
     </p>
      </div>
  </div>
  );
}

export default ChannnelRow;
