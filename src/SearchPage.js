import React from 'react';
import './SearchPage.css'
import TuneOutlinedIcon from '@mui/icons-material/TuneOutlined';
import ChannelRow from './ChannelRow.js'
import VideoRow from './VideoRow';
function SearchPage() {
  return (
  <div className="searchpage">
      <div className="searchpage_filter">
          <TuneOutlinedIcon/>
          <h2>Filter</h2>
      </div>
      <hr/>
     
     <ChannelRow
        image="https://www.w3schools.com/howto/img_avatar.png"
        channel="Ritish jaiswal"
        verified
        subs="660k"
        noOfVideos={382}
        description="you can find programe"
     
     />

  <hr/>
   
   <VideoRow
   image="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSRi-1IunumN5q6Jj9-RfLcomUf8BwqPKeGAw&usqp=CAU"
   channel="Ritish jaiswal"
   verified
   subs="660k"
   noOfVideos={382}
   description="you can find programe"
   title="build YT thumbnail"
   timestamp="60 sec ago"
   />



  </div>
  );
}

export default SearchPage;
