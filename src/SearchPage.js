import React from 'react';
import './SearchPage.css'
import TuneOutlinedIcon from '@mui/icons-material/TuneOutlined';
function SearchPage() {
  return (
  <div className="searchpage">
      <div className="searchpage_filter">
          <TuneOutlinedIcon/>
          <h2>Filter</h2>
      </div>
  </div>
  );
}

export default SearchPage;
