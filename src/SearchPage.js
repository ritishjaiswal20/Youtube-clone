import React from 'react';
import './SearchPage.css'
import TuneOutlinedIcon from '@mui/icons-material/TuneOutlined';
import ChannelRow from './ChannelRow.js'
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
        description="you can fid programe"
     
     />

  <hr/>

  </div>
  );
}

export default SearchPage;
