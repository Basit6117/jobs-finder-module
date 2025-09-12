import React from 'react'
import  "../styles/Searchbar.css"
const Searchbar = ({search, setSearch}) => {
  function handleChange(e){
   setSearch(e.target.value)
  }
  return (
<div class="wrap">
   <div class="search">
      <input 
        type="text" 
        value={search} 
        onChange={handleChange} 
        className="searchTerm" 
        placeholder="Job title" />
   </div>
</div>
  )
}

export default Searchbar
