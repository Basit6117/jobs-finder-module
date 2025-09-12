import "../styles/Filters.css"
const Filters = ({filter, setFilter,setLoading}) => {
   function handleOptions(e){
    setLoading(true)
     setFilter(e.target.value)
     setLoading(false)
   }
  return (
    <>
        <select className='select-section' name="" id="">
          <option value="">All</option>
          <option value="">Africa</option>
          <option value="">Americas</option>
          <option value="">Asia</option>
          <option value="">Oceania</option>
          <option value="">Europe</option>
        </select>
        <select className='select-section' name="" id="">
          <option disabled selected value="all">Work Mode</option>
          <option value="all">All</option>
          <option value="Remote">Remote</option>
          <option value="On-site">On-site</option>
          <option value="Hybrid">Hybrid</option>
        </select>
        <select value={filter} onChange={handleOptions} className='select-section' name="" id="">
          <option disabled selected value="all" >Job Type</option>
          <option value="all">All</option>
          <option value="internship">Internship</option>
          <option value="contract">Contract</option>
          <option value="full_time">Full Time</option>
          <option value="part_time">Part Time</option>
        </select>
</>
  )
}

export default Filters
