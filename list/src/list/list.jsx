import React from 'react';
import '../list/list-styles.css';

function list() {
  return (

    <div className='container'>

    <div className='header'>
        <div className='heading'> Accuknox </div>
    </div>


    <div class="wrap">
   <div class="search">
      <input type="text" class="searchTerm" placeholder="What are you looking for?" />
      <button type="submit" class="searchButton">
        <i class="fa fa-search"></i>
     </button>
   </div>
</div>

    </div>

  );
};

export default list