import React from 'react'
import "../styles/Filters.css"
const Searchbar = ({search, setSearch}) => {
  function handleChange(e){
   setSearch(e.target.value)
  }
  return (
   <div className="search"> 
      <input 
        type="text" 
        value={search} 
        onChange={handleChange} 
        className="searchTerm" 
        placeholder="Job title, keywords" />
  </div>
  )
}

export default Searchbar
