import "../styles/Filters.css"
const Filters = (
  { filter, 
    setFilter, 
    setSelectedLocation, 
    selectedLocation, 
    jobs ,
    timeFilter,
    setTimeFilter
  }) => {
  function handleOptions(e) {
    setFilter(e.target.value)

  }
  function handleLocOptions(e) {
    setSelectedLocation(e.target.value)
  }
  const uniqueLocations = [
    ...new Set(
      jobs.flatMap(job =>
        job.candidate_required_location
          .split(",")
          .map(loc => loc.trim())
      )
    )
  ];
  return (
    <section className="select-container">
      <select value={selectedLocation} onChange={handleLocOptions} className='select-section' name="" id="">
        <option value="all">All Locations</option>
        {uniqueLocations.map((loc, index) => (
          <option key={index} value={loc}>{loc}</option>
        ))}
      </select>
      <select value={timeFilter} onChange={(e)=>setTimeFilter(e.target.value)} className='select-section' name="" id="">
        <option disabled selected value="all">Any Date</option>
        <option value="all">All</option>
        <option value="24h">Last 24 hours</option>
        <option value="7d">Last 7 days</option>
        <option value="30d">Last 30 days</option>
      </select>
      <select value={filter} onChange={handleOptions} className='select-section' name="" id="">
        <option disabled selected value="all" >Job Type</option>
        <option value="all">All</option>
        <option value="internship">Internship</option>
        <option value="contract">Contract</option>
        <option value="full_time">Full Time</option>
        <option value="part_time">Part Time</option>
      </select>
    </section>
  )
}

export default Filters
